# Generated by Django 3.2 on 2023-09-18 07:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20230918_0726'),
    ]

    operations = [
        migrations.AddField(
            model_name='page',
            name='articleTitle',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]