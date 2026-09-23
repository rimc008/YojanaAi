from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(os.getenv("MONGODB_URI"))
db = client["scheme_dataset"]
collection = db["schemes"]

# 1
def get_schemes():
    return list(collection.find({}))

# a = get_schemes()

# print(a[1])