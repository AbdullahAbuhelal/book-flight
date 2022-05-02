import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [passport, setPassport] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const loginFunction = (e) => {
        e.preventDefault();
        console.log(passport);
        console.log(password);
    }


    return (
        <div className="sign">
            <h2>Login</h2>
            <form onSubmit={loginFunction}>
                <label>Passport Number</label>
                <input
                    type="number"
                    required
                    placeholder="passport number"
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                />
                <label>Password</label>
                <input
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">Invalid passport number or password</p>}
                <button>Login</button>
            </form>
            <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
        </div>
     );
}

export default Login;