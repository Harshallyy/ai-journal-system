# AI-Assisted Journal System

This project is a simple full-stack prototype that allows users to write
journal entries, analyze emotions using an AI model, and view insights
based on their entries.

The goal of this project is to demonstrate API design, LLM integration,
and basic frontend interaction.

------------------------------------------------------------------------

## Tech Stack

Backend - Node.js - Express - MongoDB - Mongoose

Frontend - React

AI Integration - LLM API for emotion analysis

------------------------------------------------------------------------

## Features

### 1. Create Journal Entry

Users can create a journal entry with: - userId - ambience - text

API: POST /api/journal

Example request:

{ "userId": "123", "ambience": "forest", "text": "I felt calm today
after listening to rain." }

------------------------------------------------------------------------

### 2. Get User Entries

Returns all journal entries for a specific user.

API: GET /api/journal/:userId

Example: /api/journal/123

------------------------------------------------------------------------

### 3. Emotion Analysis

Analyzes journal text using an AI model.

API: POST /api/journal/analyze

Example request:

{ "text": "I felt relaxed sitting near the ocean." }

Example response:

{ "emotion": "calm", "keywords": \["ocean", "peace", "relax"\],
"summary": "User experienced a calm and relaxing moment." }

------------------------------------------------------------------------

### 4. Insights API

Provides insights based on user entries.

API: GET /api/journal/insights/:userId

Example response:

{ "totalEntries": 5, "mostUsedAmbience": "forest" }

------------------------------------------------------------------------

## Project Structure

backend ├ config ├ controllers ├ models ├ routes ├ utils └ server.js

frontend └ React application

------------------------------------------------------------------------

## Setup Instructions

### Backend Setup

cd backend npm install

Create .env file:

MONGO_URI=your_mongodb_connection_string OPENROUTER_KEY=your_api_key
PORT=5000

Run backend:

node server.js

------------------------------------------------------------------------

### Frontend Setup

cd frontend npm install npm start

Frontend runs on: http://localhost:3000

------------------------------------------------------------------------

## Notes

-   MongoDB Atlas is used for database storage.
-   AI emotion analysis is performed using an external LLM API.
-   The frontend UI is intentionally minimal as the focus of the
    assignment is backend API design and AI integration.
