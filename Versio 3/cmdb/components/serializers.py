from rest_framework import serializers

from components.models import *

class ServerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Server
        fields = ('id', 'hostname', 'jono', 'seuraava', 'enabled', 'created')
