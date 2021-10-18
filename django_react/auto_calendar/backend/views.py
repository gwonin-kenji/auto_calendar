from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from .application import simulator

# Create your views here.
class PythonSimulator(APIView):
    def post(self, request, format=None):
        
        id = request.data["id"]
        pw = request.data["password"]
        # print(f'フロントエンドからの受信ファイル(json) {request.data}') # request.data で jsonファイルのbody全体を参照できる。
        # print(x, y)

        data = simulator.extract_assignmet_info(id, pw)
        # data = {"homework": "social-network"}
        
        return Response(data, status=status.HTTP_200_OK)