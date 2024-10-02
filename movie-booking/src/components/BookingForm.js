// src/components/BookingForm.js
import React from 'react';
import './BookingForm.css';

function BookingForm({ selectedMovie, numTickets, setNumTickets }) {
  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      <div className="booking-card">
        <img src={selectedMovie.img} alt={selectedMovie.title} />
        <h3>{selectedMovie.title}</h3>
        <p>Time Slot: {selectedMovie.timeSlot}</p>
        <label>
          Number of Tickets:
          <input 
            type="number" 
            value={numTickets} 
            min="1" 
            onChange={(e) => setNumTickets(e.target.value)} 
          />
        </label>
        <button className="book-button">Book Tickets</button>
      </div>
    </div>
  );
}

export default BookingForm;
