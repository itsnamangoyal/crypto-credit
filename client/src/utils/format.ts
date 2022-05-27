import Big from "big.js"

import * as utils from "utils"

type TokenIdFormat = {
  type: "tokenId"
  value: number
}

type WalletFormat = {
  type: "wallet"
  value: string
}

type AmountFormat = {
  type: "amount"
  value: number
}

type DurationFormat = {
  type: "duration"
  value: number
}

type InterestFormat = {
  type: "interest"
  value: number
}

type TimestampFormat = {
  type: "timestamp"
  value: string
}

type Props =
  | TokenIdFormat
  | WalletFormat
  | AmountFormat
  | DurationFormat
  | InterestFormat
  | TimestampFormat

export function format(props: Props) {
  switch (props.type) {
    case "tokenId":
      return tokenIdFormat.format(props.value)
    case "wallet":
      return props.value.slice(0, 6) + "-" + props.value.slice(-5)
    case "amount":
      return Big(props.value).div(1e6).toFixed(2)
    case "duration":
      return utils.time.secondsToDuration(props.value)
    case "interest":
      return interestFormat.format(props.value)
    case "timestamp":
      return new Date(props.value).toLocaleString()
    default:
      throw new Error("Unknown format type")
  }
}

const tokenIdFormat = Intl.NumberFormat("en-US", {
  minimumIntegerDigits: 4,
  useGrouping: false,
})

const interestFormat = Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  useGrouping: true,
})
