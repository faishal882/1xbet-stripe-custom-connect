from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # User
    url(r'^rest-auth/', include('dj_rest_auth.urls')),
    url(r'^rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),
    # Payments
    path('payments/', include('payments.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]

