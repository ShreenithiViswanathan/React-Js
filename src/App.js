import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserProfilePage from './components/UserProfilePage';
import BookingPage from './components/BookingPage';
import MyBookingsPage from './components/MyBookingsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // Default to login page
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [selectedTrainId, setSelectedTrainId] = useState(null);
  const [bookings, setBookings] = useState([]); // State to store user bookings

  const navigateTo = (page) => {
    if (page === 'home' && !isLoggedIn) {
      setCurrentPage('login'); // Redirect to login if not logged in
    } else {
      setCurrentPage(page);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Mark user as logged in
    setCurrentPage('home'); // Navigate to home page after successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setBookings([]); // Clear the bookings data on logout
    setCurrentPage('login'); // Redirect to login page
  };

  const handleTrainSelection = (trainId) => {
    setSelectedTrainId(trainId);
    setCurrentPage('booking');
  };

  const handleBooking = (train) => {
    setBookings([...bookings, train]); // Add new booking to bookings array
    setCurrentPage('my-bookings'); // Navigate to My Bookings page
  };

  return (
    <div className="App">
      <Header onNavigate={navigateTo} />
      {currentPage === 'home' && isLoggedIn && (
        <HomePage onNavigate={navigateTo} onSelectTrain={handleTrainSelection} />
      )}
      {currentPage === 'login' && <LoginPage onNavigate={navigateTo} onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'register' && <RegisterPage onNavigate={navigateTo} />}
      {currentPage === 'user-profile' && <UserProfilePage onNavigate={navigateTo} />}
      {currentPage === 'booking' && selectedTrainId && (
        <BookingPage trainId={selectedTrainId} onBookTrain={handleBooking} onNavigate={navigateTo} />
      )}

      {/* My Bookings Page */}
      {currentPage === 'my-bookings' && (
        <MyBookingsPage bookings={bookings} onNavigate={navigateTo} />
      )}

      <Footer />
    </div>
  );
}

export default App;
