from django.core import serializers
from django.conf import settings
from django import forms
from django.contrib import admin
from django.db import models
from django.utils import timezone
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFit
from .constants import SIZE, GENDER 

class PetType(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    def __str__(self):
        return self.name
        
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    
    class Meta:
        verbose_name_plural = 'Categories'
    
    def __str__(self):
        return self.name       

class CategoryStatus(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Category Status'
    
    def __str__(self):
        return self.name 

class CategoryForm(forms.ModelForm):
    category_status = forms.ModelMultipleChoiceField(
                       widget = forms.CheckboxSelectMultiple,
                       queryset = CategoryStatus.objects.all()
               )
    class Meta:
        model = CategoryStatus
        fields = '__all__'


    def __init__(self, *args, **kwargs):
        super(CategoryForm, self).__init__(*args, **kwargs)
        
        if self.instance:
            self.fields['category_status'].initial = CategoryStatus.objects.all().filter(category=self.instance.id)

    def save(self, *args, **kwargs):
        instance = super(CategoryForm, self).save(commit=False)
        self.fields['category_status'].initial.update(category=None)
        self.cleaned_data['category_status'].update(category=instance.id)
        return instance

class CategoryAdmin(admin.ModelAdmin):
    form = CategoryForm

class Image(models.Model):
    image = models.ImageField(upload_to='images', blank=True)
    data_thumbnail = ImageSpecField(source='image',
                                    processors=[ResizeToFit(
                                        height=200)],
                                    format='JPEG',
                                    options={'quality': 80})


class Pet(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    images = models.ManyToManyField(Image, blank=True)
    name = models.CharField(max_length=200, null=False)
    description = models.TextField(null=True, blank=True)
    pet_type = models.ForeignKey(PetType, on_delete=models.CASCADE, null=False)
    size = models.CharField(
        max_length=100,
        choices=SIZE,
        blank=True,
        null=True
    )
    gender = models.CharField(
        max_length=100,
        choices=GENDER,
        blank=True,
        null=True
    )
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=False, related_name='category')
    category_status = models.ForeignKey(CategoryStatus, on_delete=models.CASCADE, null=True, blank=True, related_name='category_status')
    state = models.CharField(max_length=1024, null=False)
    city = models.CharField(max_length=1024, null=False)
    contact_name = models.CharField(max_length=100, null=False)
    phone_1 = models.CharField(max_length=12, null=True, blank=True)
    phone_2 = models.CharField(max_length=12, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    published_date = models.DateTimeField(auto_now_add=True, blank=True)

    def status_history(self):
        return PetStatusHistory.objects.all().filter(pet=self).order_by('-created')
 
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        PetStatusHistory.objects.create(category_status=self.category_status, pet=self)


    def __str__(self):
        return self.name

class PetStatusHistory(models.Model):
        category_status = models.ForeignKey(CategoryStatus, on_delete=models.CASCADE, null=True, blank=True)
        pet = models.ForeignKey(Pet, on_delete=models.CASCADE, null=True, blank=True)
        created = models.DateTimeField(auto_now_add=True, blank=True)