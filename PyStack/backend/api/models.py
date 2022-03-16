
from django.utils import timezone
from django.db import models

class User(models.Model):
    _id = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    birth_year = models.DateField(default=timezone.now())


class Course(models.Model):
    _id = models.CharField(max_length=50)
    name = models.CharField(max_length=100)