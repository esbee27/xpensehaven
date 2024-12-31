from django.contrib import messages
from models import User, Category, Transactions, Budget
from django.contrib.auth import login as auth_login, authenticate
from rest_framework import serializers
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.views import APIView
from serializers import serializers
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer, BudgetSerializer, TransactionSerializer


# Sign up and authentication

class SignUpView(APIView):
    def post_user(self, request):
        username = request.info.get('username')
        passsword = request.info.get('password')
        email = request.info.get('email')
        if User.objects.filter(username=username).exists():
            return Response({"error: "Username already exist}, status=400)
        user = User.objects.create_user(username=username, email=email, password=passsword)
        return Response(UserSerializer(user).info, status=201)



class CreateBudget(APIView):
    permission_classes = [IsAuthenticated]

    def get(self):
        user = self.request.user
        return Budget.objects.filter(user=user)
    
    def create(self, validated_data):
        serializer = BudgetSerializer

        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class CreateTransactions(APIView):
    permission_classes = [IsAuthenticated]

    def get(self):
        user = self.request.user
        return Transactions.objects.filter(user=user)
    
    def create(self, validated_data):
        serializer = TransactionSerializer

        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)