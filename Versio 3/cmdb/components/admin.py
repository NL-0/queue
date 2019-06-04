from django.contrib import admin
from .models import Server
# OperatingSystem

class ServerAdmin(admin.ModelAdmin):
    list_display = ('hostname', 'enabled')
    search_fields = ('hostname', 'enabled')
    list_filter = ('hostname', 'enabled')
    save_on_top = True

admin.site.register(Server, ServerAdmin)
