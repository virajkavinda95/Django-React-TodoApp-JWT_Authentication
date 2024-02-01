from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from api import views

urlpatterns = [
    path("login/", views.TokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("testapi/", views.testAPIEndPoint, name="test"),
    path("dashboard",views.dashboard),
    # path("todo/", views.TodoListView.as_view()),
    path("todo/<user_id>/", views.TodoListView.as_view()),
    path("todo-details/<user_id>/<todo_id>/", views.TodoListDetailView.as_view()),
    path("todo-update/<user_id>/<todo_id>/", views.TodoMarkAsCompleted.as_view())
]