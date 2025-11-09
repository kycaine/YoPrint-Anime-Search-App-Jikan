# Anime Search App  
*AI Tool Used:* Claude Sonnet & Gemini  

This document lists all the AI prompts used during the development of this project, including their purpose and context.  
The goal was to leverage AI efficiently for faster and cleaner implementation.



### 1. Project Setup
*Prompt:*
> Create a new React + TypeScript project using Vite with Redux Toolkit and react-router-dom.  
> Configure it to run on port 4000 using npm only (no yarn/pnpm).  
> Include basic folder setup and a working dev server command (`npm run dev`).

*Context:*  
Used to initialize the base project and ensure it meets setup requirements.



### 2. Folder Structure & Architecture
*Prompt:*
> Suggest a clean and scalable folder structure for a React + Redux + TypeScript app.  
> Include directories for `components`, `pages`, `types`, and `features`.

*Context:*  
Helps maintain organized and maintainable code structure.



### 3. Jikan API Integration
*Prompt:*
> Write a TypeScript module for interacting with the Jikan API (`https://api.jikan.moe/v4/anime`).  
> Include functions like `fetchAnimeList` and `fetchAnimeDetail` with error handling and pagination support.

*Context:*  
Used to build a reusable service layer for fetching anime data.



### 4. Redux State Management
*Prompt:*
> Create a Redux slice called `animeSlice` using Redux Toolkit.  
> Manage anime list, loading state, errors, and pagination.  
> Include async thunks for calling Jikan API endpoints.

*Context:*  
Implements centralized state management with Redux Toolkit.



### 5. Search Page
*Prompt:*
> Build a `SearchPage` component that lets users search for anime titles.  
> Implement instant search with a 250ms debounce and display results in card format.

*Context:*  
Implements the main search page functionality.



### 6. Debounce & Request Cancellation
*Prompt:*
> Implement a debounce of 250ms for the search input.  
> Use `AbortController` to cancel ongoing API requests if the user continues typing.  
> Demonstrate using React hooks (`useEffect`, `useState`).

*Context:*  
Improves performance and prevents unnecessary API calls.



### 7. Pagination
*Prompt:*
> Add server-side pagination to the search results.  
> Use “Next” and “Previous” buttons to fetch different pages via the Jikan API.

*Context:*  
Implements navigation for large datasets as required by the spec.



### 8. Detail Page
*Prompt:*
> Build a `DetailPage` that displays full anime information based on its ID.  
> Use route `/anime/:id` and show title, image, synopsis, score, and genres.

*Context:*  
Implements the second main page showing detailed anime info.



### 9. Routing Setup
*Prompt:*
> Configure `react-router-dom` so that `/` shows the SearchPage and `/anime/:id` shows the DetailPage.  
> Ensure it’s a single-page app with no reloads.

*Context:*  
Sets up client-side routing for smooth navigation.



### 10. UI Enhancement
*Prompt:*
> Suggest UI improvements for the app:  
> add skeleton loaders, empty-state messages, and responsive design using Tailwind or Material UI.

*Context:*  
Improves visual experience and responsiveness.



### 11. Error & Empty State Handling
*Prompt:*
> Add proper error handling for failed API requests or empty search results.  
> Display friendly messages like “No anime found” or “Failed to load data”.

*Context:*  
Improves user feedback and robustness.



### 12. Testing (Bonus)
*Prompt:*
> Write a simple unit test for Redux slice and integration test for the SearchPage using Jest and React Testing Library.

*Context:*  
Adds bonus technical excellence points with automated testing.



### 13. Deployment
*Prompt:*
> Provide step-by-step instructions to deploy the Vite React app on Netlify.  
> Ensure it runs on port 4000 and requires no environment variables.

*Context:*  
Used to publish the app online for reviewers.



### 14. Documentation
*Prompt:*
> Generate a professional README.md file with setup instructions, features, live demo link, and bonus implementations.

*Context:*  
Final step to ensure the submission is clear and complete.
