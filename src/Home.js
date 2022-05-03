const Home = () => {

    const cities = [
        {name: 'Riyadh', acronym: 'RUH'},
        {name: 'Jeddah', acronym: 'JED'},
        {name: 'Dammam', acronym: 'DMM'},
    ];

    return (
        <div className="home">
            <h2>Book a flight</h2>
            <form>
                <div>
                    <h3>Departure</h3>
                        <label>City</label>
                        <select>
                            {cities.map((city) => (
                                <option key='${city.name}'>{city.name} ({city.acronym})</option>
                            ))}
                        </select>
                        <label>Date</label>
                        <input type="date" />
                </div>
                <div>
                    <h3>Destination</h3>
                        <label>City</label>
                        <select>
                            {cities.map((city) => (
                                <option key='${city.name}'>{city.name} ({city.acronym})</option>
                            ))}
                        </select>
                        <label>Date</label>
                        <input type="date" />
                </div>
                <button>Search</button>
            </form>
        </div>
     );
}

export default Home;