import { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useTranslation } from 'react-i18next';

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const firebaseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOhn3dQZ_5Rhe8v1jg_6jpE4rYSx2uhIE"
    const [message, setMessage] = useState("");
    const { t } = useTranslation();

    function login() {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }
    
        fetch(firebaseUrl,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
        }).then(res => res.json()) // body+headers+http status code+time
            .then(body => {
            if (body.error) {
                // kuvame useState abil kasutjale sõnumi
                setMessage(t(body.error.message)); 
            } else {
                setMessage('');
                authCtx.updateLoggedIn(true);
                navigate('/admin');
                emailRef.current.value = "";
                passwordRef.current.value = "";
            }
        });
    }

    return ( 
        <div>
            <div>{message}</div>
            <label>E-mail</label> <br />
            <input ref={emailRef} type="text" /> <br />
            <label>Password</label> <br />
            <input ref={passwordRef} type="password" /> <br />
            <button onClick={login}>Log in</button>
        </div> );
}

export default Login;