from django.conf.urls import include, url
import forms_builder.forms.urls

from django.contrib import admin

from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.views.generic import TemplateView

# admin.autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', 'django_project.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^get-ebook/', TemplateView.as_view(template_name='ebook.html')),
    url(r'^investors/request-info/', TemplateView.as_view(template_name='investor-request.html')),
    url(r'^accounts/', include('registration.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^forms/', include(forms_builder.forms.urls)),
    url(r'^filer/', include('filer.urls')),
    url(r'^make-loan/', include('apps.loans.urls')),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
