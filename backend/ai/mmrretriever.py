from embedding_and_vectordb import store_chunks,collection_,client_,embeddings

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_qdrant import QdrantVectorStore
from langchain_core.prompts import MessagesPlaceholder


from dotenv import load_dotenv
import os

load_dotenv()


vectorstore = QdrantVectorStore(

        embedding = embeddings,
        client = client_,
        collection_name = collection_,

    ) 

# 7
# MMR Retriever

retriever = store_chunks(collection_,client_,embeddings).as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 10,
        "fetch_k": 25
    }
)

# 8
# format_document

def format_docs(documents):

    formatted_docs = []

    for index,document in enumerate(documents,start=1):

        formatted_docs.append(
            f"""
                SOURCE {index}

                Scheme Name:
                {document.metadata["name"]}

                Scheme Slug:
                {document.metadata["slug"]}

                State:
                {document.metadata["state"]}

                Category:
                {document.metadata["category"]}

                Scheme Information:
                {document.page_content}

        """)

    return "/n/n".join(formatted_docs)



# 9
# Prompt

prompt = ChatPromptTemplate.from_messages([

    (
        "system",
        """
        You are YojanaAI, an AI assistant for Indian
        government schemes.

        Your task is to answer the user's question using
        ONLY the retrieved scheme information.

        Rules:

        1. Do not invent information.

        2. Use the exact scheme names provided in the
        retrieved context.

        3. Explain why a scheme may be relevant based
        only on the retrieved information.

        4. Do not claim that the user is eligible unless
        the retrieved information supports that claim.

        5. If the retrieved information is insufficient,
        clearly say that the available information
        is insufficient.

        6. Keep the answer clear and practical.

        Retrieved scheme information:

        {context}
        """
            ),

            (
                "human",
                "{question}"
            )

    ])

# 10
# llm

llm = ChatGoogleGenerativeAI(

         model="gemini-2.5-flash",
         temperature=0,
         google_api_key=os.getenv("GOOGLE_API_KEY")

    )

from langchain_core.prompts import MessagesPlaceholder


# Contextual question prompt

contextual_prompt = ChatPromptTemplate.from_messages([

    (
        "system",

        """
        Given the conversation history and the user's
        latest question, rewrite the latest question
        so that it can be understood independently.

        Do not answer the question.

        If the question is already clear and independent,
        return it unchanged.
        """

    ),

    MessagesPlaceholder("chat_history"),

    (
        "human",
        "{question}"
    )

])

# Conversation history

chat_history = []