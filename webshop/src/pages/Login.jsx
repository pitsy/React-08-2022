import { useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    function login() {
        if (passwordRef.current.value === '123' && emailRef.current.value === 'banan') {
            authCtx.updateLoggedIn(true);
            navigate('/admin');
        }
    }

    return ( 
        <div>
            <label>E-mail</label> <br />
            <input ref={emailRef} type="text" /> <br />
            <label>Password</label> <br />
            <input ref={passwordRef} type="password" /> <br />
            <button onClick={login}>Log in</button>
        </div> );
}

export default Login;