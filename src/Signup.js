import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [passport, setPassport] = useState('');
    const [passportError , setPassportError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false);
    const [birthDate, setBirthDate] = useState('');
    const [birthDateError, setBirthDateError] = useState(false);

    const validatePassport = () => {
        if (passport.length!=6) setPassportError(true);
        else {
            if (!(/[a-zA-Z]/).test(passport.charAt(0))) {setPassportError(true); console.log('letter');}
            else {
                for (var i=1; i<6; i++){
                    if (passport.charAt(i)<'0' || passport.charAt(i)>'9'){
                        setPassportError(true);
                        break;
                    }
                }
            }
        }
    }

    const validateName = (name) => {
        var error = false;
        for (var i=0; i<name.length; i++){
            if (name.charAt(i) == ' '){
                error = true;
                break;
            }
        }
        return error;
    }

    const signupFunction = (e) =>{
        e.preventDefault();

        /* validate passport number
        considering the Saudi passport number that is 6 characters long and first character is a letter and the rest is digits */
        validatePassport();

        // validate password
        if (password.length<8) setPasswordError(true);

        // validate the name
        setFirstNameError(validateName(firstName));
        setLastNameError(validateName(lastName));

    }

    return (
        <div className="sign">
            <h2>Signup</h2>
            <form onSubmit={signupFunction}>
                <label>Passport Number*</label>
                {passportError && <p className="error">Invalid passport number</p>}
                <input
                type="text"
                required
                placeholder="passport number"
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
                />
                <label>Password*</label>
                {passwordError && <p className="error">Password must be of 8 characters or more</p>}
                <input
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <label>First Name*</label>
                {firstNameError && <p className="error">Invalid first name</p>}
                <input
                type="text"
                required
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name*</label>
                {lastNameError && <p className="error">Invalid last name</p>}
                <input
                type="text"
                required
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
                <label>Birth Date*</label>
                {birthDateError && <p className="error">Invalid birth date</p>}
                <input
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                />
                <p>* Required fields</p>
                <button onClick={()=>{
                            setFirstName(firstName.trim());
                            setLastName(lastName.trim());
                }}>Signup</button>
            </form>
            <p>Have an account? <Link to='/login'>Login</Link></p>
        </div>
     );
}

export default Signup;