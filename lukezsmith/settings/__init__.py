# SECURITY WARNING: keep the secret key used in production secret!
import json
import os
SECRET_KEY = '+2i#a_2ryra6y3_g_6hb9b(w&*xy^axcb2jsh3#b7ppbp*$2ju'
PROD_STATUS = True
# SECRET_KEY = os.environ.get('LUKEZSMITH_DJANGO_PASS', 'Not Set')
# PROD_STATUS = os.environ.get('LUKEZSMITH_DJANGO_PRODSTATUS', "False")
# SECRET_KEY = os.environ.get('LUKEZSMITH_SECRET_KEY', '')


# CONFIG_FILE = '/etc/config.json'


if PROD_STATUS == "True":
    from .production import *
    # SECRET_KEY = config['SECRET_KEY']
else:
    from .development import *




# try:
#     with open(CONFIG_FILE) as config_file:
#         config = json.load(config_file)
#         config['PROD']
#     from .production import *


# except KeyError:
#     from .development import *

# SECRET_KEY = config['SECRET_KEY']
