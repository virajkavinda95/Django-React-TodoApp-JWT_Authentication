from django.shortcuts import render
from api.serializer import UserSerializer,TokenSerializer,RegisterSerializer

from api.models import User, Profile

from rest_framework.decorators import api_view,permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics,status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

# Create your views here.

class TokenPairView(TokenObtainPairView):
    serializer_class = TokenSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterSerializer

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == 'GET':
        context = f"hey {request.user}, you are seeing a GET request"
        return Response({"response":context}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get("text")
        response = f"hey {request.user}, your input is {text}"
        return Response({"response": response}, status=status.HTTP_201_CREATED)
    
    return Response({"response":"error"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def testAPIEndPoint(request):
    if request.method == "GET":
        data = f"hey {request.user}, your API reponded to GET request"
        return Response({"response":data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get("text")
        data = f"hey {request.user}, your API responded to POST request with text: {text}"
        return Response({"response":data}, status=status.HTTP_200_OK)
    return Response({"error": "Error"}, status.HTTP_400_BAD_REQUEST)