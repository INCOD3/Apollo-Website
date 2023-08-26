import { Navbar } from "../../components/navbar/Navbar";
import { Link } from "react-router-dom"

import "./styles.scss"

export function HomePage() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid mt-5 py-5">
                <div className="container card border-0 gradient py-5">
                    <div className="d-flex flex-column text-start text w-50 ms-5 ps-5">
                        <h1 className="text-white fw-bold mt-3">Amplifique suas Vendas</h1>
                        <p className="text-white fs-5 fw-normal">Com o nosso sistema você pode vender seus produtos automáticamente pelo discord, sem precisar se preocupar com cobranças. Tudo de forma automática para que você só precise ver o dinheiro em sua conta sem mais preocupações.</p>
                    </div>
                    <div className="ms-5 ps-5">
                        <Link to="products" className="btn btn-primary px-5 py-2 my-4">Adquirir já</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}