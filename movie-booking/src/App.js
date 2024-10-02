// src/App.js
import React, { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import BookingForm from './components/BookingForm';

function App() {
  const movies = [
    { id: 1, title: "Avengers: Endgame", timeSlot: "10:00 AM", img: "/poster1.jpg" },
    { id: 2, title: "Joker", timeSlot: "1:00 PM", img: "/poster2.jpg" },
    { id: 3, title: "Inception", timeSlot: "3:00 PM", img: "/poster3.jpg" },
    { id: 4, title: "Spider-Man: No Way Home", timeSlot: "5:00 PM", img: "/poster4.jpg" }
  ];

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [numTickets, setNumTickets] = useState(1);

  return (
    <div className="app-container">
      <header>
        <h1>Book Your Movie Tickets</h1>
      </header>
      
      <div className="movie-selection-container">
        <div className="movie-list">
          <h2>Select a Movie</h2>
          <div className="movies">
            {movies.map(movie => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onSelect={setSelectedMovie} 
                isActive={selectedMovie.id === movie.id}
              />
            ))}
          </div>
        </div>

        <BookingForm 
          selectedMovie={selectedMovie} 
          numTickets={numTickets} 
          setNumTickets={setNumTickets}
        />
      </div>
    </div>
  );
}

export default App;
