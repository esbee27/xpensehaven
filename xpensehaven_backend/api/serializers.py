from .models import Transaction, Budget, Category
from rest_framework import serializers

def cleanDecimal(value):
    return float(value.replace(",", ""))

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'colour')

class TransSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    class Meta:
        model = Transaction
        fields = ('transaction_id', 'amount', 'type', 'category', 'budget', 'user_username', 'category_name', 'budget_name')
        extra_kwargs = {'user_username': {'read_only': True}, 'category_name': {'read_only': True}, 'budget_name': {'read_only': True}}
    
    def to_internal_value(self, data):
            # Clean amount_allocated and amount_left here
            if 'amount' in data:
                data['amount'] = cleanDecimal(data['amount'])
            return super().to_internal_value(data)


class BudSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ('name', 'amount_allocated', 'amount_left', 'user_username')
        extra_kwargs = {'user_username': {'read_only': True}}
    
    def to_internal_value(self, data):
            # Clean amount_allocated and amount_left here
            if 'amount_allocated' in data:
                data['amount_allocated'] = cleanDecimal(data['amount_allocated'])
            if 'amount_left' in data:
                data['amount_left'] = cleanDecimal(data['amount_left'])
            return super().to_internal_value(data)

