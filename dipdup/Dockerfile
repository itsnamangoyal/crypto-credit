FROM python:3.10-slim-buster

RUN pip install poetry

WORKDIR /crypto_credit
COPY pyproject.toml poetry.lock ./

RUN poetry config virtualenvs.create false && poetry install --no-dev

COPY . ./

ENTRYPOINT poetry run dipdup run
