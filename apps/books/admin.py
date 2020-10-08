from django.contrib import admin

# Add books to admin panel
from .models import Book

admin.site.register(Book)
