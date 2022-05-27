import Big from "big.js"
import Button from "components/Button"
import dayjs from "dayjs"
import { useCryptoCreditContract } from "hooks/contract/cryptoCredit"
import { memo, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { loan } from "services/indexer/genql"
import { useAppSelector } from "store"
import * as utils from "utils"

interface Props {
  loan: loan
  count: number
}

function LoanListItem(props: Props) {
  const user = useAppSelector((state) => state.wallet)
  const [timeLeft, setTimeLeft] = useState<number | undefined>(undefined)
  const contract = useCryptoCreditContract()

  useEffect(() => {
    if (props.loan.repaid !== null) {
      setTimeLeft(undefined)
      return
    }

    const _endTime = dayjs(props.loan.start_time).add(
      props.loan.duration,
      "seconds"
    )

    const interval = setInterval(() => {
      if (_endTime.isBefore(dayjs())) {
        clearInterval(interval)
        setTimeLeft(0)
        return
      }
      setTimeLeft(_endTime.diff(dayjs(), "second"))
    }, 1000)

    return () => clearInterval(interval)
  }, [props.loan])

  return (
    <tr
      className={[props.count % 2 === 0 ? "bg-slate-800" : "bg-slate-600"].join(
        " "
      )}>
      <td className="px-5 py-2">{props.count}</td>
      <td className="px-5 py-2 inline-flex items-center justify-center gap-1">
        <img
          className="w-[3rem]"
          src={utils.getTokenImageUrl(props.loan.token.ipfs?.thumbnail)}
        />
        <Link
          to={`/asset/${props.loan.token.address}/${props.loan.token.token_id}`}>
          {props.loan.token.ipfs?.name}
        </Link>
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "timestamp",
          value: props.loan.start_time,
        })}
      </td>
      <td className="px-5 py-2">
        {utils.time.secondsToDuration(props.loan.duration)}
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "timestamp",
          value: dayjs(props.loan.start_time)
            .add(props.loan.duration, "seconds")
            .toISOString(),
        })}
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "amount",
          value: props.loan.principal_amount,
        })}
        xtz
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "interest",
          value: props.loan.interest,
        })}
        %
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "amount",
          value: Big(props.loan.principal_amount)
            .add(
              Big(props.loan.principal_amount).mul(props.loan.interest).div(100)
            )
            .toNumber(),
        })}
        xtz
      </td>
      <td className="px-5 py-2">
        {props.loan.repaid === null
          ? timeLeft === 0
            ? "Not Repaid"
            : "Ongoing"
          : props.loan.repaid
          ? "Repaid"
          : "Not Repaid"}
      </td>
      <td className="px-5 py-2 inline-flex items-center justify-center">
        {props.loan.repaid === null ? (
          props.loan.lender === user ? (
            timeLeft === 0 && (
              <Button
                variant="danger"
                onClick={() =>
                  contract.repayLoan({
                    loan: props.loan,
                  })
                }>
                Take Asset
              </Button>
            )
          ) : props.loan.loanee === user ? (
            timeLeft ? (
              timeLeft > 0 && (
                <Button
                  onClick={() =>
                    contract.repayLoan({
                      loan: props.loan,
                    })
                  }>
                  Repay
                </Button>
              )
            ) : (
              <Button
                onClick={() =>
                  contract.repayLoan({
                    loan: props.loan,
                  })
                }>
                Settle
              </Button>
            )
          ) : null
        ) : null}
      </td>
    </tr>
  )
}

export default memo(LoanListItem)
