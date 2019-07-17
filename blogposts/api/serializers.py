from rest_framework import serializers

from blogposts.models import Blogpost
# from blogposts.models import Book

class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ('id', 'title', 'slug', 'lead', 'content', 'published_date', 'edited_date', 'image', 'is_visible')

# class BookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Book
#         fields = ('id', 'title', 'amazon_url', 'date_added', 'is_great','is_best')