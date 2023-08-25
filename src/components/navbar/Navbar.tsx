import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./styles.scss"

export function Navbar() {
    return(
        <nav className="container-fluid navbar navbar-expand-lg border border-1">
            <div className="container">
                <a href="/" className="navbar-brand fs-1">APOLLO</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#apolloNavbar" aria-expanded="false" aria-aria-controls="apolloNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="apolloNavbar">
                    <ul className="navbar-nav mx-auto mb-2 gap-4 mb-lg-0">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Início</a>
                        </li>
                        <li className="nav-item">
                            <a href="products" className="nav-link">Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a href="about" className="nav-link">Sobre</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center mx-auto gap-4'>
                        <a href="login" className="btn btn-primary d-flex align-items-center gap-2">
                            <AccountCircleIcon />
                            Minha conta
                        </a>
                        <a href="register" className="btn btn-outline-light fs-6 text-body-secondary">Registre-se</a>
                </div>
            </div>
        </nav>
    )
}