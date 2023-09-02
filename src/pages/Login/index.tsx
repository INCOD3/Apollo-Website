import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import { Navbar } from "../../components/navbar/Navbar";

import "./styles.scss"
import { FormControl, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginResponse, loginAccount } from '../../api/LoginRequest';
import { useSignIn } from 'react-auth-kit';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const signIn = useSignIn();

    function isValidEmail() {
        if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) return false;
        else return true;
    }

    function isValidPassword() {
        if (password.trim() === '') return false;
        else return true;
    }

    function handleLoginAccount() {
        if (!isValidEmail()) {
            setMessage("Este e-mail não é válido!");
            return;
        }
        if (!isValidPassword()) {
            setMessage("A senha não pode estar vazia!");
            return;
        }

        loginAccount({email, password}).then((response: LoginResponse) => {
            signIn({ 
                token: response.data.token,
                tokenType: "Bearer",
                expiresIn: 1440,
                authState: { email: email }
             });
             navigate('/');
        }).catch(() => {
            setMessage("Email ou senha inválidos");
        })
    }

    return(
        <div>
            <Navbar/>
            <div className="container d-flex justify-content-center mt-5 py-5">
                <div className="card d-flex flex-column align-items-center">
                    <AccountCircleIcon className='mt-4 user-icon text-primary' />
                    <div className='mx-5 mb-3 mt-2 text-center'>
                        <h2 className="fw-bold login-text text-primary">Realize seu Login</h2>
                        <p className='text-body-secondary'>Você precisa se autenticar para acessar sua conta</p>
                    </div>                    
                    <div>
                        <div className='d-flex flex-column gap-4'>
                            <FormControl>
                                <Input 
                                    className='my-3'
                                    placeholder='Insira seu email'
                                    type='text'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <Input 
                                    className='mb-3'
                                    placeholder='Insira sua senha'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    startAdornment={
                                    <InputAdornment position="start">
                                        <KeyIcon/>
                                    </InputAdornment>
                                } />
                            </FormControl>
                            <button 
                            onClick={() => {
                                handleLoginAccount();
                            }}
                            className='btn btn-primary py-2 mb-2'>Entrar</button>
                            <div className='text-center fs-6 text-danger'>{message}</div>
                            <a 
                            href="register" 
                            className='text-center text-decoration-none text-body-secondary mb-4'>Ainda não tem uma conta?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}