import { memo } from "react"
import { Link } from "react-router-dom"

import { token } from "services/indexer/genql"
import * as utils from "utils"

interface TokenCardProps {
  token: token
}

function TokenCard(props: TokenCardProps) {
  return (
    <Link to={`/asset/${props.token.address}/${props.token.token_id}`}>
      <div className="bg-slate-900 p-1 rounded-md text-center flex flex-col gap-1">
        <img
          src={utils.getTokenImageUrl(props.token.ipfs?.thumbnail)}
          alt={props.token.ipfs?.name}
          className="w-52 flex-1 p-5"
        />
        <p className="font-bold text-white">
          {props.token.ipfs?.name} #
          {utils.format({
            type: "tokenId",
            value: props.token.token_id,
          })}
        </p>
      </div>
    </Link>
  )
}

export default memo(TokenCard)
