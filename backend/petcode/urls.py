from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import include, path
from rest_framework import routers
from petcode.pets import views

router = routers.DefaultRouter()

# Rotas da API
router.register(r'users', views.UserViewSet)
router.register(r'pet', views.PetViewSet)
router.register(r'pet-type', views.PetTypeViewSet)
# router.register(r'pet-size', views.SizeViewSet)
# router.register(r'pet-gender', views.GenderViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'category-status', views.CategoryStatusViewSet)
router.register(r'pet-images', views.ImageViewSet)

urlpatterns = [
    # Público - Não precisa passar Token
    path('admin/', admin.site.urls),

    # Privados - Precisa passar Token ( API )
    path('api/', include((router.urls, 'api'), namespace='instance_name')),
    path('api/pet/<int:pk>/image-upload', views.ImageUploadView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
