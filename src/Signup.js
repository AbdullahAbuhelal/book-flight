import { Link } from "react-router-dom";

const Signup = () => {
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
                />
                <label>Password*</label>
                <input
                type="password"
                required
                placeholder="password"
                />
                <label>First Name*</label>
                <input
                type="text"
                required
                placeholder="first name"
                />
                <label>Last Name*</label>
                <input
                type="text"
                required
                placeholder="last name"
                />
                <label>Birth Date*</label>
                <input
                type="date"
                required
                />
                <p>* Required fields</p>
                <button>Signup</button>
            </form>
            <p>Have an account? <Link to='/login'>Login</Link></p>
        </div>
     );
}

export default Signup;