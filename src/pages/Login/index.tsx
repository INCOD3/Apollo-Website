import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Navbar } from "../../components/navbar/Navbar";

import "./styles.scss"
import { FormControl, Input, InputAdornment } from '@mui/material';

export function LoginPage() {
    return(
        <div>
            <Navbar/>
            <div className="container d-flex justify-content-center mt-5">
                <div className="card d-flex flex-column align-items-center">
                    <AccountCircleIcon className='mt-4 user-icon' />
                    <h2 className="mx-5 text-center">Realize seu login</h2>
                    <div>
                        <div className='d-flex flex-column'>
                            <FormControl>
                                <Input 
                                    placeholder='Insira seu email'
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}