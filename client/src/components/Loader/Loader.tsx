import { memo } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

function Loader() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="h-24 w-24 p-5">
        <AiOutlineLoading3Quarters className="animate-spin w-full h-full" />
      </div>
    </div>
  )
}

export default memo(Loader)
