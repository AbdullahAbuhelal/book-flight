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
    const [seatsArrayF, setSeatsArrayF] = useState([]);
    const [seatsArrayB, setSeatsArrayB] = useState([]);
    const [seatsArrayE, setSeatsArrayE] = useState([]);
    const [numberOfSeats, setNumberOfSeats] = useState(0);

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        // TODO: fetch the range from the database
        // TODO: fetch the price of each class
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

        let seatsArrayFTmp = null;
        let seatsArrayBTmp = null;
        let seatsArrayETmp = null;

        const numberOfSeatsF = (numberEndF - numberStartF + 1) * (alphabet.indexOf(letterEndF) - alphabet.indexOf(letterStartF) + 1);
        const numberOfSeatsB = (numberEndB - numberStartB + 1) * (alphabet.indexOf(letterEndB) - alphabet.indexOf(letterStartB) + 1);
        const numberOfSeatsE = (numberEndE - numberStartE + 1) * (alphabet.indexOf(letterEndE) - alphabet.indexOf(letterStartE) + 1);

        if (numberOfSeatsF>1)
            seatsArrayFTmp = new Array(numberOfSeatsF);
        if (numberOfSeatsB>1)
            seatsArrayBTmp = new Array(numberOfSeatsB);
        if (numberOfSeatsE>1)
            seatsArrayETmp = new Array(numberOfSeatsE);

        // initialize seatsArrayF
        var index = 0;
        for (var i=numberStartF-1+1; i<=numberEndF; i++){
            for (var j=alphabet.indexOf(letterStartF); j<=alphabet.indexOf(letterEndF); j++){
                // TODO: before adding check if the seat is reserved
                seatsArrayFTmp[index] = `${i}${alphabet[j]}`;
                index++;
            }
        }

        // initialize seatsArrayB
        var index = 0;
        for (var i=numberStartB-1+1; i<=numberEndB; i++){
            for (var j=alphabet.indexOf(letterStartB); j<=alphabet.indexOf(letterEndB); j++){
                // TODO: before adding check if the seat is reserved
                seatsArrayBTmp[index] = `${i}${alphabet[j]}`;
                index++;
            }
        }

        // initialize seatsArrayE
        var index = 0;
        for (var i=numberStartE-1+1; i<=numberEndE; i++){
            for (var j=alphabet.indexOf(letterStartE); j<=alphabet.indexOf(letterEndE); j++){
                // TODO: before adding check if the seat is reserved
                seatsArrayETmp[index] = `${i}${alphabet[j]}`;
                index++;
            }
        }

        setSeatsArrayF(seatsArrayFTmp);
        setSeatsArrayB(seatsArrayBTmp);
        setSeatsArrayE(seatsArrayETmp);
        console.log('tmp array', seatsArrayFTmp);
        console.log(seatsArrayF, seatsArrayB, seatsArrayE);
        setIsPending(false);
    }, [isPending, setLetterEndB]);

    return (
        <div className="select-seat">
            {/* TODO: if the user exist */}
            {isPending && <LoadingPage></LoadingPage>}
            {!isPending && <SeatMap seats={{seatsArrayF: seatsArrayF, seatsArrayB: seatsArrayB, seatsArrayE: seatsArrayE}}></SeatMap>}
        </div>
     );
}

export default SelectSeat;