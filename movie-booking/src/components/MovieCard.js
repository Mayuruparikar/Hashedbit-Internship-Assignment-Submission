// src/components/MovieCard.js
import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, onSelect, isActive }) {
  return (
    <div 
      className={`movie-card ${isActive ? 'active' : ''}`} 
      onClick={() => onSelect(movie)}
    >
      <img src={movie.img} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
