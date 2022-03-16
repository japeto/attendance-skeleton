from django.shortcuts import render

from rest_framework import viewsets, views, filters
from api.serializers import UserSerializer, CourseSerializer
from api.models import User, Course


class UserViewSet(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer


class CourseViewSet(viewsets.ModelViewSet):
   queryset = Course.objects.all()
   serializer_class = CourseSerializer
