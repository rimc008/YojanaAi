from fastapi import FastAPI
from pydantic import BaseModel

from graph import ask_yojana_ai


app = FastAPI()


class ChatRequest(BaseModel):
    question: str
    chat_history: list = []


@app.post("/api/ai")
def ai_chat(request: ChatRequest):

    ai_chat_ = ask_yojana_ai(
        request.question,
        request.chat_history
    )

    return {
        "answer": ai_chat_["answer"],
        "schemes": ai_chat_["schemes"],
        "chat_history": ai_chat_["chat_history"]
    }