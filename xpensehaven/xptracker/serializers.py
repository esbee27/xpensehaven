from rest_framework import serializers
from .models import Category, Budget, Transaction
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fieldss = ['id', 'username', 'email', 'password']
           
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ['name', 'allocated', 'amount_left', 'staus', 'date', 'actions']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['trans_id', 'type', 'date', 'amount']