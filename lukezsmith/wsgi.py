"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# set production settings
# os.environ.setdefault('DJANGO_SETTINGS_MODULE',
#                       'lukezsmith.settings.production')
                      

os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'settings')
application = get_wsgi_application()
