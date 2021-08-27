from django.contrib import admin
from .models import CustomUser
from django.db.models.functions import TruncDay
from django.db.models import Count
import json
from django.core.serializers.json import DjangoJSONEncoder

class UserAdmin(admin.ModelAdmin):
  list_display = ('email', 'date_joined', 'is_staff')
  list_filter = ('date_joined',)
  show_full_result_count = True
  # change_list_template = 'change_list_graph.html'
  

  def changelist_view(self, request, extra_context=None):

        chart_data = (
            CustomUser.objects.annotate(date=TruncDay('date_joined'))
            .values("date")
            .annotate(y=Count("id"))
            .order_by("date_joined")
        )

        as_json = json.dumps(list(chart_data), cls=DjangoJSONEncoder)
        extra_context = extra_context or {"chart_data": as_json}

       # Call the superclass changelist_view to render the page
        return super().changelist_view(request, extra_context=extra_context)




admin.site.register(CustomUser, UserAdmin)
