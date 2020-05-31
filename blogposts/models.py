from django.db import models
from django.template.defaultfilters import slugify
from django.utils import timezone
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Blogpost(models.Model):
    title = models.CharField(max_length=120)
    slug = models.SlugField(blank=True)
    lead = models.CharField(max_length=1000)
    content = models.TextField()
    published_date = models.DateField(default=timezone.now)
    edited_date = models.DateTimeField(auto_now=True)
    header = models.TextField(max_length=1000, default='')
    header = models.TextField(max_length=1000, default='')
    tags = ArrayField(
        models.CharField(max_length=50, blank=True)
    ),
    is_visible = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Blogpost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
