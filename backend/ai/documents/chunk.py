from documents.loads import get_schemes
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
# from pprint import pprint

schemes = get_schemes()

# 2
def scheme_document(schemes):

    document =[]

    for scheme in schemes:

        text = f"""
        Scheme Name: {scheme["name"]}

        Description:
        {scheme["description"]}

        Benefits:
        {scheme["benefits"]}

        Eligibility:
        {scheme["eligibility_text"]}

        Application Process:
        {scheme["application_process"]}
        """

        document.append(

            Document(

                page_content = text,
                metadata={
                    "slug": scheme["slug"],
                    "name": scheme["name"],
                    "state": scheme["state"],
                    "category": scheme["category"]
                    }

        ))

    return document

b = scheme_document(schemes)

# print(len(b))

# print(b[0:2])

split_ = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=100
)

chunks = split_.split_documents(b)

# pprint(type(chunks))
# pprint(chunks[100:110])

# pprint(len(chunks))
# pprint(chunks[1])

