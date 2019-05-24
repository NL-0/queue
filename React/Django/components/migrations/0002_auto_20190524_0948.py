# Generated by Django 2.2.1 on 2019-05-24 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('components', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='server',
            name='ipv4',
        ),
        migrations.RemoveField(
            model_name='server',
            name='ipv6',
        ),
        migrations.RemoveField(
            model_name='server',
            name='location',
        ),
        migrations.RemoveField(
            model_name='server',
            name='os',
        ),
        migrations.RemoveField(
            model_name='server',
            name='types',
        ),
        migrations.AddField(
            model_name='server',
            name='jono',
            field=models.CharField(default=1, max_length=20),
        ),
        migrations.AddField(
            model_name='server',
            name='seuraava',
            field=models.CharField(default=1, max_length=20),
        ),
    ]
