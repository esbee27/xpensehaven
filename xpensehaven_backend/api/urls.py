from django.urls import path
from .views import TransListCreate, BudListCreate, CatListCreate, AboutView, ExchangeTokenView

app_name = 'api'

urlpatterns = [
    path('transactions/', TransListCreate.as_view(), name='transactions'),
    path('budgets/', BudListCreate.as_view(), name='budgets'),
    path('categories/', CatListCreate.as_view(), name='categories'),
    path("exchange-token/", ExchangeTokenView.as_view(), name="exchange-token"),
    path('about/', AboutView.as_view(), name='about'),
]