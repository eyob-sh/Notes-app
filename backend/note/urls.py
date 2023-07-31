from django.urls import path
from . import views
urlpatterns = [
    path('add/', views.Add, name="add"),
    path('get/', views.get, name="get"),
    path('delete/<str:pk>/', views.delete, name="delete"),
    path('update/<str:pk>/', views.update, name="update"),
    
]
