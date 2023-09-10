import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";

import { Link } from "react-router-dom";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import "./styles.scss";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { useEffect, useState } from "react";
import { ServiceOrder, createOrder } from "../../api/OrderRequest";

export function BegginerPage() {
    const [order, setOrder] = useState<ServiceOrder>();
    const header = useAuthHeader();
    const auth = useAuthUser();
    const user = auth() as any;

    useEffect(() => {
        createOrder(header().substring(7), user.email, "BEGGINER")
        .then(setOrder)
    }, []);

    return(
        <div>
            <Navbar/>
            <h1 className="text-center text-primary fw-bold fs-3 mt-5">VOCÊ ESTÁ ADQUIRINDO:</h1>
            <p className="text-center text-secondary fw-6">Caso já tenha efetuado o pagamento, <Link to="/dashboard">clique aqui</Link></p>
                <div className="container d-flex flex-row justify-content-center mt-5 gap-5 items">
                    <div className="card border-0 p-5 rounded shadow shadow-lg">
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
                    </div>
                    <div className="card border-0 shadow shadow-lg card-payment">
                        {
                            order != null ?
                            (
                                <>
                                <div className="text-secondary text-qr mt-3 ms-3">Código QR:</div>
                                <img src={"data:image/png;base64, " + order?.qrcodeBase64}
                                className="card-img-top mx-auto mt-3"
                                alt="" />
                                <div className="text-secondary text-qr mt-5 ms-3">Código de Pagamento</div>
                                <div className="border border-1 qrdata mx-auto">
                                    <span className="qrcode-extralarge-text">
                                        {order?.qrcode}
                                    </span>
                                </div>
                                <div className="align-items-center mx-auto mt-4">
                                    <button 
                                    className="btn btn-primary qrdata-clipboard"
                                    onClick={() => {
                                        navigator.clipboard.writeText(order.qrcode);
                                    }}
                                    >
                                        Copiar QRCode
                                    </button>
                                </div>
                                </>
                            )
                            :
                            <div className="spinner d-flex h-100">
                                <div className="spinner-border mx-auto my-auto" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export function ProfessionalPage() {
    const [order, setOrder] = useState<ServiceOrder>();
    const header = useAuthHeader();
    const auth = useAuthUser();
    const user = auth() as any;

    useEffect(() => {
        createOrder(header().substring(7), user.email, "PROFESSIONAL")
        .then(setOrder)
    }, []);

    return(
        <div>
            <Navbar/>
            <h1 className="text-center text-primary fw-bold fs-3 mt-5">VOCÊ ESTÁ ADQUIRINDO:</h1>
            <p className="text-center text-secondary fw-6">Caso já tenha efetuado o pagamento, <Link to="/dashboard">clique aqui</Link></p>
                <div className="container d-flex flex-row justify-content-center mt-5 gap-5 items">
                    <div className="card border-0 p-5 rounded shadow shadow-lg">
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
                    </div>
                    <div className="card border-0 shadow shadow-lg card-payment">
                    {
                            order != null ?
                            (
                                <>
                                <div className="text-secondary text-qr mt-3 ms-3">Código QR:</div>
                                <img src={"data:image/png;base64, " + order?.qrcodeBase64}
                                className="card-img-top mx-auto mt-3"
                                alt="" />
                                <div className="text-secondary text-qr mt-5 ms-3">Código de Pagamento</div>
                                <div className="border border-1 qrdata">
                                    <span className="qrcode-extralarge-text">
                                        {order?.qrcode}
                                    </span>
                                </div>
                                <div className="align-items-center mx-auto mt-4">
                                    <button 
                                    className="btn btn-primary"
                                    onClick={() => {
                                        navigator.clipboard.writeText(order.qrcode);
                                    }}
                                    >
                                        Copiar QRCode
                                    </button>
                                </div>
                                </>
                            )
                            :
                            <div className="spinner d-flex h-100">
                                <div className="spinner-border mx-auto my-auto" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}