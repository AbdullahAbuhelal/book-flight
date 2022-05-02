import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [passport, setPassport] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const signupFunction = (e) =>{
        e.preventDefault();
        console.log('signup');
    }
    return (
        <div className="sign">
            <h2>Signup</h2>
            <form onSubmit={signupFunction}>
                <label>Passport Number*</label>
                <input
                type="number"
                required
                placeholder="passport number"
                value={passport}
                onChange={(e) => setPassport(e.target.value)}
                />
                <label>Password*</label>
                <input
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <label>First Name*</label>
                <input
                type="text"
                required
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name*</label>
                <input
                type="text"
                required
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
                <label>Birth Date*</label>
                <input
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                />
                <p>* Required fields</p>
                <button>Signup</button>
            </form>
            <p>Have an account? <Link to='/login'>Login</Link></p>
        </div>
     );
}

export default Signup;