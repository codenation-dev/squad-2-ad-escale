# Generated by Django 2.2.4 on 2019-08-15 02:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0006_auto_20190814_2330'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='category_name',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='categorystatus',
            old_name='status_name',
            new_name='name',
        ),
    ]