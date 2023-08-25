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
                    <AccountCircleIcon className='mt-4 user-icon' />
                    <h2 className="mx-5 mt-2 mb-4 text-center login-text">Realize seu Login</h2>
                    <div>
                        <div className='d-flex flex-column gap-4'>
                            <FormControl>
                                <Input 
                                    className='p-1 my-3'
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
                                    className='p-1 mb-3'
                                    placeholder='Insira sua senha'
                                    type='password'
                                    startAdornment={
                                    <InputAdornment position="start">
                                        <KeyIcon/>
                                    </InputAdornment>
                                } />
                            </FormControl>
                            <button className='btn btn-primary py-2 mb-3'>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}