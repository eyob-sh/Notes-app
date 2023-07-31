from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(["POST"])
def Add(request):
    data = request.data
    title = data['title']
    content = data['content']
    note = Note.objects.create(title = title, content = content)
    serializer = NoteSerializer(note, many = False)
    return Response(serializer.data)

@api_view(["GET"])
def get(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many = True)
    return Response(serializer.data)

@api_view(["DELETE"])
def delete(request, pk):
    note = Note.objects.get(id = pk)
    note.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["PUT"])
def update(request,pk):
    note = Note.objects.get(id = pk)
    serializer = NoteSerializer(note, data=request.data, partial = True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else: return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)