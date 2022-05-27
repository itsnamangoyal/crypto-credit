
from crypto_credit.types.crypto_credit.storage import CryptoCreditStorage
from dipdup.models import Transaction
from crypto_credit.types.crypto_credit.parameter.repay_loan import RepayLoanParameter
from dipdup.context import HandlerContext

from crypto_credit import models


async def on_repay_loan(
    ctx: HandlerContext,
    repay_loan: Transaction[RepayLoanParameter, CryptoCreditStorage],
) -> None:
    for loan_id in repay_loan.storage.loans:
        loan_in_storage = repay_loan.storage.loans[loan_id]
        loan = await models.Loan.get(id=int(loan_id))

        loan.repaid = loan_in_storage.repaid
        await loan.save()
