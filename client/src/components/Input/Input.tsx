import { useFormikContext } from "formik"
import { memo, ReactNode, useMemo } from "react"
import { BiError } from "react-icons/bi"

interface InputProps {
  placeholder?: string
  name: string
  label?: string
  labelIcon?: ReactNode
  type: "text" | "number"

  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}

function Input(props: InputProps) {
  const { values, errors, submitCount, handleChange } = useFormikContext<any>()

  const error = useMemo(() => errors[props.name], [errors, props.name])

  return (
    <div className="flex flex-col gap-0">
      {props.label && (
        <label className="flex items-center gap-1">
          {props.label} {props.labelIcon}
        </label>
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={values[props.name]}
        className="border-2 border-gray-600 p-2 rounded-md"
        name={props.name}
        onChange={handleChange}
        {...props.inputProps}
      />
      {error && submitCount > 0 && (
        <p className="text-md text-red-500">
          <BiError className="inline mr-1" />
          {error}
        </p>
      )}
    </div>
  )
}

export default memo(Input)
