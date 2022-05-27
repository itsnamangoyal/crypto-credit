import { memo, useCallback, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface ButtonProps {
  children: string | React.ReactNode
  onClick?: Function
  variant?: "primary" | "secondary" | "danger"
  type?: "button" | "submit"
  loading?: boolean
  disabled?: boolean
  className?: string
}

function Button(props: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const onClick = useCallback(async () => {
    if (props.loading || props.disabled || isLoading || !props.onClick) {
      return
    }
    setIsLoading(true)
    await props.onClick()
    setIsLoading(false)
  }, [props.onClick, isLoading, props.disabled, props.loading])

  return (
    <button
      onClick={onClick}
      type={props.type}
      disabled={props.disabled || isLoading || props.loading}
      className={[
        props.className,
        "flex items-center justify-center gap-2",
        "transition ease-in-out duration-100",
        "text-white py-2 px-4 rounded-sm max-h-min min-h-max",
        "disabled:bg-opacity-75 disabled:scale-100",
        "active:scale-90",
        colors[props.variant || "primary"],
      ].join(" ")}>
      {(props.loading || isLoading) && (
        <AiOutlineLoading3Quarters className="animate-spin" />
      )}
      {props.children}
    </button>
  )
}

const colors = {
  primary: "bg-slate-900",
  secondary: "bg-black",
  danger: "bg-red-600",
}

export default memo(Button)
