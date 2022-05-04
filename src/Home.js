import { useState } from 'react';

const Home = () => {

    const [isSearching, setIsSearching] = useState(false);
    const cities = [
        {name: 'Riyadh', acronym: 'RUH'},
        {name: 'Jeddah', acronym: 'JED'},
        {name: 'Dammam', acronym: 'DMM'},
    ];

    const [destinationCity, setDestinationCity] = useState('JED');
    const [destinationDate, setDestinationDate] = useState('');
    const [departureCity, setDepartureCity] = useState('RUH');
    const [departureDate, setDepartureDate] = useState('');

    const searchFlights = (e) => {
        e.preventDefault();
        setIsSearching(true);
    }

    return (
        <div className="home">
            <h2>Book a flight</h2>
            <form onSubmit={searchFlights}>
                <div>
                    <h3>Departure</h3>
                    <label>City</label>
                    <select
                        value={departureCity}
                        onChange={(e) => setDepartureCity(e.target.value)}>
                            {cities.map((city) => (
                                <option
                                key={city.acronym}
                                value={city.acronym}>{city.name} ({city.acronym})</option>
                            ))}
                        </select>
                        <label>Date</label>
                        <input
                        type="date"
                        onChange={(e) => setDepartureDate(e.target.value)} />
                </div>
                <div>
                    <h3>Destination</h3>
                        <label>City</label>
                        <select
                        value={destinationCity}
                        onChange={(e) => setDestinationCity(e.target.value)}>
                            {cities.map((city) => (
                                <option
                                key={city.acronym}
                                value={city.acronym}>{city.name} ({city.acronym})</option>
                            ))}
                        </select>
                        <label>Date</label>
                        <input 
                        type="date"
                        onChange={(e) => setDestinationDate(e.target.value)} />
                </div>
                { !isSearching && <button>Search</button>}
                { isSearching && <button disabled>Searching...</button>}
            </form>
        </div>
     );
}

export default Home;