import { Link } from "react-router-dom";

const loginFunction = (e) => {
    e.preventDefault();
    console.log('submit');
}

const Login = () => {
    return (
        <div className="sign">
            <h2>Login</h2>
            <form onSubmit={loginFunction}>
                <label>Passport Number</label>
                <input
                    type="number"
                    required
                    placeholder="passport number"
                />
                <label>Password</label>
                <input
                type="password"
                required
                placeholder="password"
                />
                <div className="button">
                    <button>Login</button>
                </div>
            </form>
            <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
        </div>
     );
}

export default Login;