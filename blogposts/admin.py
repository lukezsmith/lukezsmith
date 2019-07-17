from django.contrib import admin

# Register your models here.
from .models import Blogpost
# from .models import Book

admin.site.register(Blogpost)
# admin.site.register(Book)
