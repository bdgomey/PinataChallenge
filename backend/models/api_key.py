import os
from dotenv import load_dotenv
load_dotenv()

def api_key():
    return {
        "APIKEY": os.getenv('APIKEY'),
        "APISecret": os.getenv('APISecret'),
        "JWT": os.getenv('JWT')
        }