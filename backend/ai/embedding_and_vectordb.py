from dotenv import load_dotenv
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_qdrant import QdrantVectorStore
from qdrant_client import QdrantClient
from documents.chunk import chunks
import os

load_dotenv()


# 3
# google embedding model
embeddings = GoogleGenerativeAIEmbeddings(
    model="models/gemini-embedding-2",
    google_api_key=os.getenv("GOOGLE_API_KEY")
)


# 4
# qdrant client 
client_ = QdrantClient(
        url="http://localhost:6333"
    )


# 5
# collection name of qdrant
collection_ = "yojanaAi_schemes"


# 6
# stores chunks in qdrant
def store_chunks(collection,client,embeddings):

    if client.collection_exists(collection):

        vectorstore = QdrantVectorStore(

            embedding = embeddings,
            client = client,
            collection_name = collection,

        ) 

        vectorstore.add_documents(chunks)

    else:

        vectorstore = QdrantVectorStore.from_documents(

            documents = chunks,
            embedding = embeddings,
            url="http://localhost:6333",
            collection_name = collection,
            

        )

store_chunks(collection_,client_,embeddings)

print("pushed at qdrant")