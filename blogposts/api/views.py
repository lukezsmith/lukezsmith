from rest_framework import viewsets
from blogposts.models import Blogpost
# from blogposts.models import Book
from .serializers import BlogpostSerializer
# from .serializers import BookSerializer

class BlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all().order_by('-published_date')
    lookup_field = 'slug'
    lookup_url_kwarg = 'slug'


# class BooksViewSet(viewsets.ModelViewSet):
#     serializer_class = BookSerializer
#     queryset = Book.objects.all().order_by('-date_added')