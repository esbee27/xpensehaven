from .models import XpensehavenUser
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = XpensehavenUser
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = { 'password': {'write_only': True}}