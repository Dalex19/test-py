from django.shortcuts import render
from .forms import SignInForm

# Create your views here.
def SignIn(request):
    form = SignInForm()
    return render(request,'SignIn/SignIn.html',{
        'form':form,
    })