from rest_framework import viewsets
from blogposts.models import Blogpost
from .serializers import BlogpostSerializer

class BlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all().order_by('-published_date')
    lookup_field = 'slug'
    lookup_url_kwarg = 'slug'