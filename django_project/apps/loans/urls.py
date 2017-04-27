from django.conf.urls import url
from django.conf import settings
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(
        r'^$',
        TemplateView.as_view(template_name='loan-form.html'),
        {'stripe_public_key': settings.STRIPE_PUBLIC_KEY}
    ),
    url(r'^create-loan/', views.createLoanView),
]
