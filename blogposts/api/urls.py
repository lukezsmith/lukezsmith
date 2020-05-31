from django.urls import path
from blogposts.api.views import BlogpostViewSet, ProgrammingBlogpostViewSet, BooksBlogpostViewSet, InternetBlogpostViewSet, ThoughtsBlogpostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'all', BlogpostViewSet, base_name='all')
router.register(r'programming', ProgrammingBlogpostViewSet,
                base_name='programming')
router.register(r'books', BooksBlogpostViewSet,
                base_name='books')
router.register(r'internet', InternetBlogpostViewSet,
                base_name='internet')
router.register(r'thoughts', ThoughtsBlogpostViewSet,
                base_name='thoughts')
urlpatterns = router.urls
