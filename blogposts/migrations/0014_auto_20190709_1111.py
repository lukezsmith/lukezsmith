# Generated by Django 2.1.4 on 2019-07-09 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogposts', '0013_blogpost_is_visible'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='is_visible',
            field=models.BooleanField(default=False),
        ),
    ]
