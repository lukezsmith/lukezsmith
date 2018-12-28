from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.

class Blogpost(models.Model):
    title = models.CharField(max_length=120)
    slug = models.SlugField(blank=True)
    lead = models.CharField(max_length=1000)
    content = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now=True)
    image = models.CharField(blank=True, max_length=1000)
 #    tags  

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Blogpost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title   
