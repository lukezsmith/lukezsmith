# Generated by Django 2.1.4 on 2020-05-31 02:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('amazon_url', models.CharField(max_length=1200)),
                ('date_added', models.DateField(default=django.utils.timezone.now)),
                ('book_type', models.CharField(choices=[('normal', 'Normal'), ('great', 'Great'), ('best', 'Best')], default='normal', max_length=20)),
            ],
        ),
    ]
