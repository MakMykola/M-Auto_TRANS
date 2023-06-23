from django.db import models


class Comment(models.Model):
    author = models.CharField(max_length=50, verbose_name='Автор:')
    content = models.TextField(verbose_name='Відгук:')

    def __str__(self):
        return self.author

    class Meta:
        verbose_name = 'Відгук'
        verbose_name_plural = 'Відгуки'
