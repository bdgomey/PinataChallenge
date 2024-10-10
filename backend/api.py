from fastapi import FastAPI
from models.api_key import api_key
import json
# router = APIRouter(
#     prefix='/add',
#     tags=["add", "upload"],
    
# )

# @router.post('/')
# def post_files():
print(api_key())
app = FastAPI()

