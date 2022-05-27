import { memo, useCallback } from "react"

import { Button } from "components"
import { useCryptoCreditContract } from "hooks/contract/cryptoCredit"
import { loan } from "services/indexer/genql"
import Big from "big.js"

interface RepayLoanFormProps {
  loan: loan
  onCancel: Function
  settle?: boolean
}

function RepayLoanForm(props: RepayLoanFormProps) {
  const cryptoCreditContract = useCryptoCreditContract()

  const onSubmit = useCallback(async () => {
    await cryptoCreditContract.repayLoan({
      loan: props.loan,
    })

    await props.onCancel()
  }, [props.loan, props.onCancel, cryptoCreditContract.cancelListing])

  return (
    <div>
      <p className="text-lg font-semibold tracking-wide leading-0 m-0 mb-3">
        {props.settle ? "Settle Loan" : "Repay Loan"}
      </p>
      <p className="mb-1">
        {props.settle
          ? "Are you sure you want to settle this loan?"
          : `Are you sure you want to repay the loan? You will be charged a total of ${Big(
              props.loan.principal_amount
            )
              .add(
                Big(props.loan.principal_amount)
                  .mul(props.loan.interest)
                  .div(100)
              )
              .div(1e6)
              .toNumber()} XTZ for the repayment.`}
      </p>
      <div className="flex gap-2 items-center">
        <Button className="flex-1" onClick={props.onCancel}>
          No
        </Button>
        <Button
          type="submit"
          onClick={onSubmit}
          className="flex-1"
          variant="danger">
          Yes
        </Button>
      </div>
    </div>
  )
}

export default memo(RepayLoanForm)
