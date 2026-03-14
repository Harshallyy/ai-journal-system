# ARCHITECTURE.md

## System Overview

The AI-Assisted Journal System is a simple full-stack application that
allows users to:

1.  Write journal entries
2.  Store entries in a database
3.  Analyze emotions using an LLM API
4.  Generate insights based on stored entries

The system consists of three main layers:

-   **Frontend:** React application for user interaction
-   **Backend:** Node.js + Express REST API
-   **Database:** MongoDB (Atlas)

The frontend communicates with the backend through REST APIs. The
backend processes requests, interacts with MongoDB for data storage, and
calls an external LLM API for emotion analysis.

------------------------------------------------------------------------

# Architecture Components

## 1. Frontend Layer

Technology: React

Responsibilities:

-   Capture journal text from users
-   Send requests to backend APIs
-   Display analysis results
-   Display insights

Frontend communicates with backend via HTTP requests.

Example:

POST /api/journal/analyze

------------------------------------------------------------------------

## 2. Backend Layer

Technology: Node.js + Express

Responsibilities:

-   API routing
-   Data validation
-   Database communication
-   LLM API integration
-   Insights computation

Backend APIs:

-   POST /api/journal
-   GET /api/journal/:userId
-   POST /api/journal/analyze
-   GET /api/journal/insights/:userId

------------------------------------------------------------------------

## 3. Database Layer

Technology: MongoDB Atlas

Responsibilities:

-   Store journal entries
-   Store analyzed results
-   Enable fast retrieval of user entries

Journal Schema:

-   userId
-   ambience
-   text
-   emotion
-   keywords
-   timestamps

------------------------------------------------------------------------

# Scaling to 100k Users

To support 100k users, the system can be scaled in the following ways:

1.  **Horizontal Backend Scaling**
    -   Deploy backend using containerized instances.
    -   Use a load balancer (e.g., Nginx or cloud load balancer).
2.  **Database Scaling**
    -   Use MongoDB Atlas cluster with replication.
    -   Enable database indexing for userId.
3.  **API Optimization**
    -   Reduce heavy synchronous operations.
    -   Move long operations to background workers if needed.
4.  **Caching**
    -   Use Redis to cache frequently accessed insights.

------------------------------------------------------------------------

# Reducing LLM Cost

LLM calls can be expensive. The following strategies help reduce cost:

1.  **Cache analysis results**
    -   If the same text is analyzed again, return stored result instead
        of calling the LLM.
2.  **Store results in database**
    -   Save emotion and keywords with each journal entry.
3.  **Limit analysis frequency**
    -   Only analyze when the user explicitly requests analysis.
4.  **Use smaller models**
    -   Use lightweight models when high accuracy is not required.

------------------------------------------------------------------------

# Caching Repeated Analysis

Repeated analysis of the same text can be avoided by:

1.  Generating a hash of the journal text.
2.  Checking if that hash already exists in the database.
3.  If it exists:
    -   Return stored emotion result.
4.  If not:
    -   Call the LLM and store the result.

This reduces both latency and API cost.

------------------------------------------------------------------------

# Protecting Sensitive Journal Data

Journal data can contain sensitive personal information. Security
measures include:

1.  **Environment variables**
    -   Store API keys and database credentials in `.env`.
2.  **HTTPS**
    -   Encrypt communication between client and server.
3.  **Authentication**
    -   Add authentication for user-specific access.
4.  **Database access control**
    -   Restrict MongoDB access to trusted IP addresses.
5.  **Data encryption**
    -   Encrypt sensitive fields before storing them.

------------------------------------------------------------------------

# Future Improvements

Possible improvements include:

-   Real-time emotion trend visualization
-   User authentication and accounts
-   Advanced insights dashboard
-   Deployment using Docker and cloud infrastructure
