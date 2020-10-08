from django.contrib import admin

# Add blogposts to admin panel
from .models import Blogpost

admin.site.register(Blogpost)
