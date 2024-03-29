from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
import stripe
import time
# import os
from django.conf import settings
from .models import Payment
from .serializers import PaymentSerializer

stripe.api_key = settings.STRIPE_API_KEY
stripe.client_id = settings.STRIPE_CLIENT_ID,
stripe.api_version = "2020-08-27"


@api_view(['POST'])
@login_required
def create_withdraw_account(request):
    print(request.user.email)
    if request.user.is_authenticated == True:
        data = request.data
        withdraw_account = stripe.Account.create(
            type='custom',
            email=request.user.email,
            country="IN",
            business_type="individual",
            capabilities={
                "card_payments": {
                    "requested": True
                },
                "transfers": {
                    "requested": True
                }
            },
            individual={
                'first_name': request.user.email,
                'last_name': "seller5",
                'id_number': data["idNo"],
                'address': {
                    'state': data["state"],
                    'city': data["city"],
                    'postal_code': data["postalcode"],
                    'line1': data["address"],
                },
                'dob': {
                    "day": data["day"],
                    "month": data["month"],
                    "year": data["year"]
                },
            },
            tos_acceptance={
                "date": int(time.time()),
                "ip": "8.8.8.8"
            },
            external_account={
                "object": "bank_account",
                "account_number": data["accountNo"],
                "routing_number": data['routingNo'],
                "account_holder_name": "new seller",
                "account_holder_type": "individual",
                "currency": "inr",
                "country": "IN"
            }
        )
        data = withdraw_account
        return Response(data)
    return Response({"You are not logged in"})


@api_view(['GET', 'POST'])
@login_required
def get_custom_account(request):
    print(request.user)
    account = stripe.Account.retrieve("acct_1JS4YBSI9UpzGNLz")
    return Response(account)


@api_view(['POST'])
# @login_required
def accept_payment(request):
    data = request.data
    payment = Payment(email="123@gmail.com", Amount="200")
    payment.save()
    customer = stripe.Customer.create(
        email=request.user.email, payment_method=data['payment_method_id'])
    payment_intent = stripe.PaymentIntent.create(
        customer=customer,
        payment_method=data['payment_method_id'],
        currency="usd",
        amount=data["amount"],
        confirmation_method='manual',
        confirm=True
    )
    return Response({'clientSecret': payment_intent.client_secret})


@api_view(['POST', 'GET'])
def upload_identity_verification_file(request):
    with open("static\success.png", "rb") as fp:
        res = stripe.FileUpload.create(purpose='identity_document',
                                       file=fp,
                                       stripe_account="acct_1JS4YBSI9UpzGNLz")
        verification_id = res["id"]

        res = stripe.Account.modify('acct_1JS4YBSI9UpzGNLz',
                                    individual={
                                        "verification": {
                                            "document": {
                                                "front": verification_id
                                            }
                                        }
                                    })

        print(res)

    return Response(res)


# @api_view(['POST'])
# def save_amount(request):
#     if request.method == 'POST':
#         serializer = PaymentSerializer(data=request.data)  
#         data = {}
#         if serializer.is_valid():
#             payment = serializer.save()            
#             data['response'] = 'succesfully register new user'
#             data['email'] = "fm@gmail.com"            
#             data["Amount"] = 200   
#             data["BetSlip"] = "India Vs Pakistan"
#             data["Odds"] = 2.89
#         else:
#             data = serializer.errors
#         return Response(data)


# @api_view(['POST'])
# def save_amount(request):
#     if request.method == 'POST':
#         serializer = PaymentSerializer(data=request.data)
#         data = {}
#         if serializer.is_valid():
#             payment = serializer.save()
#             data['response'] = 'succesfully register new user'
#             data['email'] = "fm@gmail.com"
#             data["Amount"] = 200
#             data["BetSlip"] = "India Vs Pakistan"
#             data["Odds"] = 2.89
#         else:
#             data = serializer.errors
#         return Response(data)


# @api_view(['POST'])
# def save_stripe_info(request):
#     data = request.data
#     extra_msg = ''
#     customer_data = stripe.Customer.list(email=data['email']).data
#     if len(customer_data) == 0:
#         customer = stripe.Customer.create(
#             email=data['email'], payment_method=data['payment_method_id'])
#         stripe.PaymentIntent.create(
#             customer=customer,
#             payment_method=data['payment_method_id'],
#             currency='inr',  # you can provide any currency you want
#             amount=200000,
#             confirm=True
#         )
#     else:
#         customer = customer_data[0]
#         extra_msg = "Customer already existed."
#         stripe.PaymentIntent.create(
#             customer=customer,
#             payment_method=payment_method_id,
#             currency='inr',  # you can provide any currency you want
#             amount=200000,
#             confirmation_method='manual',
#             confirm=True,
#         )
#     return Response(
#         data={'message': 'Success', 'data': {
#             'customer_id': customer.id, 'extra_msg': extra_msg}
#         })


# @api_view(['POST'])
# def update_custom_account(request):
#     data = request.data
#     res = stripe.Account.modify("acct_1JRhXlSADBT1dQ6E",
#                                 individual={
#                                     'first_name': 'new',
#                                     'last_name': "seller",
#                                     'id_number': data['idNo'],
#                                     'address': {
#                                         'state': data['state'],
#                                         'city': data['city'],
#                                         'postal_code': 855101,
#                                         'line1': data['address'],
#                                     },
#                                     'dob': {
#                                         "day": "01",
#                                         "month": "01",
#                                         "year": "1901"
#                                     },
#                                 },
#                                 tos_acceptance={
#                                     "date": int(time.time()),
#                                     "ip": "8.8.8.8"
#                                 })
#     return Response(res)


# @api_view(['POST', 'GET'])
# def create_bank_account(request):
#     account = stripe.Account.create_external_account(
#         "acct_1JS4YBSI9UpzGNLz",
#         external_account={
#             "object": "bank_account",
#             "account_number": "000123456789",
#             "routing_number": "HDFC0000261",
#             "account_holder_name": "seller better",
#             "account_holder_type": "individual",
#             "currency": "inr",
#             "country": "IN"
#         })
#     return Response(account)

# Payments for Betting
# @api_view(['POST', 'GET'])
# def create_checkout_session(request):
#  checkout_session = stripe.checkout.Session.create(
#   payment_method_types=[ 'card'],
#   line_items=[{
#     'name': 'Bet Slip',
#     'amount': 5000,
#     'currency': 'inr',
#     'quantity': 1,
#   }],
#   payment_intent_data={
#     'application_fee_amount': 1233,
#     'transfer_data': {
#       'destination': 'acct_1JS4YBSI9UpzGNLz',
#     },
#   },
#   mode='payment',
#   success_url='http://localhost:3000/',
#   cancel_url='http://localhost:3000/',
#   )

#  return Response(checkout_session)
