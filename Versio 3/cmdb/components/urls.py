from django.conf.urls import url, include
from django.views.generic.list import ListView
from components.api import *
from components import models

urlpatterns = [
    url(r'^server/$', ServerListUI.as_view(),
            name='server_list_ui'),
    url(r'^api/server/$', server_list,
            name='server_list'),
    url(r'^api/server/id/(?P<pk>[0-9]+)$', server_detail,
            name='server_detail'),
    url(r'^api/server/name/(?P<name>.*)$', server_detail_by_name,
            name='server_detail_by_name'),
]
