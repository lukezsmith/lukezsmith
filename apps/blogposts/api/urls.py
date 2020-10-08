from django.urls import path
from lukezsmith.apps.blogposts.api.views import BlogpostViewSet, ProgrammingBlogpostViewSet, BooksBlogpostViewSet, InternetBlogpostViewSet, ThoughtsBlogpostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# register all posts url in api
router.register(r'all', BlogpostViewSet, base_name='all')
# register programming posts url in api
router.register(r'programming', ProgrammingBlogpostViewSet,
                base_name='programming')
# register books posts url in api
router.register(r'books', BooksBlogpostViewSet,
                base_name='books')
# register internet posts url in api
router.register(r'internet', InternetBlogpostViewSet,
                base_name='internet')
# register thoughts posts url in api
router.register(r'thoughts', ThoughtsBlogpostViewSet,
                base_name='thoughts')
urlpatterns = router.urls
