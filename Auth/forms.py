from django import forms

class SignInForm(forms.Form):
    # create fields o textfield
    username = forms.CharField(
        widget=forms.TextInput(attrs={
            'class':'',
            'placeholder':'Username',
            'type':'text'
        })
    )

    password = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': '',
            'placeholder': 'Password',
            'type': 'password'
        })
    )