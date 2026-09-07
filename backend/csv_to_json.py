import pandas as pd
from dotenv import load_dotenv
from pymongo import MongoClient
from datasets import load_dataset
import os

load_dotenv()

# Download/load dataset from Hugging Face
ds = load_dataset("smartduketech/indian-government-schemes-2025")

# Convert Hugging Face dataset to pandas DataFrame
df = ds["train"].to_pandas()


mongo = os.getenv("MONGODB_URI")
client = MongoClient(mongo)
db = client["scheme_dataset"] # database name
collection = db["schemes"] # collection mane


data = df.to_dict(orient="records")

b = []
c = []

for a in data:

    if pd.notna(a["category"]) and pd.notna(a["state"]):
        b.extend(a["category"].split(","))
        c.append(a["state"])

print(set(b),len(set(b)))
print(set(c),len(set(c)))


print("..")

