from django.db import models

class Server(models.Model):


    hostname = models.CharField(max_length=30)
    jono = models.CharField(max_length=20, default=1)
    seuraava = models.CharField(max_length=20, default=1)
    enabled = models.BooleanField(default=True)
    created= models.DateField(auto_now_add=True)
