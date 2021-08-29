from django.db import models
from django.db.models.fields import NullBooleanField
from djmoney.models.fields import MoneyField


class Payment(models.Model):
 email = models.EmailField(null=False)
 Amount = MoneyField(max_digits=14, decimal_places=2,
                     default_currency='USD', null=False)
 BetSlip = models.TextField(default="India Vs Pakistan Draw")
 Odds = models.DecimalField(decimal_places=3, max_digits=6, default=2.98)

 def __str__(self):
     return self.email
