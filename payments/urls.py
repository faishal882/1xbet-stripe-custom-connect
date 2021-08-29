from django.urls import path
from .views import (create_withdraw_account,
                    get_custom_account,
                    upload_identity_verification_file,
                    accept_payment,
                    )

app_name = 'users'

urlpatterns = [
    path('connect-account/', create_withdraw_account, name='create-account'),
    path('get-account/', get_custom_account, name='get-account'),
    path('verify-identity/', upload_identity_verification_file, name='add-account'),
    path('accept-payment/', accept_payment, name='accept_payment'),
    # path('save-amount/', save_amount, name='accept_payment'),
    # path('test-payment/', test_payment, name='payment-intent'),
    # path('add-account/', create_bank_account, name='add-account'),
    # path('update-account/', update_custom_account, name='update-account'),
    # path('checkout/', create_checkout_session, name='payment-intent'),
    # path('checkout-session/', upload_identity_verification_file, name='add-account'),
]
