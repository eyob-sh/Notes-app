from django.db import models

# Create your models here.

class Note(models.Model):
    title = models.CharField(max_length=20)
    content = models.TextField(max_length=100)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.title