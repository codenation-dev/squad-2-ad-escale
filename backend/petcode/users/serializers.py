from rest_framework import serializers
from django.contrib.auth import get_user_model
from .permissions import PublicCreateOnly
from rest_framework.decorators import action

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        return user

    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'first_name', 'last_name']