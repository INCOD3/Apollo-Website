import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import KeyIcon from '@mui/icons-material/Key';
import { Navbar } from "../../components/navbar/Navbar"

import "./styles.scss"
import { FormControl, Input, InputAdornment } from '@mui/material'

export function RegisterPage() {
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
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <KeyIcon/>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <button className='btn btn-primary px-5 py-2 mb-2'>Cadastrar</button>
                        <a href="login" 
                        className='text-decoration-none text-body-secondary mb-4 text-center'>Já tenho uma conta</a>
                    </div>
                </div>
            </div>
        </div>
    )
}