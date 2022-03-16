from django.urls import include, path

from rest_framework import routers

from api.views import UserViewSet, CourseViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'course', CourseViewSet)


urlpatterns = [
   path('', include(router.urls)),
]