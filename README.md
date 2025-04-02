# 🎬 Movie Watchlist

A modern movie lookup app built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/).  
Styled with [Tailwind CSS](https://tailwindcss.com/) and enriched with icons from [Lucide React](https://lucide.dev/).  
Data is fetched from the [OMDb API](https://www.omdbapi.com/).

<br />

## 🚀 Tech Stack

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white)
![OMDb API](https://img.shields.io/badge/OMDb%20API-FF4500?style=for-the-badge)

<br />

## 🔍 Features

- 🎥 Search for any movie
- 📖 View detailed info including plot, year, rating, genre, director, etc.
- ⭐ IMDb ratings with dynamic badge styling
- 🖼️ Icon-based metadata using Lucide React
- 🌙 Clean, responsive UI with Tailwind CSS

<br />

## 🛠️ Getting Started

```bash
git clone https://github.com/yourusername/movie-watchlist.git
cd movie-watchlist
npm install
npm run dev
```
You'll need an OMDb API key. Create a .env file in the root and add:
```env
VITE_OMDB_API_KEY=your_api_key_here
```
<br />

## 📁 Project Structure
```bash
src/
├── assets/                    # Static assets
├── components/
│   ├── fields/                # Reusable form fields
│   └── movie/                 # Movie-related UI components
├── interfaces/                # Shared TypeScript types
├── pages/                     # Route-based pages
├── App.tsx                    # Main layout
├── main.tsx                   # App entry point

```
<br />


## 📸 Demo
(Add a screenshot or GIF here later if you'd like)

<br />

## 🚧 Currently Working On

- Adding and removing the movie to you watchlist
- Styling
- Refactoring

  <br />

## 🧠 Future Ideas

- Pagination or infinite scroll
- Dark mode toggle 🌙
