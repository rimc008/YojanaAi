# YojanaAI

> An AI-powered government scheme discovery platform that helps users find and explore Indian government schemes based on their profile, location, income, and needs.

## Overview

YojanaAI combines a modern **Next.js web application** with a **Python-based AI service** and a **Qdrant vector database**.

The platform provides two complementary discovery flows:

* **Eligibility Search** — filters government schemes using structured user information such as age, gender, state, income, and areas of need.
* **AI Recommendation** — uses semantic retrieval and an AI pipeline to understand a user's situation and surface relevant government schemes.

The application also provides:

* Scheme browsing
* Category-based discovery
* Detailed scheme pages
* Featured schemes
* Search and filtering
* A centralized client-side state management layer

---
## Demo video
### Full website demo video 
https://github.com/user-attachments/assets/697b2581-2640-477d-8bff-bc8913d780cf
### Scheme details page demo video
https://github.com/user-attachments/assets/82f54e28-69b6-4817-be22-498cfeff0b35

## Key Features

### 🔎 Scheme Discovery

Users can:

* Browse government schemes
* Search and filter schemes
* Explore schemes by category
* View featured schemes
* Open detailed scheme pages
* Access official scheme/application links where available

### ✅ Eligibility Matching

Users can provide:

* Age
* Gender
* State
* Annual income
* Areas where they need assistance

The application sends these parameters to the **Next.js API layer** and returns matching schemes.

### 🤖 AI Recommendation

The AI layer is implemented separately from the Next.js application.

The current architecture uses:

* Python
* FastAPI
* LangChain
* LangGraph
* Gemini-based models/embeddings
* Qdrant
* MongoDB

Scheme documents are prepared, chunked, embedded, and stored in Qdrant.

User queries are then converted into embeddings and used for semantic retrieval.

### 💬 Application State

React Context API is used for shared client-side state, including:

* AI/client messages
* Chat state
* Filtered schemes
* Eligibility results
* Conversation history

---

## Architecture

```text
                         ┌──────────────────────┐
                         │           User           │
                         └──────────┬───────────┘
                                      │
                                      ▼
                         ┌──────────────────────┐
                         │         Next.js App      │
                         │          Frontend        │
                         └──────────┬───────────┘
                                      │
                 ┌─────────────────┴──────────────────┐
                 │                                           │
                 ▼                                          ▼
       ┌─────────────────────┐              ┌─────────────────────┐
       │     Next.js API         │              │       Python AI API    │
       │    Route Handlers       │              │          FastAPI       │
       └──────────┬──────────┘              └──────────┬──────────┘
                    │                                        │
                    ▼                                       ▼
       ┌─────────────────────┐              ┌─────────────────────┐
       │      MongoDB            │              │       Qdrant            │
       │   Scheme Database       │              │   Vector Database       │
       └─────────────────────┘              └─────────────────────┘
                                                             │
                                                             ▼
                                                ┌─────────────────────┐
                                                │       Gemini / LLM      │
                                                │     Embeddings + AI     │
                                                └─────────────────────┘
```

---

## Backend Responsibilities

There are two different backend layers.

### 1. Next.js Backend

Located under:

```text
src/app/api/
```

This layer handles application-specific API operations such as:

* Scheme details
* Eligibility search
* Featured schemes
* Filtering
* Categories
* Category search

It communicates with MongoDB.

### 2. Python AI Backend

Located under:

```text
backend/ai/
```

This service is responsible for the AI/retrieval pipeline.

It communicates with:

* Qdrant
* Gemini/model providers
* Scheme documents
* The Next.js application when AI functionality is requested

---

## Project Structure

```text
scheme/
│
├── src/
│   ├── app/
│   │   ├── ai_recommendation/
│   │   ├── api/
│   │   │   ├── details_scheme/
│   │   │   ├── eligibility_search/
│   │   │   ├── featured_schemes/
│   │   │   ├── filters/
│   │   │   ├── scheme_categories/
│   │   │   └── scheme_categories_search/
│   │   ├── details/
│   │   ├── eligibility/
│   │   ├── home/
│   │   ├── scheme_category_pool/
│   │   ├── schemes/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── context/
│   │   └── AppContext.js
│   │
│   ├── lib/
│   │   └── mongodb.js
│   │
│   └── models/
│       └── schemes_.js
│
├── backend/
│   ├── ai/
│   │   ├── documents/
│   │   │   ├── chunk.py
│   │   │   └── loads.py
│   │   ├── chain.py
│   │   ├── embedding_and_vectordb.py
│   │   ├── graph.py
│   │   ├── localtest.py
│   │   ├── mmrretriever.py
│   │   ├── pipeline.txt
│   │   └── server.py
│   │
│   ├── csv_to_json.py
│   └── .env
│
├── public/
│
├── .env
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
└── package.json
```

---

## Technology Stack

### Frontend / Full Stack

* Next.js
* React
* JavaScript
* Tailwind CSS
* React Icons
* React Markdown

### Next.js Backend

* Next.js Route Handlers
* MongoDB
* Mongoose

### AI Backend

* Python
* FastAPI
* LangChain
* LangGraph
* Qdrant
* Gemini models / embeddings

### Infrastructure

* Docker
* Qdrant
* MongoDB
* Git / GitHub

---

## Getting Started

### Prerequisites

Install the following before running the project:

* Node.js
* npm
* Python 3
* Docker Desktop
* MongoDB access
* Required AI provider API credentials

Verify the installations:

```bash
node --version
npm --version
python --version
docker --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/rimc008/YojanaAi.git
cd YojanaAi
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create the required environment files locally.

#### Root `.env`

The root environment file contains variables required by the Next.js application, such as the MongoDB connection and other application/API configuration.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
```

Add any additional variables required by the application.

#### Python AI `.env`

Create:

```text
backend/.env
```

Example:

```env
GOOGLE_API_KEY=your_google_api_key
```

Add the remaining AI/Qdrant configuration required by the current implementation.

> **Important:** Never commit real API keys, database credentials, or secrets to GitHub.

### 4. Start Qdrant

The AI service uses Qdrant as its vector database.

The project can run Qdrant using Docker.

Example:

```bash
docker run -d \
  --name qdrant \
  -p 6333:6333 \
  -p 6334:6334 \
  qdrant/qdrant
```

Check that the container is running:

```bash
docker ps
```

Qdrant's local dashboard/API is available at:

```text
http://localhost:6333
```

The Qdrant data can be persisted using a Docker volume.

### 5. Prepare the Scheme Data

The Python backend contains utilities for preparing scheme data:

```text
backend/
└── csv_to_json.py
```

The document pipeline is located at:

```text
backend/ai/documents/
├── loads.py
└── chunk.py
```

The general data flow is:

```text
Scheme Dataset
      ↓
Load Documents
      ↓
Create LangChain Documents
      ↓
Chunk Documents
      ↓
Generate Embeddings
      ↓
Store Vectors in Qdrant
```

The vector database only needs to be populated when the scheme dataset or embedding configuration requires re-indexing.

### 6. Run the Python AI Backend

Move into the backend directory:

```bash
cd backend
```

Create a virtual environment if one does not already exist:

```bash
python -m venv venv
```

Activate it on Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Then start FastAPI:

```bash
uvicorn ai.server:app --reload
```

Depending on the module location and working directory, the command may instead be:

```bash
uvicorn server:app --reload
```

The important part is that the module path must match the location of `server.py`.

The local AI API will normally be available at:

```text
http://127.0.0.1:8000
```

### 7. Run the Next.js Application

From the project root:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:3000
```

---

## Development Flow

A typical local development setup consists of three services.

### Terminal 1 — Qdrant

```text
Qdrant
Docker container
localhost:6333
```

### Terminal 2 — Python AI API

```text
FastAPI
localhost:8000
```

### Terminal 3 — Next.js

```text
Frontend + Next.js API
localhost:3000
```

The browser communicates with the Next.js application.

The Next.js application communicates with MongoDB for scheme/application data and with the Python AI service when AI functionality is required.

The Python AI service communicates with Qdrant for vector retrieval.

---

## AI Retrieval Pipeline

The AI recommendation flow follows this general architecture:

```text
User Situation / Query
          ↓
      Next.js
          ↓
     Python API
          ↓
      Embedding
          ↓
       Qdrant
          ↓
 Semantic / MMR Retrieval
          ↓
 Retrieved Scheme Context
          ↓
   LangChain / LangGraph
          ↓
       Gemini
          ↓
 Recommended Schemes
          ↓
       Next.js UI
```

### Document Indexing

The indexing pipeline prepares scheme documents and stores their vector representations.

Relevant files:

```text
backend/ai/documents/loads.py
backend/ai/documents/chunk.py
backend/ai/embedding_and_vectordb.py
```

### Retrieval

Retrieval-related functionality includes:

```text
backend/ai/mmrretriever.py
```

The project uses retrieval to identify scheme documents semantically related to the user's situation.

### AI Orchestration

The AI pipeline is organized across:

```text
backend/ai/chain.py
backend/ai/graph.py
```

---

## Next.js API Routes

The application's server-side API routes are organized under:

```text
src/app/api/
```

Current areas include:

| Route                      | Purpose                                    |
| -------------------------- | ------------------------------------------ |
| `details_scheme`           | Retrieve scheme details                    |
| `eligibility_search`       | Find schemes using eligibility information |
| `featured_schemes`         | Retrieve featured schemes                  |
| `filters`                  | Scheme filtering                           |
| `scheme_categories`        | Retrieve scheme categories                 |
| `scheme_categories_search` | Search schemes by category                 |

The exact request/response structure is defined by the implementation in each route.

---

## State Management

The project uses React Context API:

```text
src/context/AppContext.js
```

The provider maintains shared client-side state such as:

* `client_message`
* `aiclient`
* `filteredSchemes`
* `message`
* `messages`
* `chat_history`
* `a`

For example, eligibility results can be stored in the shared `a` state and remain available while the provider remains mounted.

---

## Database Layer

### MongoDB

MongoDB stores the application's structured scheme information.

The database connection is handled by:

```text
src/lib/mongodb.js
```

The scheme model is defined in:

```text
src/models/schemes_.js
```

### Qdrant

Qdrant stores vector representations used by the AI retrieval system.

Local development:

```text
http://localhost:6333
```

In production, the AI service must be configured with the appropriate Qdrant endpoint rather than the local Docker address.

---

## Production Deployment

The project consists of multiple services, so deployment should be treated as a multi-service architecture.

A production deployment can contain:

```text
                    ┌─────────────────┐
                    │     Browser     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Next.js     │
                    │    Application  │
                    └───────┬─────────┘
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
        ┌─────────────────┐   ┌─────────────────┐
        │     MongoDB     │   │    AI Service   │
        └─────────────────┘   │     FastAPI     │
                              └────────┬────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │     Qdrant      │
                              └─────────────────┘
```

For Railway or another container-based platform, these can be deployed as separate services.

### Important

Do not keep production configuration such as:

```text
localhost:3000
localhost:8000
localhost:6333
```

in code that is expected to communicate between deployed services.

Use environment variables for service URLs.

For example:

```env
NEXT_PUBLIC_AI_API_URL=https://your-ai-service.example
QDRANT_URL=https://your-qdrant-service.example
```

The exact variable names should match the implementation.

---

## Security

Never commit:

```text
.env
.env.local
API keys
database passwords
private credentials
```

Make sure `.gitignore` contains appropriate environment and generated files.

For production:

* Use environment variables for secrets.
* Restrict database access where possible.
* Use HTTPS.
* Configure CORS appropriately for the deployed frontend.
* Do not expose private credentials to browser-side JavaScript.
* Use private service networking where supported by the deployment platform.

---

## Useful Commands

### Next.js

```bash
npm install
npm run dev
npm run build
npm start
```

### Python

```powershell
.\venv\Scripts\Activate.ps1
uvicorn ai.server:app --reload
```

### Docker

```bash
docker ps
docker ps -a
docker start qdrant
docker stop qdrant
docker logs qdrant
```

### Git

```bash
git status
git add .
git commit -m "your message"
git push
```

---

## Project Structure at a Glance

```text
YojanaAI
│
├── Next.js Application
│   ├── Pages / UI
│   ├── API Routes
│   ├── React Context
│   ├── MongoDB Layer
│   └── Scheme Models
│
├── Python AI Service
│   ├── Document Loading
│   ├── Chunking
│   ├── Embeddings
│   ├── Qdrant Retrieval
│   ├── LangChain
│   ├── LangGraph
│   └── FastAPI
│
└── Infrastructure
    ├── MongoDB
    ├── Qdrant
    └── Docker
```

---

## Development Philosophy

YojanaAI separates responsibilities between the application layer and the AI layer:

* **Next.js** handles the user experience, routing, application APIs, and structured scheme operations.
* **MongoDB** handles structured application data.
* **Python/FastAPI** handles AI-specific processing.
* **Qdrant** handles vector storage and semantic retrieval.
* **LangChain/LangGraph** organize the AI and retrieval workflow.

This separation makes the AI service independently deployable and keeps the main web application focused on application-level responsibilities.

---

## Status

YojanaAI is an actively developed full-stack AI project combining:

**Next.js + React + MongoDB + FastAPI + LangChain + LangGraph + Gemini + Qdrant + Docker**
