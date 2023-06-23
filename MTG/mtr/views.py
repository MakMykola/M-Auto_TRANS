from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView

from .forms import AddCommForm
from .models import Comment


def index(request):

    com = Comment.objects.all()
    form = AddCommForm(request.POST, request.FILES)
    if form.is_valid():
        form.save()
        return redirect('home')
    else:
        form = AddCommForm()

    return render(request, 'mtr/index.html', {'com': com, 'form': form})



