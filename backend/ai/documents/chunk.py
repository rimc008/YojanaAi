from loads import get_schemes
from langchain_core.documents import Document

schemes = get_schemes()

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

print(len(b))

print(b[0:2])

