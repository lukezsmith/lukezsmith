from django.urls import path
from blogposts.api.views import BlogpostViewSet
# from blogposts.api.views import BooksViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'blogposts', BlogpostViewSet, base_name='blogposts')
# router.register(r'books', BooksViewSet, base_name='books')
urlpatterns = router.urls
