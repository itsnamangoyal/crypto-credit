import { TransactionWalletOperation } from "@taquito/taquito"
import { BatchWalletOperation } from "@taquito/taquito/dist/types/wallet/batch-operation"

export async function operationHandler(
  op: TransactionWalletOperation | BatchWalletOperation
) {
  try {
    const { completed } = await op.confirmation(1)
    console.log("Operation confirmation: ", completed)

    const status = await op.status()
    console.log("Operation status: ", status)
  } catch (error) {
    console.error(error)
  }
}
