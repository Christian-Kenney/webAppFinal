from django.shortcuts import render
from django.http import HttpResponse

def addition(request):
    return render(request, 'maryville/addition.html')

def sub(request):
    return render(request, 'maryville/sub.html')

def multi(request):
    return render(request, 'maryville/multi.html')

def divis(request):
    return render(request, 'maryville/division.html')

