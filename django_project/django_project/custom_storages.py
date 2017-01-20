from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage
from django.contrib.staticfiles.storage import ManifestFilesMixin


class StaticStorage(ManifestFilesMixin, S3Boto3Storage):
    pass


class MediaStorage(S3Boto3Storage):
    location = settings.MEDIAFILES_LOCATION
