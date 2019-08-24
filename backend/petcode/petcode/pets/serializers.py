from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
# from petcode.pets.models import Pet, PetType, Size, Gender, CategoryStatus, Category, Image
from petcode.pets.models import Pet, PetType, CategoryStatus, Category, Image


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class PetTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetType
        fields = ['id', 'name']


# class SizeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Size
#         fields = ['id', 'name']

# class GenderSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Gender
#         fields = ['id', 'name']

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

class PetSerializer(serializers.ModelSerializer):
    images = ImageSerializer(read_only=True, many=True)
    # category = CategorySerializer()

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
            'state', 
            'city', 
            'contact_name',
            'phone_1',
            'phone_2',
            'email',
            'published_date'
        ]

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    username = serializers.CharField(
        max_length=32,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        