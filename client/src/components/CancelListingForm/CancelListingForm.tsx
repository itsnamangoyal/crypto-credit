import { memo, useCallback } from "react"

import { Button } from "components"
import { useCryptoCreditContract } from "hooks/contract/cryptoCredit"

interface ListNFTFormProps {
  listingId: number
  onCancel: Function
}

function ListNFTForm(props: ListNFTFormProps) {
  const cryptoCreditContract = useCryptoCreditContract()

  const onSubmit = useCallback(async () => {
    await cryptoCreditContract.cancelListing({
      listingId: props.listingId,
    })

    await props.onCancel()
  }, [props.listingId, props.onCancel, cryptoCreditContract.cancelListing])

  return (
    <div>
      <p className="text-lg font-semibold tracking-wide leading-0 m-0 mb-3">
        Cancel Listing
      </p>
      <p className="mb-1">
        Are you sure you want to cancel listing for this NFT? This will cancel
        all the offers that are made to this listing!
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

export default memo(ListNFTForm)
