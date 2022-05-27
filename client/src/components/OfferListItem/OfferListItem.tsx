import Big from "big.js"
import Button from "components/Button"
import { useCryptoCreditContract } from "hooks/contract/cryptoCredit"
import { memo } from "react"
import { Link } from "react-router-dom"
import { offer } from "services/indexer/genql"
import { useAppSelector } from "store"
import * as utils from "utils"

interface Props {
  offer: offer
  count: number
}

function OfferListItem(props: Props) {
  const user = useAppSelector((state) => state.wallet)
  const contract = useCryptoCreditContract()

  return (
    <tr
      className={[props.count % 2 === 0 ? "bg-slate-600" : "bg-slate-800"].join(
        " "
      )}>
      <td className="px-5 py-2">{props.count}</td>
      <td className="px-5 py-2 inline-flex items-center justify-center gap-1">
        <img
          className="w-[3rem]"
          src={utils.getTokenImageUrl(
            props.offer.listing.token.ipfs?.thumbnail
          )}
        />
        <Link
          to={`/asset/${props.offer.listing.token.address}/${props.offer.listing.token.token_id}`}>
          {props.offer.listing.token.ipfs?.name}
        </Link>
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "timestamp",
          value: props.offer.created_at,
        })}
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "amount",
          value: props.offer.amount,
        })}{" "}
        xtz
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "interest",
          value: props.offer.interest,
        })}
        %
      </td>
      <td className="px-5 py-2">
        {utils.format({
          type: "amount",
          value: Big(props.offer.amount)
            .add(Big(props.offer.interest).div(100).mul(props.offer.amount))
            .toNumber(),
        })}{" "}
        xtz
      </td>
      <td className="px-5 py-2">
        {props.offer.accepted
          ? "Accepted"
          : props.offer.cancelled
          ? "Cancelled"
          : "Active"}
      </td>
      <td className="px-5 py-2">
        {props.offer.listing.accepted
          ? "Accepted"
          : props.offer.listing.cancelled
          ? "Cancelled"
          : "Active"}
      </td>
      <td className="px-5 py-2 inline-flex flex-col items-center justify-center">
        {props.offer.creator === user
          ? !(props.offer.accepted || props.offer.cancelled) && (
              <Button
                variant="danger"
                onClick={() =>
                  contract.cancelOffer({
                    offerId: props.offer.id,
                  })
                }>
                Cancel
              </Button>
            )
          : props.offer.listing.creator === user &&
            !(
              props.offer.listing.accepted || props.offer.listing.cancelled
            ) && (
              <Button
                onClick={() =>
                  contract.acceptOffer({
                    offerId: props.offer.id,
                  })
                }>
                Accept
              </Button>
            )}
      </td>
    </tr>
  )
}

export default memo(OfferListItem)
