from django.urls import path
from . import views


urlpatterns = [
    path('', views.addition, name='addition'),
    path('sub/', views.sub, name='sub'),
    path('multi/', views.multi, name='multi'),
    path('divis/', views.divis, name='divis'),
]