from rest_framework import viewsets
from blogposts.models import Blogpost
from .serializers import BlogpostSerializer

# viewset for displaying all posts


class BlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all().order_by('-published_date')
    lookup_field = 'slug'
    lookup_url_kwarg = 'slug'

# viewset for displaying programming posts


class ProgrammingBlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.filter(
        tags__contains=['programming']).order_by('-published_date')


# viewset for displaying books posts
class BooksBlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.filter(
        tags__contains=['books']).order_by('-published_date')

# viewset for displaying programming posts


class InternetBlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.filter(
        tags__contains=['internet']).order_by('-published_date')

# viewset for displaying thoughts posts


class ThoughtsBlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.filter(
        tags__contains=['thoughts']).order_by('-published_date')
