from django.contrib import admin
from .models import Pet, PetType, CategoryStatus, Category, CategoryAdmin, Image

admin.site.register(Pet)
admin.site.register(Image)
admin.site.register(PetType)
admin.site.register(Category, CategoryAdmin)
admin.site.register(CategoryStatus)
