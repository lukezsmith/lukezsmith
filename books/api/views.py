from rest_framework import viewsets
from books.models import Book
from .serializers import BookSerializer


# viewset for displaying books
class BooksViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all().order_by('-id')
