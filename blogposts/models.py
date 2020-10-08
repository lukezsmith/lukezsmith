from django.db import models
from django.template.defaultfilters import slugify
from django.utils import timezone
from django.contrib.postgres.fields import ArrayField

# model for all blogposts that will be added to the site


class Blogpost(models.Model):
    title = models.CharField(max_length=120)
    slug = models.SlugField(blank=True, max_length=120)
    lead = models.CharField(max_length=1000)
    content = models.TextField()
    published_date = models.DateField(default=timezone.now)
    edited_date = models.DateTimeField(auto_now=True)
    header = models.TextField(max_length=1000, blank=True)
    footer = models.TextField(max_length=1000, blank=True)
    tags = ArrayField(
        models.CharField(max_length=50, blank=True), blank=True)
    is_visible = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Blogpost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
