from rest_framework import serializers

from blogposts.models import Blogpost


# serializer to convert queryset data to native python datatypes
class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ('id', 'title', 'slug', 'lead', 'content',
                  'published_date', 'edited_date', 'header', 'footer', 'tags', 'is_visible')
