from django.urls import path 
from .views import PythonSimulator

urlpatterns = [
    path('simulation', PythonSimulator.as_view()),
]