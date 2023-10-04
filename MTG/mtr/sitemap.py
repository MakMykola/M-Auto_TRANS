from django.urls import reverse
from django.contrib.sitemaps import Sitemap

class StaticSitemap(Sitemap):
    changefreq = "always"
    priority = 1

    def items(self):
        # Перелік URL-адрес статичних сторінок, які ви хочете включити в sitemap
        return [
            'home',

        ]

    def location(self, item):
        return reverse(item)