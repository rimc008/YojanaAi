from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_qdrant import QdrantVectorStore
from qdrant_client import QdrantClient
from documents.chunk import chunks

load_dotenv()


# 3
# Local Hugging Face embedding model
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
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