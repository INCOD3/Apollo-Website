import axios from "axios";

const api = "http://192.168.1.106:8080/dashboard/";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface CouponProps {
    id: number;
    name: string;
    percentage: number;
    description: string;
    expirateAt: string;
}

export interface ServiceProps {
    id: string;
    owner: string;
    discordId?: string;
    pix?: string;
    products?: Array<ProductProps>;
    coupons?: Array<CouponProps>;
    createAt: string;
    expirateAt?: string;
}

export async function getServiceFromToken(token: string): Promise<ServiceProps> {

    const response = await axios.get(api + "detailsService", {
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    const service: ServiceProps = response.data;
    return service;
}