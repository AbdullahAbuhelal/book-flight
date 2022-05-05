import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

const Flights = () => {
    const {departure, destination, date} = useParams();

    const [flights, setFlights] = useState([]);
    const [isSearching, setIsSearching] = useState(true);
    const navigate = useNavigate();

    const demoFlights = [
        {id: 1111, departure: 'RUH', destination: 'JED', date: '2022-05-04', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 2222, departure: 'RUH', destination: 'DMM', date: '2022-05-04', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 3333, departure: 'JED', destination: 'RUH', date: '2022-05-04', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 4444, departure: 'JED', destination: 'DMM', date: '2022-05-04', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 5555, departure: 'DMM', destination: 'JED', date: '2022-05-04', departureTime: '01:00', arrivalTime: '03:00'},
        {id: 6666, departure: 'RUH', destination: 'JED', date: '2022-05-04', departureTime: '05:00', arrivalTime: '07:00'},
        {id: 7777, departure: 'RUH', destination: 'JED', date: '2022-05-05', departureTime: '01:00', arrivalTime: '03:00'},
    ];

    useEffect (() => {
    
        let resultFlights = [];
        console.log(date);
        // TODO: delete this demo search
        demoFlights.forEach((flight) => {
            if (date === flight.date && departure === flight.departure && destination === flight.destination)
            {resultFlights.push(flight); console.log('flight added')}
        });
        // to prevent loading the page again
        if (flights.length ==0)
        setFlights(resultFlights);
        console.log(flights);
        console.log("r" , resultFlights);

        // TODO: search flights using the database
        
        setIsSearching(false);
    }, [flights])


    return (
        <div className="flights">
           {flights.length == 0 && !isSearching && <div className="no-flights">
                <h2>Sorry</h2>
                <p>There's no flights based on your search!</p>
                <p>Please <Link to={'/'}>search again</Link></p>
            </div>}
            {isSearching && <div className="isSearching">
                <h2>Loading...</h2>
                <p>Please wait</p>
            </div>}
            {!isSearching && flights.length !=0 && <div>
                <h2>Flights</h2>
                <h3>From {departure} to {destination} </h3>
                <h4>in {date}</h4>
                {flights.map((flight) => (
                    <div className="flightCard">
                        <Link to={'/'}>
                            <div>
                            <p>Flight number:</p>
                            <h3>{flight.id}</h3>
                            </div>
                            <div>
                            <p>departure time:</p>
                            <h3>{flight.departureTime}</h3>
                            </div>
                            <div>
                            <p>arrival time:</p>
                            <h3>{flight.arrivalTime}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>}
        </div>
     );
}

export default Flights;