from django.urls import path
from blogposts.api.views import BlogpostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'blogposts', BlogpostViewSet, base_name='blogposts')
urlpatterns = router.urls
