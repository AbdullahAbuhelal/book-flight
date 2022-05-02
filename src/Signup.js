import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="sign">
            <h2>Signup</h2>
            <p>Have an account? <Link to='/login'>login</Link></p>
        </div>
     );
}

export default Signup;