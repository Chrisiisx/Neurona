import os
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.conf import settings 
client = settings.AI_CLIENT

# Create your views here.


def home(request):
    return render(request, 'index.html')  

