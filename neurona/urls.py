from django.contrib import admin
from django.urls import path
from django.contrib.auth.views import LoginView
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('register', views.register_view, name='register'),
]