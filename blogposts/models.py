from django.db import models
from django.template.defaultfilters import slugify
from django.utils import timezone

# Create your models here.

TYPE_CHOICES=(
    ('normal', ('Normal')),
    ('great', ("Great")),
    ('best', ("Best")),
)


class Blogpost(models.Model):
    title = models.CharField(max_length=120)
    slug = models.SlugField(blank=True)
    lead = models.CharField(max_length=1000)
    content = models.TextField()
    published_date = models.DateField(default=timezone.now)
    edited_date = models.DateTimeField(auto_now=True)
    image = models.CharField(blank=True, max_length=1000)
    is_visible = models.BooleanField(default=False)
 #    tags  

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Blogpost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title   

# class Book(models.Model):
#     title = models.CharField(max_length=120)
#     amazon_url = models.CharField(max_length=1200)
#     date_added = models.DateField(default=timezone.now)
#     book_type  = models.CharField(max_length=20, default='normal', choices=TYPE_CHOICES)
#  #    tags  

#     def __str__(self):
#         return self.title   