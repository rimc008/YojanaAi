# 🇮🇳 YojanaAI

### AI-Powered Government Scheme Discovery Platform

**YojanaAI** is a full-stack AI-powered platform that helps users discover relevant Indian government schemes based on their **age, gender, location, income, and personal needs**.

It combines a modern **Next.js application**, a **Python/FastAPI AI service**, **MongoDB** for structured scheme data, and **Qdrant** for semantic vector retrieval.

---

## ✨ Features

### 🔎 Government Scheme Discovery

* Browse government schemes
* Search and filter schemes
* Explore schemes by category
* View featured schemes
* View detailed scheme information
* Access official scheme/application links where available

### ✅ Eligibility-Based Scheme Matching

Users can provide:

* Age
* Gender
* State
* Annual income
* Areas where they need assistance

The application processes these parameters through the Next.js API layer and returns schemes matching the provided eligibility information.

### 🤖 AI-Powered Recommendations

YojanaAI includes a dedicated Python AI service that understands a user's situation and retrieves semantically relevant schemes.

The AI pipeline uses:

* **Python**
* **FastAPI**
* **LangChain**
* **LangGraph**
* **Gemini**
* **Qdrant**
* **MongoDB**

Scheme information is transformed into documents, chunked, embedded, and stored in Qdrant. User queries are then converted into embeddings and used for semantic retrieval.

### 💬 Client-Side State Management

The application uses **React Context API** for shared client-side state, including:

* AI/client messages
* Chat state
* Filtered schemes
* Eligibility results
* Conversation history
* AI recommendation state

---

# 🏗️ Architecture

```text
                         ┌──────────────────────┐
                         │        User          │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      Next.js App     │
                         │   Frontend + APIs    │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┴────────────────┐
                    │                                │
                    ▼                                ▼
          ┌─────────────────────┐          ┌─────────────────────┐
          │    Next.js APIs     │          │    Python AI API    │
          │   Route Handlers    │          │       FastAPI       │
          └──────────┬──────────┘          └──────────┬──────────┘
                     │                                │
                     ▼                                ▼
          ┌─────────────────────┐          ┌─────────────────────┐
          │      MongoDB        │          │       Qdrant        │
          │ Structured Scheme   │          │   Vector Database   │
          │       Data          │          └──────────┬──────────┘
          └─────────────────────┘                     │
                                                      ▼
                                           ┌─────────────────────┐
                                           │   Gemini / AI Model  │
                                           │ Embeddings + LLM     │
                                           └─────────────────────┘
```

---

# 🧩 System Components

YojanaAI is divided into three major application layers.

## 1. Next.js Application

The Next.js application is responsible for:

* User interface
* Routing
* Scheme browsing
* Eligibility forms
* Scheme filtering
* Scheme details
* Next.js API routes
* Client-side state management

Location:

```text
src/
```

---

## 2. Python AI Service

The Python backend handles AI-specific functionality.

It is responsible for:

* Document loading
* Document chunking
* Embedding generation
* Vector storage
* Semantic retrieval
* MMR retrieval
* AI orchestration
* FastAPI endpoints

Location:

```text
backend/ai/
```

---

## 3. Data & Vector Layer

### MongoDB

MongoDB stores structured scheme information used by the main application.

### Qdrant

Qdrant stores vector embeddings of scheme documents and is used by the AI retrieval pipeline.

---

# 🧠 AI Recommendation Pipeline

The AI recommendation flow follows this architecture:

```text
User Situation / Query
          │
          ▼
     Next.js App
          │
          ▼
     Python API
       FastAPI
          │
          ▼
      Embedding
          │
          ▼
       Qdrant
          │
          ▼
 Semantic / MMR Retrieval
          │
          ▼
 Retrieved Scheme Context
          │
          ▼
 LangChain / LangGraph
          │
          ▼
       Gemini
          │
          ▼
 Recommended Schemes
          │
          ▼
      Next.js UI
```

---

# 📚 Document Indexing Pipeline

Before AI recommendations can be generated, scheme data is prepared for vector retrieval.

```text
Scheme Dataset
      │
      ▼
Load Scheme Data
      │
      ▼
Create LangChain Documents
      │
      ▼
Chunk Documents
      │
      ▼
Generate Embeddings
      │
      ▼
Store Vectors
      │
      ▼
Qdrant Collection
```

Relevant files:

```text
backend/ai/documents/loads.py
backend/ai/documents/chunk.py
backend/ai/embedding_and_vectordb.py
```

The vector database generally needs to be re-indexed when the underlying scheme dataset or embedding configuration changes.

---

# 📁 Project Structure

```text
YojanaAI/
│
├── src/
│   ├── app/
│   │   ├── ai_recommendation/
│   │   │
│   │   ├── api/
│   │   │   ├── details_scheme/
│   │   │   ├── eligibility_search/
│   │   │   ├── featured_schemes/
│   │   │   ├── filters/
│   │   │   ├── scheme_categories/
│   │   │   └── scheme_categories_search/
│   │   │
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
│   │   │
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

# 🛠️ Technology Stack

## Frontend & Full Stack

* **Next.js**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **React Icons**
* **React Markdown**

## Application Backend

* **Next.js Route Handlers**
* **MongoDB**
* **Mongoose**

## AI Backend

* **Python**
* **FastAPI**
* **LangChain**
* **LangGraph**
* **Gemini**
* **Qdrant**

## Infrastructure

* **Docker**
* **Qdrant**
* **MongoDB**
* **Git**
* **GitHub**

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

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

---

## 1. Clone the Repository

```bash
git clone https://github.com/rimc008/YojanaAi.git
cd YojanaAi
```

---

## 2. Install Frontend Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create the required environment files locally.

### Root `.env`

The root environment file contains variables required by the Next.js application.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
```

Add any additional variables required by the application.

### Python AI `.env`

Create:

```text
backend/.env
```

Example:

```env
GOOGLE_API_KEY=your_google_api_key
```

Add any additional AI/Qdrant configuration required by the current implementation.

> **Never commit API keys, database credentials, or other secrets to GitHub.**

---

# 🐳 4. Start Qdrant

The AI service uses Qdrant as its vector database.

Qdrant can be run locally using Docker:

```bash
docker run -d \
  --name qdrant \
  -p 6333:6333 \
  -p 6334:6334 \
  qdrant/qdrant
```

Check the container:

```bash
docker ps
```

Qdrant will be available locally at:

```text
http://localhost:6333
```

For persistent storage, use a Docker volume.

Example:

```bash
docker volume create qdrant_storage
```

---

# 🗂️ 5. Prepare Scheme Data

The project contains utilities for preparing scheme data:

```text
backend/csv_to_json.py
```

The document preparation pipeline is located at:

```text
backend/ai/documents/
├── loads.py
└── chunk.py
```

The general process is:

```text
Dataset
   ↓
Load Documents
   ↓
Create LangChain Documents
   ↓
Chunk Documents
   ↓
Generate Embeddings
   ↓
Store in Qdrant
```

---

# 🐍 6. Run the Python AI Backend

Move into the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

### Windows PowerShell

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI:

```bash
uvicorn ai.server:app --reload
```

Depending on the working directory and module structure, the command may instead be:

```bash
uvicorn server:app --reload
```

The module path must match the location of `server.py`.

The local AI service will normally run at:

```text
http://127.0.0.1:8000
```

---

# 🌐 7. Run the Next.js Application

Return to the project root:

```bash
cd ..
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:3000
```

---

# 🔄 Local Development Architecture

A typical local setup contains three running services:

```text
┌───────────────────────────────────────────────┐
│                  Terminal 1                   │
│                                               │
│              Docker / Qdrant                  │
│              localhost:6333                   │
└───────────────────────────────────────────────┘


┌───────────────────────────────────────────────┐
│                  Terminal 2                   │
│                                               │
│             Python / FastAPI                  │
│              localhost:8000                   │
└───────────────────────────────────────────────┘


┌───────────────────────────────────────────────┐
│                  Terminal 3                   │
│                                               │
│              Next.js                          │
│              localhost:3000                   │
└───────────────────────────────────────────────┘
```

The browser communicates with the Next.js application.

The Next.js application communicates with:

* MongoDB for structured scheme data
* Python/FastAPI for AI functionality

The Python AI service communicates with:

* Qdrant for vector retrieval
* Gemini/model providers for embeddings and AI processing

---

# 🔌 Next.js API Routes

Application-specific server-side APIs are located under:

```text
src/app/api/
```

### Available API Areas

| Route                      | Responsibility                             |
| -------------------------- | ------------------------------------------ |
| `details_scheme`           | Retrieve scheme details                    |
| `eligibility_search`       | Find schemes using eligibility information |
| `featured_schemes`         | Retrieve featured schemes                  |
| `filters`                  | Scheme filtering                           |
| `scheme_categories`        | Retrieve scheme categories                 |
| `scheme_categories_search` | Search schemes by category                 |

The exact request and response structures are defined by the implementation of each route.

---

# 🗃️ Database Layer

## MongoDB

MongoDB stores structured scheme information used by the main application.

Connection:

```text
src/lib/mongodb.js
```

Scheme model:

```text
src/models/schemes_.js
```

---

## Qdrant

Qdrant stores vector representations of scheme documents used by the AI retrieval system.

### Local Development

```text
http://localhost:6333
```

### Production

The AI service must use the appropriate production Qdrant endpoint instead of the local Docker address.

For example:

```env
QDRANT_URL=your_qdrant_endpoint
```

The exact environment variable name should match the implementation.

---

# 🧠 AI Components

### Document Loading

```text
backend/ai/documents/loads.py
```

Loads scheme information and prepares it for the document pipeline.

### Document Chunking

```text
backend/ai/documents/chunk.py
```

Splits scheme documents into chunks suitable for embedding and retrieval.

### Embeddings & Vector Database

```text
backend/ai/embedding_and_vectordb.py
```

Responsible for generating embeddings and storing them in Qdrant.

### Retrieval

```text
backend/ai/mmrretriever.py
```

Handles retrieval of relevant scheme information using vector search and MMR-based retrieval.

### AI Chain

```text
backend/ai/chain.py
```

Contains the AI processing chain.

### LangGraph

```text
backend/ai/graph.py
```

Contains the graph-based AI orchestration.

### FastAPI Server

```text
backend/ai/server.py
```

Exposes the Python AI functionality through HTTP APIs.

---

# 🧩 State Management

The application uses React Context API.

Location:

```text
src/context/AppContext.js
```

The context currently maintains shared state including:

```text
client_message
aiclient
filteredSchemes
message
messages
chat_history
a
```

For example, eligibility results can be stored in the shared `a` state and remain available while the context provider remains mounted.

---

# ☁️ Production Deployment

YojanaAI consists of multiple services and should therefore be deployed as a multi-service architecture.

A production deployment can be structured as:

```text
                         ┌─────────────────┐
                         │     Browser     │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │     Next.js     │
                         │   Application   │
                         └───────┬─────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
           ┌─────────────────┐       ┌─────────────────┐
           │     MongoDB     │       │    AI Service   │
           │                 │       │     FastAPI     │
           └─────────────────┘       └────────┬────────┘
                                              │
                                              ▼
                                     ┌─────────────────┐
                                     │     Qdrant      │
                                     │ Vector Database │
                                     └─────────────────┘
```

For platforms such as **Railway**, these components can be deployed as separate services.

---

# ⚙️ Production Configuration

Local development may use:

```text
localhost:3000
localhost:8000
localhost:6333
```

These addresses should **not** be used for communication between production services.

Instead, configure service URLs through environment variables.

For example:

```env
NEXT_PUBLIC_AI_API_URL=https://your-ai-service.example
QDRANT_URL=https://your-qdrant-service.example
```

The exact variable names should match the application's implementation.

When supported by the hosting platform, private service networking can be used for internal service-to-service communication.

---

# 🔐 Security

Never commit sensitive information to GitHub.

Do not commit:

```text
.env
.env.local
API keys
Database passwords
Private credentials
```

Use environment variables for production secrets.

Recommended production practices:

* Use HTTPS
* Keep secrets in deployment environment variables
* Restrict database access where possible
* Configure CORS correctly
* Avoid exposing private credentials to client-side JavaScript
* Use private service networking for internal services when available
* Keep development and production credentials separate

---

# 🧪 Useful Commands

## Next.js

```bash
npm install
npm run dev
npm run build
npm start
```

## Python

```powershell
.\venv\Scripts\Activate.ps1
```

```bash
uvicorn ai.server:app --reload
```

## Docker

```bash
docker ps
docker ps -a
docker start qdrant
docker stop qdrant
docker logs qdrant
```

## Git

```bash
git status
git add .
git commit -m "your message"
git push
```

---

# 📌 Project at a Glance

```text
YojanaAI
│
├── 🌐 Next.js Application
│   ├── User Interface
│   ├── Routing
│   ├── API Routes
│   ├── React Context
│   ├── MongoDB Integration
│   └── Scheme Management
│
├── 🤖 Python AI Service
│   ├── Document Loading
│   ├── Chunking
│   ├── Embeddings
│   ├── Qdrant Retrieval
│   ├── MMR Retrieval
│   ├── LangChain
│   ├── LangGraph
│   └── FastAPI
│
└── 🏗️ Infrastructure
    ├── MongoDB
    ├── Qdrant
    ├── Docker
    └── GitHub
```

---

# 🎯 Design Philosophy

YojanaAI separates application responsibilities from AI responsibilities.

### Next.js

Handles:

* User experience
* Routing
* Scheme discovery
* Eligibility forms
* Application APIs
* Structured scheme operations

### MongoDB

Handles:

* Structured scheme information
* Application-level data

### Python / FastAPI

Handles:

* AI processing
* Embeddings
* Retrieval
* AI orchestration

### Qdrant

Handles:

* Vector storage
* Semantic search
* Retrieval

### LangChain / LangGraph

Handle:

* AI pipeline organization
* Retrieval workflow
* AI orchestration

This separation allows the AI service to remain independently deployable while keeping the main web application focused on application-level functionality.

---

# 🚧 Project Status

**YojanaAI is an actively developed full-stack AI project.**

Current technology stack:

```text
Next.js
+
React
+
MongoDB
+
FastAPI
+
LangChain
+
LangGraph
+
Gemini
+
Qdrant
+
Docker
```

The project brings together traditional structured eligibility filtering with semantic AI-powered scheme discovery to provide multiple ways for users to find relevant government schemes.
