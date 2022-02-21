import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import { Container, InsideContent} from "../Container.styled.js";
import {Input , Logo, P} from "../Forms.styled";
import { Button } from "../../../components/GeneralStyles/General.styled";
import GoogleLogin from "react-google-login";

const Register = () => {
    const navigate = useNavigate();
    const [errorMessage, setError] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullname] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        const userDetails = {email,username, fullName, password};
        try{
            await axios.post('register', userDetails);
            navigate('/');
        }catch (error){
            setError(error.response.data.error);
        }
    }

    return(
        <Container><InsideContent>
            <div className="mt-3">
                <Logo>Webol</Logo>
            </div>
            <P color="grey">Sign up and watch your favorite creators.</P>

            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_KEY}
                buttonText="Sign in with Google"
                onSuccess={(e) => console.log(e)}
                onFailure={(e) => console.log(e)}
                cookiePolicy={'single_host_origin'}
            />
            <P color="grey" className="mt-3">or quickly sign up</P>

            <form id="test" onSubmit={submit}>
                <div className="mb-3">
                    <Input type="text" name="email" placeholder="Email" required
                           onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <Input type="text" name="username" placeholder="Username" required
                           onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <Input type="text" name="fullName" placeholder="Full Name" required
                           onChange={e => setFullname(e.target.value)}/>
                </div>
                <div>
                    <Input type="password" name="password" placeholder="Password" required
                           onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <Button type="submit" className="btn mt-5" disabled={!password || !fullName || !email} width="320px" height="53px">
                        Sign up</Button>
                </div>
                <div>
                    <P className="text-center mx-auto w-75 mt-4" color="red">{errorMessage}</P>
                </div>
            </form>
            <P color="#4D47C3" className="mt-3 mb-4">have an account?
                <Link style={{ textDecoration: 'none' }} to="/"> Log in</Link></P>

        </InsideContent></Container>
    )
}
export default Register;