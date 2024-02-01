from django.contrib import admin
from api.models import User, Profile, Todo
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ['username','email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user','full_name','verified']

class TodoAdmin(admin.ModelAdmin):
    list_editable = ['completed']
    list_display = ['user','todo','completed','date']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Todo, TodoAdmin)