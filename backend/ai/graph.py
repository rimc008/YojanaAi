from mmrretriever import retriever,llm,contextual_prompt
from chain import rag_chain,unique_schemes
from typing import TypedDict
from langchain_core.messages import HumanMessage,AIMessage
from langgraph.graph import StateGraph, START, END


class State(TypedDict):

    question: str
    chat_history: list
    standalone_question: str
    documents: list
    answer: str
    schemes: list

def node1(state:State) -> State:

    question_ = state["question"]
    chat_history_= state["chat_history"][-4:]

    promt = contextual_prompt.invoke({"question": question_,"chat_history": chat_history_})
    standalone_question_ = llm.invoke(promt).content

    return {"standalone_question":standalone_question_}

def node2(state:State) -> State:

    standalone_question_ = state["standalone_question"]
    documents_ = retriever.invoke(standalone_question_)
    

    return {"documents":documents_}

def node3(state:State) -> State:

    documents_ = state["documents"]
    question_ = state["question"]

    answer_ = rag_chain.invoke({"documents":documents_,"question":question_})
    schemes_ = unique_schemes(documents_)

    return {"answer":answer_,"schemes":schemes_}

def node4(state:State) -> State:

    question = state["question"]
    answer = state["answer"]

    return {
        "chat_history": state["chat_history"] + [
            HumanMessage(content=question),
            AIMessage(content=answer)
        ]
    }


graph = StateGraph(State)

graph.add_node("node1",node1)
graph.add_node("node2",node2)
graph.add_node("node3",node3)
graph.add_node("node4",node4)


graph.add_edge(START,"node1")
graph.add_edge("node1","node2")
graph.add_edge("node2","node3")
graph.add_edge("node3","node4")
graph.add_edge("node4",END)


agent = graph.compile()



# 13 
# Main application function


def ask_yojana_ai(question, chat_history):

    ai_answer = agent.invoke({
        "question": question,
        "chat_history": chat_history,
        "standalone_question": "",
        "documents": [],
        "answer": "",
        "schemes": []
    })

    return {
        "answer": ai_answer["answer"],
        "schemes": ai_answer["schemes"],
        "chat_history": ai_answer["chat_history"]
    }

    
