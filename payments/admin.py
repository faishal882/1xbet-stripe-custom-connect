from django.contrib import admin
from .models import Payment


class PaymentAdmin(admin.ModelAdmin):
 list_display = ['email', 'Amount', 'BetSlip', 'Odds']
 list_filter = ['email']


admin.site.register(Payment, PaymentAdmin)
