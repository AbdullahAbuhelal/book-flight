import { useEffect, useState } from "react";

const SeatMap = (props) => {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const seats = props.seats;
    const [seatsArrayF, setSeatsArrayF] = useState(seats.seatsArrayF);
    const [seatsArrayB, setSeatsArrayB] = useState(seats.seatsArrayB);
    const [seatsArrayE, setSeatsArrayE] = useState(seats.seatsArrayE);
    console.log(seatsArrayF, seatsArrayB, seatsArrayE);

    const [isSeatLimit, setIsSeatLimit] = useState(false);

    const [selectedSeats, setSelectedSeats] = useState([{selected:null, class: 'First class', price: null}]);
    console.log(selectedSeats.length);

    const submitSeats = (e) => {
        e.preventDefault();
        console.log(selectedSeats.length);
    }

    const addSeat = () => {
        let newSelected = [...selectedSeats, {selected: null, class: 'First class', price: null}];
        if (newSelected.length > 10) setIsSeatLimit(true);
        else
        setSelectedSeats(newSelected);
        console.log(newSelected);
    }
    const deleteSeat = (i) => {
        if (selectedSeats.length>1){
            console.log("i", i);
            let newArray = [...selectedSeats];
            newArray.splice(i, 1);
            setSelectedSeats(newArray);
            console.log('new array', newArray)
    }
        console.log('after deletion', selectedSeats);
    }

    const changeClass = (i, value) => {
        setSelectedSeats(newSelected => {
            newSelected[i].class = value;
            return newSelected;
        })
    }

    return ( <div className="seat-map">
        <h2>Select a seat</h2>
        <form onSubmit={submitSeats} className='form'>
            {
                selectedSeats.map((seat, i) => (
                    <div key={i}>
                        <h4>Seat #{i+1}</h4>
                        <label>seat class: </label>
                        <select
                        onChange={e => changeClass(i, e.target.value)}>
                            <option value="First class">First class</option>
                            <option value="Business class">Business class</option>
                            <option value="Economy class">Economy class</option>
                        </select>
                        <label>seat number: </label>
                        <select>
                            <option value="">non</option>
                        </select>
                        <label>price: </label>
                        <label className="price">
                            300
                            </label>
                        <label>sar</label>
                        <button className="delete" onClick={() => deleteSeat(i)}>delete</button>
                    </div>
                ))
            }
            <p className="add-seat" onClick={addSeat}>add a seat</p>
            {isSeatLimit && <p className="error">Cannot add a seat: You have reached the seats limit!</p>}
            <button>Checkout</button>
        </form>
    </div> )
}

export default SeatMap;