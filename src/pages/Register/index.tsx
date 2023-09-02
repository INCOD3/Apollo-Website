import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyIcon from '@mui/icons-material/Key';
import { Navbar } from "../../components/navbar/Navbar"
import { registerAccount } from '../../api/RegisterRequest';

import "./styles.scss"
import { FormControl, Input, InputAdornment } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function isValidEmail() {
        if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) return false;
        else return true;
    }

    function isValidPassword() {
        if (password.trim() === '' || password.length < 8) return false;
        else return true;
    }

    function handleRegisterAccount() {
        if (!isValidEmail()) {
            setMessage("Este e-mail não é válido!");
            return;
        }
        if (!isValidPassword()) {
            setMessage("A senha precisa ter 8 dígitos!");
            return;
        }

        registerAccount({email, password}).then(() => {
            navigate("/login")
        }).catch(() => {
            setMessage("Ocorreu um erro, tente outro email.");
        });
    }

    return(
        <div>
            <Navbar/>
            <div className="container d-flex justify-content-center mt-5 py-5">
                <div className="card d-flex flex-column align-items-center">
                    <AccountCircleIcon className='text-primary user-icon mt-4'/>
                    <div className='mx-5 mb-2 mt-2 text-center'>
                        <h2 className='register-text text-primary fw-bold'>Criar uma conta</h2>
                        <p className='text-body-secondary'>Crie uma conta para ter acesso aos nosso serviços</p>
                    </div>
                    <div className='d-flex flex-column gap-4'>
                        <FormControl>
                            <Input
                                placeholder='Insira seu email'
                                type='text'
                                className='my-3'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <AccountCircleIcon/>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <Input 
                                placeholder='Insira sua senha'
                                type='password'
                                className='mb-3'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <KeyIcon/>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <button 
                        onClick={() => {
                            handleRegisterAccount();
                        }}
                        className='btn btn-primary px-5 py-2 mb-2'>Cadastrar</button>
                        <div className='text-center fs-6 text-danger'>{message}</div>
                        <a href="login" 
                        className='text-decoration-none text-body-secondary mb-4 text-center'>Já tenho uma conta</a>
                    </div>
                </div>
            </div>
        </div>
    )
}