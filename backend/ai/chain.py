from mmrretriever import retriever,format_docs,prompt,llm,chat_history,contextual_prompt
from langchain_core.output_parsers import StrOutputParser
from typing import TypedDict


# 11
# RAG chain

rag_chain = ( {"context": lambda a: format_docs(a["documents"]),"question": lambda a: a["question"]} | prompt | llm | StrOutputParser() )

# unique_schemes
def unique_schemes(documents):

    unique_schemes_ = []
    seen_slugs = set()

    for document in documents:

        metadata = document.metadata

        if metadata["slug"] not in seen_slugs:

            unique_schemes_.append({
                "name": metadata["name"],
                "slug": metadata["slug"],
                "state": metadata["state"],
                "category": metadata["category"]
            })

        seen_slugs.add(metadata["slug"])

    return unique_schemes_



