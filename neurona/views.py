import os
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.conf import settings 
from django.contrib.auth import login
from django import forms
from django.contrib.auth.forms import UserCreationForm


client = settings.AI_CLIENT

def home(request):
    return render(request, 'index.html')


class RegisterForm(UserCreationForm):
    email = forms.EmailField(
        required=True,
        widget=forms.EmailInput(attrs={"autocomplete": "email"}),
    )

    class Meta(UserCreationForm.Meta):
        fields = ("username", "email", "password1", "password2")

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data["email"]
        if commit:
            user.save()
        return user



def register_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")          # already logged in → go to dashboard

    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)              # auto-login after registration
            return redirect("dashboard")      # change to wherever you want to land
    else:
        form = RegisterForm()

    return render(request, "registration/register.html", {"form": form})  

