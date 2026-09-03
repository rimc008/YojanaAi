import pandas as pd
from dotenv import load_dotenv
from pymongo import MongoClient
import kagglehub
import os

load_dotenv()

path = kagglehub.dataset_download(# kaggle_database
    "jainamgada45/indian-government-schemes"
)
file_csv = os.listdir(path)[0] 
df = pd.read_csv(os.path.join(path, file_csv))


mongo = os.getenv("MONGODB_URI")
client = MongoClient(mongo)
db = client["database_scheme"] # database name
collection = db["schemes"] # collection mane




data = df.to_dict(orient="records")
collection.insert_many(data)


print("Data inserted successfully!")

