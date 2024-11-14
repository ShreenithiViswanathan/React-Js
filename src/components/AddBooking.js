import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5001/bookings');
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading bookings...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id}>
            <h3>Train: {booking.trainName}</h3>
            <p>
              Departure: {booking.departureStation} - Arrival: {booking.arrivalStation}
            </p>
            <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p>Status: {booking.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;
