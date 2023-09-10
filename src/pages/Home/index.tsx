import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Link } from "react-router-dom"

import "./styles.scss"

export function HomePage() {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container-fluid mt-5 py-5">
                <div className="container card border-0 gradient py-5">
                    <div className="d-flex flex-column text-start text w-75 ms-1 ps-5">
                        <h1 className="text-white fw-bold mt-3">Amplifique suas Vendas</h1>
                        <p className="text-white fs-5 fw-normal">Com o nosso sistema você pode vender seus produtos automáticamente pelo discord, sem precisar se preocupar com cobranças. Tudo de forma automática para que você só precise ver o dinheiro em sua conta sem mais preocupações.</p>
                    </div>
                    <div className="ms-1 ps-5">
                        <Link 
                        to="#products" 
                        className="btn btn-primary px-5 py-2 my-4"
                        onClick={() => {
                            window.location.href = "#products";
                        }}
                        >Adquirir já</Link>
                    </div>
                </div>
            </div>
            <div id='products' className="text-center">
                <h1 className="fw-bold text-primary">Confira os nossos principais plano <br/> totalmente ideal para o seu projeto</h1>
                <p className="text-secondary">Promova hoje seu negócio com um sistema com uma <br/>
alta qualidade e automação de dar inveja.</p>
            </div>
            <div className="container d-flex justify-content-around mt-5 products">
                <div className="card border-0 p-5">
                    <p className="fw-bold fs-5 text-secondary">Iniciante</p>
                    <div className="d-flex flex-row align-items-center">
                        <h1 className="text-primary fw-bold">R$29,90</h1>
                        <h3 className="text-secondary">/mês</h3>
                    </div>
                    <p className="text-secondary">Utilize este plano para pequenos projetos</p>
                    <ul className='list-unstyled mt-3'>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Geração de pagamentos automático</p>
                        </li>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Sistema de cupons de desconto</p>
                        </li>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Notificação sobre descontos em DM</p>
                        </li>
                        <li className='d-flex gap-1'><RemoveCircleIcon className='uncheck-icon'/>
                        <p className='text-secondary'>Criação de até 25 produtos</p>
                        </li>
                        <li className='d-flex gap-1'><RemoveCircleIcon className='uncheck-icon'/>
                        <p className='text-secondary'>Resumo de vendas por semana/mês</p>
                        </li>
                        <li className='d-flex gap-1'><RemoveCircleIcon className='uncheck-icon'/>
                        <p className='text-secondary'>Produtos entregues automaticamente</p>
                        </li>
                    </ul>
                    <div className='mx-auto'>
                        <Link to="/order/begginer" className='btn btn-primary'>Contratar</Link>
                    </div>
                </div>
                <div className="card border-0 p-5">
                    <p className="fw-bold fs-5 text-primary">Profissional</p>
                    <div className="d-flex flex-row align-items-center">
                        <h1 className="text-primary fw-bold">R$49,90</h1>
                        <h3 className="text-secondary">/mês</h3>
                    </div>
                    <p className="text-secondary">Utilize este plano para grandes projetos</p>
                    <ul className='list-unstyled mt-3'>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Geração de pagamentos automático</p>
                        </li>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Sistema de cupons de desconto</p>
                        </li>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Notificação sobre descontos em DM</p>
                        </li>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Criação de até 25 produtos</p>
                        </li>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Resumo de vendas por semana/mês</p>
                        </li>
                        <li className='d-flex gap-1'><CheckCircleIcon className='check-icon'/>
                        <p className='text-secondary'>Produtos entregues automaticamente</p>
                        </li>
                    </ul>
                    <div className='mx-auto'>
                        <Link to="/order/professional" className='btn btn-primary'>Contratar</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}