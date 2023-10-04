from django.urls import path

from . import views
from .views import *

from django.contrib.sitemaps.views import sitemap
from .sitemap import StaticSitemap

sitemaps = {
    'StaticSitemap': StaticSitemap,
}

urlpatterns = [
        path('', views.index, name='home'),
        path('sitemap.xml/', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),

]

