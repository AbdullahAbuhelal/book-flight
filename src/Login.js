import { Link } from "react-router-dom";

const loginFunction = () => {
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
                />
                <label>Password</label>
                <input
                type="password"
                required
                />
                <div className="button">
                    <button>Login</button>
                </div>
            </form>
            <p>Don't have an account? <Link to='/signup'>signup</Link></p>
        </div>
     );
}

export default Login;