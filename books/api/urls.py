from django.urls import path
from books.api.views import BooksViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# register books url in api
router.register(r'books', BooksViewSet, base_name='books')
urlpatterns = router.urls
