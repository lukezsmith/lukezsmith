from rest_framework import serializers

from blogposts.models import Blogpost

class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ('id', 'title', 'slug', 'lead', 'content', 'published_date', 'edited_date', 'image', 'is_visible')
