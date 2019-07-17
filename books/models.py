from django.db import models
from django.template.defaultfilters import slugify
from django.utils import timezone

# Create your models here.

TYPE_CHOICES=(
    ('normal', ('Normal')),
    ('great', ("Great")),
    ('best', ("Best")),
)

class Book(models.Model):
    title = models.CharField(max_length=120)
    amazon_url = models.CharField(max_length=1200)
    date_added = models.DateField(default=timezone.now)
    book_type  = models.CharField(max_length=20, default='normal', choices=TYPE_CHOICES)
 #    tags  

    def __str__(self):
        return self.title   