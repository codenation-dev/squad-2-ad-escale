from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from .permissions import PublicCreateOnly
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)


User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [PublicCreateOnly]

    @action(detail=False, methods=['post'], permission_classes=[AllowAny], url_path='login')
    def login(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        if email is None or password is None:
            return Response({'error': 'Please provide both email and password'},
                            status=HTTP_400_BAD_REQUEST)
        user = User.objects.get(email=email)
        if not user:
            return Response({'error': 'Invalid Credentials'},
                            status=HTTP_404_NOT_FOUND)
        if user.check_password(password):
            token, _ = Token.objects.get_or_create(user=user)
            response = {}
            response['email'] = email
            response['token'] = token.key
            return Response(response,
                            status=HTTP_200_OK)

    @action(methods=['post'], detail=False, url_path='change-password', permission_classes=[AllowAny])
    def set_password(self, request, pk=None):
        email = request.data.get("email")
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")
        user = User.objects.get(email=email)
        if not user:
            return Response({'error': 'User does not exists'},
                            status=HTTP_404_NOT_FOUND)

         if user.check_password(old_password):            
            user.set_password(new_password)
            user.save()
            return Response({'status': 'Password has been set'}, status=HTTP_200_OK)  

         return Response({'old_password': ['Wrong password.']}, 
                            status=HTTP_400_BAD_REQUEST)