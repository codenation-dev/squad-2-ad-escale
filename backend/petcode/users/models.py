from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractUser
)
from .managers import UserManager


class User(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=225,
        unique=True
    )
    username = models.CharField(max_length=40, unique=False, default='')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] #email and password are required by default
    objects = UserManager()
    
    def __str__(self):
        return self.email
