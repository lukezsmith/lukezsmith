from lukezsmith.settings.common import *
# prod settings
DEBUG = False

ALLOWED_HOSTS = ['lukezsmith.herokuapp.com',
                 'www.lukezsmith.com', 'lukezsmith.com']


# Security settings
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = True
CSRF_COOKIE_SECURE = True
X_FRAME_OPTIONS = 'DENY'
