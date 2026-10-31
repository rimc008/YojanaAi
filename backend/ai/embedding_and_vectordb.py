from dotenv import load_dotenv
from langchain_qdrant import QdrantVectorStore
from qdrant_client import QdrantClient

from fastembed import TextEmbedding
from langchain_core.embeddings import Embeddings

from documents.chunk import chunks
import os

load_dotenv()


# 3
# embedding model
class FastEmbedEmbeddings(Embeddings):
    def __init__(self, model_name="sentence-transformers/all-MiniLM-L6-v2"):
        self.model = TextEmbedding(model_name)

    def embed_documents(self, texts):
        return [v.tolist() for v in self.model.embed(texts)]

    def embed_query(self, text):
        return next(iter(self.model.embed([text]))).tolist()

embeddings = FastEmbedEmbeddings()


# 4
# qdrant client 
client_ = QdrantClient(
        url = os.environ["QDRANT_URL"],
        api_key = os.environ["QDRANT_API_KEY"]
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
            url = os.environ["QDRANT_URL"],
            api_key = os.environ["QDRANT_API_KEY"],
            collection_name = collection,
            

        )

    return vectorstore



