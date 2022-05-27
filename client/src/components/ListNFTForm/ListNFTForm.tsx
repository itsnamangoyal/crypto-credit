import { Formik, FormikHelpers } from "formik"
import { memo, useCallback } from "react"
import { FaBusinessTime, FaMoneyCheck, FaPercentage } from "react-icons/fa"
import * as yup from "yup"

import { Button, Input } from "components"
import { token } from "services/indexer/genql"
import { useCryptoCreditContract } from "hooks/contract/cryptoCredit"

interface ListNFTFormProps {
  token: token
  onCancel: Function
}

function ListNFTForm(props: ListNFTFormProps) {
  const cryptoCreditContract = useCryptoCreditContract()

  const onSubmit = useCallback(
    async (values, formikHelpers: FormikHelpers<any>) => {
      if (!props.token) {
        return
      }

      await cryptoCreditContract.createListing({
        asset: {
          address: props.token.address,
          tokenId: props.token.token_id,
        },
        amount: values.amount,
        duration: values.duration,
        interest: values.interest,
      })

      console.log(values)

      formikHelpers.setSubmitting(false)
      formikHelpers.resetForm()

      await props.onCancel()
    },
    [props.token, cryptoCreditContract]
  )

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        amount: 1,
        interest: 1,
        duration: 1,
      }}
      onSubmit={onSubmit}>
      {({ handleSubmit, isSubmitting }) => {
        return (
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <p className="text-lg font-semibold tracking-wide leading-0 m-0">
              List NFT
            </p>
            <Input
              label="Amount"
              name="amount"
              type="number"
              placeholder="Amount of loan"
              labelIcon={<FaMoneyCheck />}
              inputProps={{
                min: 0,
              }}
            />
            <Input
              label="Interest"
              name="interest"
              labelIcon={<FaPercentage />}
              type="number"
              placeholder="Interest in percentage"
              inputProps={{
                min: 0,
              }}
            />
            <Input
              label="Duration"
              name="duration"
              labelIcon={<FaBusinessTime />}
              type="number"
              placeholder="Duration in days"
              inputProps={{
                min: 0,
              }}
            />

            <div className="flex items-center gap-2 ">
              <Button
                type="button"
                onClick={props.onCancel}
                className="flex-1"
                variant="danger">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
                className="flex-1">
                Submit
              </Button>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default memo(ListNFTForm)

const validationSchema = yup.object().shape({
  amount: yup
    .number()
    .moreThan(0, "Amount must be more than 0 tez")
    .required("Amount is required"),
  interest: yup
    .number()
    .moreThan(0, "Interest must be more than 0 percent")
    .required("Interest is required"),
  duration: yup
    .number()
    .moreThan(0, "Duration must be more than 0 days")
    .required("Duration is required"),
})
