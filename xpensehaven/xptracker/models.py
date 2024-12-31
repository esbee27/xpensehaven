from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone



class Category(models.Model):
    name = models.CharField(max_length=250)
    allocated = models.IntegerField(max_length=150)

class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ("Expense", "Expense"),
        ("Income", "Income"),
    ]

    id = models.AutoField(primary_key=True)
    type= models.CharField(choices=TRANSACTION_TYPES)
    date_created = models.DateTimeField(default=timezone.now)
    amount = models.DecimalField(decimal_places=2, max_digits=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    

class Budget(models.Model):
    name = models.CharField(max_length=150)
    allocated = models.IntegerField()
    amount_left = models.DecimalField(decimal_places=2)
    actions = models.CharField()
    start_date = models.DateTimeField()
    @property
    def status(self):
        if self.start_date > timezone.now().date():
            return "Inactive"
        return "Active"
