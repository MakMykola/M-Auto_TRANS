from django import forms
from .models import *


class AddCommForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['author', 'content']


