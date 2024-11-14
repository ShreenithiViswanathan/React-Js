import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import trainImage from './train.jpg';  // Import the image

const HomePage = () => {
    const [departureStation, setDepartureStation] = useState('');
    const [destinationStation, setDestinationStation] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [passengerCount, setPassengerCount] = useState(1);
    const [availableTrains, setAvailableTrains] = useState([]);
    const [loading, setLoading] = useState(false);
    const [citySuggestions, setCitySuggestions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cities');
                setCitySuggestions(response.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, []);

    const handleSearchTrains = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/trains');
            const allTrains = response.data;

            const filteredTrains = allTrains.filter(train =>
                train.departureStation.toLowerCase() === departureStation.toLowerCase() &&
                train.destinationStation.toLowerCase() === destinationStation.toLowerCase() 
            );

            setAvailableTrains(filteredTrains);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching trains:', error);
            setLoading(false);
        }
    };

    const handleBookTrain = async (train) => {
        alert(`You are booking the train: ${train.name} from ${train.departureStation} to ${train.destinationStation} on ${train.date}.`);
        try {
            await axios.post('http://localhost:5001/bookings', {
                trainId: train.id,
                trainName: train.name,
                departureStation: train.departureStation,
                destinationStation: train.destinationStation,
                departureTime: train.departureTime,
                arrivalTime: train.arrivalTime,
                date: travelDate,
                passengerCount: passengerCount
            });

            navigate('/my-bookings');
        } catch (error) {
            console.error('Error booking the train:', error);
        }
    };

    return (
        <div className="home-page">
            
            <div className="image-and-offers">
                <img src='https://img.lovepik.com/bg/20231213/green-train-passes-on-the-tracks-with-hills-behind-it_2457332_wh1200.png' alt="Train" className="train-image" />
                <div className="offers-section">
                <h2>Exclusive Offers</h2>
<ul>
    <li class="offer-highlight">Flat 20% Off on Round-Trip Bookings</li>
    <li>Group Discounts: Save More When Traveling with Friends or Family</li>
    <li class="offer-highlight">Student Special: 15% Discount with Valid ID</li>
    <li>Last-Minute Saver: Up to 25% Off on Same-Day Bookings</li>
    <li>Complimentary Wi-Fi on Select Routes</li>
    <li class="offer-highlight">Kids Travel Free on Weekends</li>
    <li>Earn Reward Points for Every Trip</li>
    <li>Seasonal Deals: 30% Off During Festive Periods</li>
    <li class="offer-highlight">Upgrade to Sleeper Coach for Free on Night Trains</li>
    <li>Exclusive Access to VIP Lounge for Premium Ticket Holders</li>
</ul>
To konw more about our offers, please contact @admin
                </div>
            </div>

            <div className="search-booking">
                <h1>Book Your Train Tickets</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Departure Station"
                        className="search-input"
                        value={departureStation}
                        onFocus={() => setCitySuggestions([...citySuggestions])}
                        onChange={(e) => setDepartureStation(e.target.value)}
                        list="departure-city-list"
                    />
                    <datalist id="departure-city-list">
                        {citySuggestions.map((city) => (
                            <option key={city.id} value={city.name} />
                        ))}
                    </datalist>

                    <input
                        type="text"
                        placeholder="Destination Station"
                        className="search-input"
                        value={destinationStation}
                        onFocus={() => setCitySuggestions([...citySuggestions])}
                        onChange={(e) => setDestinationStation(e.target.value)}
                        list="destination-city-list"
                    />
                    <datalist id="destination-city-list">
                        {citySuggestions.map((city) => (
                            <option key={city.id} value={city.name} />
                        ))}
                    </datalist>

                    <input
                        type="date"
                        className="search-input"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                    />

                    <select
                        className="search-input"
                        value={passengerCount}
                        onChange={(e) => setPassengerCount(e.target.value)}
                    >
                        {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                        ))}
                    </select>

                    <button className="search-button" onClick={handleSearchTrains}>Search Trains</button>
                </div>
            </div>

            <div className="available-trains">
                <h2>Available Trains</h2>
                {loading ? (
                    <p>Loading trains...</p>
                ) : (
                    availableTrains.length > 0 ? (
                        availableTrains.map(train => (
                            <div key={train.id} className="train">
                                <h3>{train.name}</h3>
                                <p>Departure: {train.departureStation} at {train.departureTime}</p>
                                <p>Arrival: {train.destinationStation} at {train.arrivalTime}</p>
                                <p>Date: {travelDate}</p>
                                <p>Seats Available: {train.availableSeats}</p>
                                <button
                                    className="book-button"
                                    onClick={() => handleBookTrain(train)}
                                >
                                    Book This Train
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No trains available for the selected route and date.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default HomePage;
