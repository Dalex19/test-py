from django.urls import path
from Auth.views import SignIn as login

urlpatterns = [
    path('sign_in/',login, name='SignIn'),
]