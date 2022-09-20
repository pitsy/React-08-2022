import { useRef } from "react";

function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    return ( 
        <div>
            <div>Sign up</div> <br />
            <label>E-mail</label> <br />
            <input type="text" ref={emailRef} /> <br />
            <label>Password</label> <br />
            <input type="password" ref={passwordRef} /> <br />
            <label>Repeat password</label> <br />
            <input type="password" ref={repeatPasswordRef} /> <br />
        </div> );
}

export default Signup;