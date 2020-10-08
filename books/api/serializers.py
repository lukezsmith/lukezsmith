from rest_framework import serializers

from books.models import Book

# serializer to convert queryset data to native python datatypes


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'amazon_url', 'date_added', 'book_type')
