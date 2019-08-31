from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from petcode.pets.models import Pet, PetType, CategoryStatus, Category, Image, PetStatusHistory
from petcode.users.models import User

class PetTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetType
        fields = ['id', 'name']

class CategoryStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryStatus
        fields = ['id', 'name', 'category']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image']

class PetStatusHistorySerializer(serializers.ModelSerializer):
    category_status = CategoryStatusSerializer(read_only=True, many=False)

    class Meta:
        model = PetStatusHistory
        fields = ['category_status', 'created']

class PetSerializer(serializers.ModelSerializer):
    images = ImageSerializer(read_only=True, many=True)
    status_history = PetStatusHistorySerializer(read_only=True, many=True)

    class Meta:
        model = Pet
        fields = [
            'id', 
            'images', 
            'user', 
            'name', 
            'description', 
            'pet_type', 
            'size', 
            'gender', 
            'category',
            'category_status', 
            'status_history', 
            'state', 
            'city', 
            'contact_name',
            'phone_1',
            'phone_2',
            'email',
            'published_date'
        ]

        