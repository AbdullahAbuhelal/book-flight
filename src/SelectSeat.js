import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import SeatMap from "./SeatMap";

const SelectSeat = () => {
    const location = useLocation();
    const flight = location.state.flight;

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const [selectedSeats, setSelectedSeats] = useState([null]);
    const [numberStartF, setNumberStartF] = useState();
    const [numberEndF, setNumberEndF] = useState();
    const [letterStartF, setLetterStartF] = useState();
    const [letterEndF, setLetterEndF] = useState();
    const [numberStartB, setNumberStartB] = useState();
    const [numberEndB, setNumberEndB] = useState();
    const [letterStartB, setLetterStartB] = useState();
    const [letterEndB, setLetterEndB] = useState();
    const [numberStartE, setNumberStartE] = useState();
    const [numberEndE, setNumberEndE] = useState();
    const [letterStartE, setLetterStartE] = useState();
    const [letterEndE, setLetterEndE] = useState();
    const [allSeats, setAllSeats] = useState([]);
    const [numberOfSeats, setNumberOfSeats] = useState(0);

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const seatsNumberRangeF = '01-05';
        const seatsLetterRangeF = 'A-F';
        const seatsNumberRangeB = '06-10';
        const seatsLetterRangeB = 'A-F';
        const seatsNumberRangeE = '11-21';
        const seatsLetterRangeE = 'A-F';

        setNumberStartF(seatsNumberRangeF.substring(0,2));
        setNumberEndF(seatsNumberRangeF.substring(3));
        setNumberStartB(seatsNumberRangeB.substring(0,2));
        setNumberEndB(seatsNumberRangeB.substring(3));
        setNumberStartE(seatsNumberRangeE.substring(0,2));
        setNumberEndE(seatsNumberRangeE.substring(3));

        setLetterStartF(seatsLetterRangeF.substring(0,1));
        setLetterEndF(seatsLetterRangeF.substring(2));
        setLetterStartB(seatsLetterRangeB.substring(0,1));
        setLetterEndB(seatsLetterRangeB.substring(2));
        setLetterStartE(seatsLetterRangeE.substring(0,1));
        setLetterEndE(seatsLetterRangeE.substring(2));

        setNumberOfSeats((numberEndF - numberStartF + 1) * (alphabet.indexOf(letterEndF) - alphabet.indexOf(letterStartF) + 1));
        if (numberOfSeats > 0)
        setAllSeats(new Array(numberOfSeats));

        setIsPending(false);
    }, [numberOfSeats, isPending]);

    return (
        <div className="select-seat">
            {/* TODO: if the user exist */}
            {isPending && <LoadingPage></LoadingPage>}
            {!isPending && <SeatMap allSeats={allSeats}></SeatMap>}
        </div>
     );
}

export default SelectSeat;