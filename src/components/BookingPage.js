import React, { useEffect, useState } from 'react';

const BookingPage = ({ trainId, onBookTrain }) => {
  const [trainData, setTrainData] = useState([]); // State to hold train data
  const [loading, setLoading] = useState(true);   // State to indicate loading
  const [error, setError] = useState(null);       // State to hold any errors

  useEffect(() => {
    // Fetch data from the local server
    const fetchTrainData = async () => {
      try {
        const response = await fetch('http://localhost:5001/bookings'); // Fetching data from the API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parsing JSON response
        setTrainData(data); // Storing data in state
      } catch (err) {
        setError(err.message); // Storing any error messages
      } finally {
        setLoading(false); // Indicating that loading is complete
      }
    };

    fetchTrainData(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when component mounts

  // Find the train based on the trainId prop
  const train = trainData.find((t) => t.id === trainId);

  const handleConfirmBooking = () => {
    if (train) {
      onBookTrain(train); // Pass the selected train to the booking handler
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while fetching
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message if fetching fails
  }

  return (
    <div>
      <h1>Finalise Your Booking</h1>
      {train ? (
        <div>
          <p>Train: {train.name}</p>
          <p>Departure: {train.departureStation}</p>
          <p>Destination: {train.destinationStation}</p>
          <p>Date: {train.date}</p>
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      ) : (
        <p>Train not found.</p> // Message if the train is not found
      )}
    </div>
  );
};

export default BookingPage;
