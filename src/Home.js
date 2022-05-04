import { useState } from 'react';

const Home = () => {

    const [isSearching, setIsSearching] = useState(false);
    const cities = [
        {name: 'Riyadh', acronym: 'RUH'},
        {name: 'Jeddah', acronym: 'JED'},
        {name: 'Dammam', acronym: 'DMM'},
    ];
    const demoFlights = [
        {id: 1111, departure: 'RUH', destination: 'JED', date: '2022-05-4', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 2222, departure: 'RUH', destination: 'DMM', date: '2022-05-4', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 1111, departure: 'JED', destination: 'RUH', date: '2022-05-4', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 1111, departure: 'JED', destination: 'DMM', date: '2022-05-4', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 1111, departure: 'DMM', destination: 'JED', date: '2022-05-4', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 1111, departure: 'RUH', destination: 'JED', date: '2022-05-4', departureTime: '05:00', arrivalTime: '07:00'},
        {id: 1111, departure: 'RUH', destination: 'JED', date: '2022-05-5', departureTime: '01:00', arrivalTime: '03:00'},
    ]

    const [destinationCity, setDestinationCity] = useState('JED');
    const [flightDate, setFlightDate] = useState('');
    const [departureCity, setDepartureCity] = useState('RUH');
    const [flights, setFlights] = useState(null);

    const searchFlights = (e) => {
        e.preventDefault();
        console.log(flightDate);
        setIsSearching(true);
        // TODO: search flights using the database
        // navigator('/flights', {date: flightDate, departure: departureCity, destination: destinationCity, flights: flights});
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
                </div>
                <div>
                    <label>Date</label>
                    <input
                    type="date"
                    onChange={(e) => setFlightDate(e.target.value)} />
                </div>
                <div>
                    { !isSearching && <button>Search</button>}
                    { isSearching && <button disabled>Searching...</button>}
                </div>
            </form>
        </div>
     );
}

export default Home;