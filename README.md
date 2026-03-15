# AI-Assisted Journal System

A simple full-stack application where users can write journal entries
and analyze their emotions using an AI model.

This project was built as part of a technical assignment to demonstrate:

-   Backend API design
-   LLM integration
-   Database usage
-   Basic frontend interaction
-   System architecture thinking

------------------------------------------------------------------------

# Live Demo

Frontend: https://profound-meerkat-f3d24f.netlify.app/

Backend API: https://ai-journal-system-ofg5.onrender.com

GitHub Repository: https://github.com/Harshallyy/ai-journal-system

------------------------------------------------------------------------

# Tech Stack

Frontend - React

Backend - Node.js - Express

Database - MongoDB Atlas

AI Integration - LLM API for emotion analysis

Deployment - Backend → Render - Frontend → Netlify

------------------------------------------------------------------------

# Features

### Create Journal Entry

Users can store a journal entry.

POST /api/journal

Example request:

{ "userId": "123", "ambience": "forest", "text": "I felt calm today
after listening to rain." }

------------------------------------------------------------------------

### Get User Entries

Returns all journal entries for a user.

GET /api/journal/:userId

Example:

/api/journal/123

------------------------------------------------------------------------

### Emotion Analysis

Analyzes journal text using an AI model.

POST /api/journal/analyze

Example request:

{ "text": "I felt relaxed sitting near the ocean." }

Example response:

{ "emotion": "calm", "keywords": \["ocean", "peace", "relax"\],
"summary": "User experienced a calm and relaxing moment." }

------------------------------------------------------------------------

### Insights API

Provides insights based on user entries.

GET /api/journal/insights/:userId

Example response:

{ "totalEntries": 5, "mostUsedAmbience": "forest" }

------------------------------------------------------------------------

# Project Structure

ai-journal-system

backend config controllers models routes utils server.js

frontend React application

README.md ARCHITECTURE.md

------------------------------------------------------------------------

# Setup Instructions

## Backend

cd backend npm install

Create .env file

MONGO_URI=your_mongodb_connection_string OPENROUTER_KEY=your_api_key
PORT=5000

Run backend

node server.js

------------------------------------------------------------------------

## Frontend

cd frontend npm install npm start

Frontend runs on:

http://localhost:3000

------------------------------------------------------------------------

# Notes

-   MongoDB Atlas is used for database storage
-   AI emotion analysis is performed using an external LLM API
-   Frontend UI is intentionally minimal because the focus of the
    assignment is backend architecture and AI integration
