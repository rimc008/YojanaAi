from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from graph import ask_yojana_ai


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    question: str
    chat_history: list = []


@app.post("/api/ai")
def ai_chat(request: ChatRequest):

    try:

        ai_chat_ = ask_yojana_ai(
            request.question,
            request.chat_history
        )

        return {
            "success":True,
            "answer": ai_chat_["answer"],
            "schemes": ai_chat_["schemes"],
            "chat_history": ai_chat_["chat_history"]
        }

    except Exception as e:

        return {
            "success":False,
            "message":str(e)
        }