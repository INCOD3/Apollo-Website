import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { CouponProps, createCoupon, createProduct, editServiceDetails, getServiceFromToken, ProductProps, ServiceProps } from "../../api/ServiceRequests";

import './styles.scss';

import logo from "./atlassian.svg";

import { FaDiscord } from "react-icons/fa";
import { FormControl, Input, InputAdornment } from "@mui/material"
import PixIcon from '@mui/icons-material/Pix';
import PaidIcon from '@mui/icons-material/Paid';
import SellIcon from '@mui/icons-material/Sell';
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { Link } from "react-router-dom";
import { Product } from "../../components/product/Product";
import { Coupon } from "../../components/coupon/Coupon";
import { NumericFormat } from "react-number-format";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export function DashboardPage() {
    const header = useAuthHeader();
    const [service, setService] = useState<ServiceProps>();
    const [product, setProduct] = useState<ProductProps>({ id: 0, name: "", price: 1, description: "" });
    const [coupon, setCoupon] = useState<CouponProps>({ id: 0, name: "", percentage: 0, description: "", expirateAt: "0" });
    const [discordId, setDiscordId] = useState('');
    const [pix, setPix] = useState('');

    useEffect(() => {
        getServiceFromToken(header().substring(7)).then(service => {
            setService((prevService) => {
                if (service.discordId) setDiscordId(service.discordId)
                if (service.pix) setPix(service.pix)
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
                {
                    service != undefined ?
                        (
                            <><aside className="d-flex flex-column border border-bottom-0 border-top-0 align-items-center">
                                <img src={logo} alt="Logo da Apollo" className="w-50 mt-3 mx-5" />
                                <p className="text-secondary text-center mt-5 fw-semibold">ID: {service?.id}</p>
                                <FormControl>
                                    <Input
                                        className="mt-3"
                                        placeholder="ID do seu Servidor"
                                        value={discordId}
                                        type="text"
                                        onChange={(e) => setDiscordId(e.target.value)}
                                        startAdornment={<InputAdornment position="start">
                                            <FaDiscord className="icon" />
                                        </InputAdornment>} />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        className="mt-5 text-center"
                                        placeholder="Insira sua chave PIX"
                                        type="text"
                                        value={pix}
                                        onChange={(e) => setPix(e.target.value)}
                                        startAdornment={<InputAdornment position="start">
                                            <PixIcon className="icon" />
                                        </InputAdornment>} />
                                </FormControl>
                                <button
                                    className="btn btn-success px-5 mt-5"
                                    onClick={() => {
                                        editServiceDetails(header().substring(7), discordId, pix)
                                            .then(() => {
                                                toast.success("Os dados do serviço foram atualizados!")
                                            }).catch(() => {
                                                toast.error("Não foi possível salvar seus dados!")
                                            });
                                    }}
                                >Salvar</button>
                            </aside><div className="d-flex flex-column w-100">
                                    <div className="d-flex justify-content-around mt-5 w-100 data-cards">
                                        <div className="card border-0 shadow-lg align-items-center data align-items-center justify-content-center">
                                            <h1 className="text-primary fs-1 fw-bold ">15</h1>
                                            <h1 className="text-secondary fs-5 fw-bold mx-5">Total de vendas</h1>
                                            <SellIcon className="text-primary fs-1" />
                                        </div>
                                        <div className="card border-0 shadow-lg data align-items-center justify-content-center">
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
                                                    <div className="container card bg-transparent border-0 products-card p-3 mt-4 gap-4">
                                                        {service?.products && service?.products.length > 0 ? (
                                                            service.products.map((product, index) => (
                                                                <Product
                                                                    key={index}
                                                                    id={product.id}
                                                                    name={product.name}
                                                                    price={product.price}
                                                                    description={product.description}
                                                                    onDelete={() => {
                                                                        getServiceFromToken(header().substring(7))
                                                                            .then(service => {
                                                                                setService(service);
                                                                                toast.warn("Você acabou de deletar este produto!");   
                                                                            });
                                                                    }} />
                                                            ))
                                                        ) : (
                                                            <h1 className="fs-6 text-secondary text-center">Você não tem nenhum produto registrado</h1>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#productModal">Criar produto</button>
                                                        <div className="modal fade" id="productModal" tabIndex={-1}>
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h1 className="text-primary fw-bold fs-4">Criar um novo produto</h1>
                                                                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <label className="form-label text-secondary">Nome do seu produto:</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control text-secondary"
                                                                            placeholder="Ex: VIP de Minecraft"
                                                                            value={product.name}
                                                                            onChange={(e) => setProduct((prevState) => ({
                                                                                ...prevState,
                                                                                name: e.target.value
                                                                            }))} />
                                                                        <hr />
                                                                        <label className="form-label text-secondary">Descrição do produto:</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control text-secondary"
                                                                            placeholder="Ex: Uma breve descrição do VIP"
                                                                            value={product.description}
                                                                            onChange={(e) => setProduct((prevState) => (
                                                                                {
                                                                                    ...prevState,
                                                                                    description: e.target.value
                                                                                }
                                                                            ))} />
                                                                        <hr />
                                                                        <div className="d-flex justify-content-center">
                                                                            <NumericFormat
                                                                                prefix="R$"
                                                                                thousandSeparator="."
                                                                                decimalSeparator=","
                                                                                decimalScale={2}
                                                                                customInput={TextField}
                                                                                value={1}
                                                                                valueIsNumericString={true}
                                                                                allowNegative={false}
                                                                                onChange={(e) => {
                                                                                    let number = parseFloat(e.target.value.replace(",", ".").replace("R$", ""));
                                                                                    if (number > 999.99) {
                                                                                        setProduct((prevState) => ({
                                                                                            ...prevState,
                                                                                            price: 999.99
                                                                                        }));
                                                                                        return;
                                                                                    }
                                                                                    setProduct((prevState) => ({
                                                                                        ...prevState,
                                                                                        price: number
                                                                                    }));
                                                                                }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-center">
                                                                        <button
                                                                            className="btn btn-primary"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => {
                                                                                createProduct(header().substring(7), product)
                                                                                    .then(() => {
                                                                                        getServiceFromToken(header().substring(7))
                                                                                            .then(service => {
                                                                                                setService(service);
                                                                                                toast.success("Seu novo produto foi criado com êxito");
                                                                                            });
                                                                                    }).catch(() => {
                                                                                        toast.error("Não foi possível criar o seu produto!");
                                                                                    });
                                                                            }}
                                                                        >Criar produto</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container mt-5 coupons">
                                            <div className="d-flex flex-column align-items-center">
                                                <h1 className="text-success fw-bold">Cupons</h1>
                                                <div className="container d-flex flex-column align-items-center">
                                                    <div className="container card bg-transparent border-0 products-card p-3 mt-4 gap-4">
                                                        {service?.coupons && service.coupons.length > 0 ?
                                                            service.coupons.map((coupon, index) => (
                                                                <Coupon
                                                                    key={index}
                                                                    id={coupon.id}
                                                                    name={coupon.name}
                                                                    percentage={coupon.percentage}
                                                                    description={coupon.description}
                                                                    expirateAt={coupon.expirateAt}
                                                                    onDelete={() => {
                                                                        getServiceFromToken(header().substring(7))
                                                                            .then(service => {
                                                                                setService(service);
                                                                                toast.warn("Você acabou de deletar este cupom!");
                                                                            });
                                                                    }} />
                                                            ))
                                                            :
                                                            <h1 className="fs-6 text-secondary text-center">Você não tem nenhum cupom registrado</h1>}
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#couponModal">Criar cupom</button>
                                                        <div className="modal fade" id="couponModal" tabIndex={-1}>
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h1 className="text-success fw-bold fs-4">Criar um novo cupom</h1>
                                                                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <label className="form-label text-secondary">Nome do seu cupom:</label>
                                                                        <input
                                                                            type="text"
                                                                            maxLength={20}
                                                                            className="form-control text-secondary"
                                                                            placeholder="Ex: NATAL20"
                                                                            value={coupon.name}
                                                                            onChange={(e) => {
                                                                                let couponName = e.target.value.toUpperCase();

                                                                                setCoupon((prevState) => ({
                                                                                    ...prevState,
                                                                                    name: couponName
                                                                                }));
                                                                            }} />
                                                                        <hr />
                                                                        <label className="form-label text-secondary">Descrição do cupom:</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control text-secondary"
                                                                            maxLength={50}
                                                                            placeholder="Ex: Uma breve descrição do cupom"
                                                                            value={coupon.description}
                                                                            onChange={(e) => {
                                                                                let couponDescription = e.target.value;

                                                                                setCoupon((prevState) => ({
                                                                                    ...prevState,
                                                                                    description: couponDescription
                                                                                }));
                                                                            }} />
                                                                        <hr />
                                                                        <div className="d-flex align-items-end justify-content-between">
                                                                            <div className="d-flex flex-column">
                                                                                <label className="form-label text-secondary">Tempo de vida do cupom</label>
                                                                                <NumericFormat
                                                                                    prefix="Dia(s)  "
                                                                                    decimalScale={0}
                                                                                    customInput={TextField}
                                                                                    value={coupon.expirateAt}
                                                                                    valueIsNumericString={true}
                                                                                    allowNegative={false}
                                                                                    onChange={(e) => {
                                                                                        let number = parseInt(e.target.value.replace("Dia(s)  ", ""));
                                                                                        if (number > 999) {
                                                                                            setCoupon((prevState) => ({
                                                                                                ...prevState,
                                                                                                expirateAt: "0"
                                                                                            }));
                                                                                            return;
                                                                                        }
                                                                                        setCoupon((prevState) => ({
                                                                                            ...prevState,
                                                                                            expirateAt: e.target.value.replace("Dia(s)  ", "")
                                                                                        }));
                                                                                    }} />
                                                                            </div>
                                                                            <div className="d-flex flex-column">
                                                                                <label className="form-label text-secondary mt-3">Desconto do cupom</label>
                                                                                <NumericFormat
                                                                                    prefix="Desconto:  "
                                                                                    suffix="%"
                                                                                    decimalScale={0}
                                                                                    customInput={TextField}
                                                                                    value={coupon.percentage}
                                                                                    valueIsNumericString={true}
                                                                                    allowNegative={false}
                                                                                    onChange={(e) => {
                                                                                        let number = parseInt(e.target.value.replace("Desconto:  ", ""));
                                                                                        if (number > 99) {
                                                                                            setCoupon((prevState) => ({
                                                                                                ...prevState,
                                                                                                percentage: 99
                                                                                            }));
                                                                                            return;
                                                                                        }
                                                                                        setCoupon((prevState) => ({
                                                                                            ...prevState,
                                                                                            percentage: number
                                                                                        }));
                                                                                    }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-center">
                                                                        <button
                                                                            className="btn btn-success"
                                                                            data-bs-dismiss="modal"
                                                                            onClick={() => {
                                                                                createCoupon(header().substring(7), coupon)
                                                                                    .then(() => {
                                                                                        getServiceFromToken(header().substring(7))
                                                                                            .then(service => {
                                                                                                setService(service);
                                                                                                toast.success("Seu novo cupom foi criado com êxito!");
                                                                                            });
                                                                                    }).catch(() => {
                                                                                        toast.error("Não foi possível criar seu cupom!");
                                                                                    });
                                                                            }}
                                                                        >Criar produto</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></>
                        )
                    :
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                            <h1 className="text-secondary text-center fw-bold fs-4">VOCÊ NÃO TEM NENHUM SERVIÇO ATIVO</h1>
                            <p className="text-primary text-center mt-3">Para você poder acessar a dashboard, você precisa ter
                            pelo menos um serviço ativo nesta conta. Para adquirir um serviço, basta clicar no botão abaixo.
                            </p>
                            <Link 
                            to="/" 
                            className="btn btn-primary px-5 py-2 my-4"
                            onClick={() => {
                                setTimeout(() => {
                                    window.location.href = "#products";
                                }, 500);
                            }}
                            >Adquirir já</Link>
                        </div>
                    </div>
                }
                
            </div>
            <ToastContainer
                autoClose={5000}
                position={"bottom-right"}
                theme="light"
                draggable={false}
            />
            <Footer />
        </div>
    );
}