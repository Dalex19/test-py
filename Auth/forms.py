from django import forms

class SignInForm(forms.Form):
    # create fields o textfield
    firstname = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': '',
            'placeholder': 'Name',
            'type': 'text',
            'name' : 'firstname'
        })
    )

    lastname = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': '',
            'placeholder': 'Last Name',
            'type': 'type',
            'name' : 'lastname'
        })
    )
    
    username = forms.CharField(
        widget=forms.TextInput(attrs={
            'class':'',
            'placeholder':'Username',
            'type':'text',
            'name' : 'username'
        })
    )

    email = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': '',
            'placeholder': 'Email',
            'type': 'email',
            'name': 'email'
        })
    )

    password = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': '',
            'placeholder': 'Password',
            'type': 'password',
            'name': 'password'
        })
    )