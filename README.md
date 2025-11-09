# Anime Search App
A mini React + TypeScript project built for the *YoPrint React Coding Project Test*.  
This app allows users to search anime using the *Jikan API*, browse paginated results, and view detailed information about each anime.


## Live Demo
*[View Live App Here](https://your-deployment-link.netlify.app/)*


## Overview
*Anime Search App* is a two-page single-page application:

- Search Page: Search and browse anime titles with server-side pagination.
- Detail Page: View more information about a specific anime.

Powered by the *[Jikan API](https://docs.api.jikan.moe/)* — a free and open anime API.

## Install
```bash
* Clone the repository
git clone https://github.com/kycaine/YoPrint-Anime-Search-App-Jikan.git
cd YoPrint-Anime-Search-App-Jikan

* Install dependencies
npm install

* Run development server
npm run dev
```

## Features
-  Instant search with *debouncing (250ms)*  
-  Server-side pagination  
-  Anime detail view  
-  Redux state management  
-  TypeScript-based components  
-  Skeleton loaders and error states  
-  Responsive UI  


## Tech Stack
| Category | Tools Used |
|--|-|
| *Frontend* | React 18, TypeScript |
| *Routing* | react-router-dom |
| *State Management* | Redux Toolkit |
| *API* | Jikan REST API |
| *Build Tool* | Vite |
| *Package Manager* | npm |


## Projects structure
```bash
📦 anime-search-app
├── 📂 public
├── 📂 src
│   ├── 📂 api
│   │   └── animeService.ts
│   │
│   ├── 📂 app
│   │   └── store.ts
│   │
│   ├── 📂 components
│   │   ├── AnimeCard.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchBar.tsx
│   │   └── SkeletonCard.tsx
│   │
│   ├── 📂 features
│   │   ├── 📂 animeDetail
│   │   │   └── animeDetailSlice.ts
│   │   │
│   │   └── 📂 animeSearch
│   │       └── animeSearchSlice.ts
│   │
│   ├── 📂 pages
│   │   ├── DetailPage.tsx
│   │   └── SearchPage.tsx
│   │
│   ├── 📂 types
│   │   └── anime.ts
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
└── (Others)
```