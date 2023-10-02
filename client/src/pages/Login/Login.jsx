import "./Login.css"
import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'
import { useState } from "react";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";


export default function Login(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();
        
        const data = {
            userName, password
        };

        try{
            const response = await api.post('api/auth/v1/signin', data);
            
            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            
            navigate('/books');
        }
        catch (error){
            alert('Login failed. Try again!');
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Erudio logo" className="logo"/>
                <form onSubmit={login}>
                    <h1>Access your Account</h1>

                    <input 
                        placeholder="Username"
                        value={userName}
                        onChange={ e => setUserName(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>

            </section>

            <img src={padlock} alt="Login"/>
        </div>
    );
}