import { Link } from "react-router-dom"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./styles.scss"

export function Navbar() {
    return(
        <nav className="container-fluid navbar navbar-expand-lg border border-1">
            <div className="container">
                <Link to="/" className="navbar-brand fs-1">APOLLO</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#apolloNavbar" aria-expanded="false" aria-aria-controls="apolloNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="apolloNavbar">
                    <ul className="navbar-nav mx-auto mb-2 gap-4 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Sobre</Link>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center mx-auto gap-4'>
                        <Link to="/login" className="btn btn-primary d-flex align-items-center gap-2">
                            <AccountCircleIcon />
                            Minha conta
                        </Link>
                        <Link to="/register" className="btn btn-outline-light fs-6 text-body-secondary">Registre-se</Link>
                </div>
            </div>
        </nav>
    )
}