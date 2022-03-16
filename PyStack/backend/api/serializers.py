from rest_framework import serializers

from api.models import User, Course

class UserSerializer(serializers.ModelSerializer):
   class Meta:
       model = User
       fields = ('name', 'birth_year')


class CourseSerializer(serializers.ModelSerializer):
   class Meta:
       model = Course
       fields = ('name')