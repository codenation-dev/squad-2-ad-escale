from rest_framework.authtoken.models import Token
from rest_framework import viewsets, permissions, status
from url_filter.integrations.drf import DjangoFilterBackend
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from petcode.pets.models import Pet, PetType, CategoryStatus, Category, Image
from petcode.pets.serializers import ImageSerializer, PetTypeSerializer, PetSerializer, CategorySerializer, CategoryStatusSerializer
from petcode.users.serializers import UserSerializer

from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.parsers import FileUploadParser


############################################################################
# Permissões customizadas
############################################################################
class PublicRetrieveAndListOnly(permissions.IsAuthenticated):
    """
    Custom permission to only allow list and retrieve without authorization
    """
    def has_permission(self, request, view):
        if view.action in ['list', 'retrieve']:
            return True
        else:
            return bool(request.user and request.user.is_authenticated)


class PublicCreateOnly(permissions.IsAuthenticated):
    """
    Custom permission to only allow create without authorization
    """
    def has_permission(self, request, view):
        if view.action in ['create',]:
            return True
        else:
            return bool(request.user and request.user.is_authenticated)

############################################################################
# FIM Permissões customizadas
############################################################################

class PetTypeViewSet(viewsets.ModelViewSet):
    queryset = PetType.objects.all()
    serializer_class = PetTypeSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [PublicRetrieveAndListOnly]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
class CategoryStatusViewSet(viewsets.ModelViewSet):
    queryset = CategoryStatus.objects.all()
    serializer_class = CategoryStatusSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class PetViewSet(viewsets.ModelViewSet, generics.ListAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
    permission_classes = [PublicRetrieveAndListOnly]
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['category', 'category_status', 'user', 'name', 'gender', 'size', 'state', 'city', 'published_date']

    def create(self, request):
        request.data['user'] = request.user.id
        return super(PetViewSet, self).create(request)

    @action(detail=False, methods=['get'])
    def my(self, request):
        queryset = self.get_queryset().filter(user=request.user.id)
        serializer = PetSerializer(queryset, many=True)
        return Response(serializer.data)


class ImageUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, pk=False, *args, **kwargs):
        pet = Pet.objects.get(pk=pk)
        file_serializer = ImageSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            pet.images.add(file_serializer.data['id'])
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)