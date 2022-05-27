from enum import auto
from tortoise import Model, fields


class Offer(Model):
    id = fields.IntField(pk=True)
    creator = fields.TextField(requried=True)
    amount = fields.IntField(required=True)
    interest = fields.IntField(required=True)
    created_at = fields.DatetimeField(required=True)
    duration = fields.IntField(required=True)
    accepted = fields.BooleanField(required=True, default=False)
    cancelled = fields.BooleanField(required=True, default=False)
    listing = fields.ForeignKeyField(
        'models.Listing',
        related_name='offers',
        on_delete='CASCADE'
    )


class Token(Model):
    id = fields.IntField(pk=True, generated=auto)
    token_id = fields.IntField()
    uid = fields.IntField()
    owner = fields.TextField()
    address = fields.TextField()
    ipfs = fields.ForeignKeyField(
        'models.Ipfs',
        related_name="token",
        index=True,
        null=True,
        on_delete=fields.SET_NULL
    )


class Listing(Model):
    id = fields.IntField(pk=True)
    creator = fields.TextField()
    amount = fields.IntField()
    duration = fields.IntField()
    interest = fields.IntField()
    created_at = fields.DatetimeField()
    offers = fields.ReverseRelation[Offer]
    cancelled = fields.BooleanField(default=False)
    accepted = fields.BooleanField(default=False)
    token = fields.ForeignKeyField(
        'models.Token',
        related_name="listing",
        on_delete=fields.CASCADE,
        index=True,
    )


class Ipfs(Model):
    uri = fields.CharField(max_length=53, index=True, unique=True)
    name = fields.CharField(max_length=256)
    symbol = fields.CharField(max_length=10)
    description = fields.CharField(max_length=1000)
    thumbnail = fields.CharField(max_length=53)
    image = fields.CharField(max_length=53)
    creator = fields.CharField(max_length=100)


class Loan(Model):
    id = fields.IntField(pk=True)
    loanee = fields.TextField()
    lender = fields.TextField()
    principal_amount = fields.IntField()
    interest = fields.IntField()
    start_time = fields.DatetimeField()
    duration = fields.IntField()  # seconds
    repaid = fields.BooleanField(default=None, null=True)
    token = fields.OneToOneField(
        'models.Token',
        related_name="loan",
        index=True,
        on_delete=fields.CASCADE,
    )
