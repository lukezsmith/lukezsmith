from django.db import models
from django.template.defaultfilters import slugify
from django.utils import timezone


# model for all books that will be added to the site

# choices available for type of book
TYPE_CHOICES = (
    ('normal', ('Normal')),
    ('great', ("Great")),
    ('best', ("Best")),
)


class Book(models.Model):
    title = models.CharField(max_length=120)
    amazon_url = models.CharField(max_length=1200)
    date_added = models.DateField(default=timezone.now)
    book_type = models.CharField(
        max_length=20, default='normal', choices=TYPE_CHOICES)

    def __str__(self):
        return self.title
