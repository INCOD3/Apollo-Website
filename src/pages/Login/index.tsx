import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import { Navbar } from "../../components/navbar/Navbar";

import "./styles.scss"
import { FormControl, Input, InputAdornment } from '@mui/material';

export function LoginPage() {
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
                                    startAdornment={
                                    <InputAdornment position="start">
                                        <KeyIcon/>
                                    </InputAdornment>
                                } />
                            </FormControl>
                            <button className='btn btn-primary py-2 mb-2'>Entrar</button>
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