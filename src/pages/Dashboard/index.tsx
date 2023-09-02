import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { getServiceFromToken, ServiceProps } from "../../api/ServiceRequests";

import './styles.scss';

import logo from "./atlassian.svg";

import { FaDiscord } from "react-icons/fa";
import { FormControl, Input, InputAdornment } from "@mui/material"
import PixIcon from '@mui/icons-material/Pix';
import PaidIcon from '@mui/icons-material/Paid';
import SellIcon from '@mui/icons-material/Sell';
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { Product } from "../../components/product/Product";
import { Coupon } from "../../components/coupon/Coupon";

export function DashboardPage() {
    const header = useAuthHeader();
    const [service, setService] = useState<ServiceProps>();

    useEffect(() => {
        getServiceFromToken(header().substring(7)).then(service => {
            setService((prevService) => {
                return prevService = service;
            })
        }).catch(error => {
            console.log(error)
        });
    }, [])

    return(
        <div>
            <Navbar />
            <div className="d-flex content">
                <aside className="d-flex flex-column border border-bottom-0 border-top-0 align-items-center">
                    <img src={logo} alt="Logo da Apollo" className="w-50 mt-3 mx-5" />
                    <p className="text-secondary mt-5 fw-semibold">ID: JFLAJD-WLDASDA-WJZDJAW</p>
                    <FormControl>
                        <Input 
                            className="mt-3"
                            placeholder="ID do seu Servidor"
                            type="text"
                            startAdornment={
                                <InputAdornment position="start">
                                    <FaDiscord className="icon"/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <Input 
                            className="mt-5 text-center"
                            placeholder="Insira sua chave PIX"
                            type="text"
                            startAdornment={
                                <InputAdornment position="start">
                                    <PixIcon className="icon"/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <button className="btn btn-success px-5 mt-5">Salvar</button>
                </aside>
                <div className="d-flex flex-column w-100">
                    <div className="d-flex justify-content-around mt-5 w-100 data-cards">
                        <div className="card border-0 align-items-center data align-items-center justify-content-center">
                            <h1 className="text-primary fs-1 fw-bold ">15</h1>
                            <h1 className="text-secondary fs-5 fw-bold mx-5">Total de vendas</h1>
                            <SellIcon className="text-primary fs-1"/>
                        </div>
                        <div className="card border-0 data align-items-center justify-content-center">
                            <h1 className="text-primary fs-1 fw-bold mt-2">R$ 593,78</h1>
                            <h1 className="text-secondary fs-5 fw-bold mx-5">Total arrecadado</h1>
                            <PaidIcon className="text-primary fs-1" />
                        </div>
                    </div>
                    <div className="d-flex service-container">
                        <div className="container my-5 products">
                            <div className="d-flex flex-column align-items-center">
                                <h1 className="text-primary fw-bold">Produtos</h1>
                                <div className="container d-flex flex-column align-items-center">
                                    <div className="container card border-0 products-card p-3 mt-4 gap-2">
                                        {
                                            service?.products ? (
                                                service.products.map((product, index) => (
                                                    <Product key={index} name={product.name} price={product.price} description={product.description} />
                                                ))
                                            ) : (
                                                <h1 className="fs-6 text-secondary text-center">Você não tem nenhum produto registrado</h1>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <button className="btn btn-primary mt-3">Criar produto</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5 coupons">
                            <div className="d-flex flex-column align-items-center">
                                <h1 className="text-success fw-bold">Cupons</h1>
                                <div className="container d-flex flex-column align-items-center">
                                    <div className="container card border-0 products-card p-3 mt-4 gap-2">
                                        {
                                            service?.coupons ?
                                            service.coupons.map((coupon, index) => (
                                                <Coupon key={index} name={coupon.name} percentage={coupon.percentage} description={coupon.description} expirateAt={coupon.expirateAt} />
                                            ))
                                            :
                                            <h1 className="fs-6 text-secondary text-center">Você não tem nenhum cupom registrado</h1>
                                        }
                                    </div>
                                    <div>
                                        <button className="btn btn-success mt-3">Criar cupom</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}