import axios from "axios";

const api = "http://192.168.1.106:8080/dashboard/";

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
    onDelete?: () => void;
}

export interface CouponProps {
    id: number;
    name: string;
    percentage: number;
    description: string;
    expirateAt: string;
    onDelete?: () => void;
}

export interface ServiceProps {
    id: string;
    discordId?: string;
    pix?: string;
    products?: Array<ProductProps>;
    coupons?: Array<CouponProps>;
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

export async function createProduct(token: string, data: ProductProps): Promise<ProductProps> {
    const response = await axios.post(api + "createProduct", data, {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    const product: ProductProps = response.data;
    return product;
}

export function deleteProduct(token: string, productId: number, onSuccess: () => void) {
    axios({ 
        method: "delete",
        url: api + "deleteProduct",
        data: {
            id: productId
        },
        headers: {
            Authorization: "Bearer " + token
        }
     }).then(() => {
        onSuccess();
     }).catch(() => {
        // chamar um toast de erro
     });
}

export async function createCoupon(token: string, data: CouponProps): Promise<CouponProps> {
    const response = await axios.post(api + "createCoupon", data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    const coupon: CouponProps = response.data;
    return coupon; 
}

export function deleteCoupon(token: string, couponId: number, onSuccess: () => void) {
    axios({
        method: "delete",
        url: api + "deleteCoupon",
        data: {
            id: couponId
        },
        headers: {
            Authorization: "Bearer " + token
        }
    }).then(() => {
        onSuccess();
    }).catch((error) => {
        console.log(error)
    });
}

export async function editServiceDetails(token: string, discordId: string, pix: string): Promise<ServiceProps> {
    const response = await axios.put(api + "botDetails",
        {
            discordId: discordId,
            pix: pix
        },
        {
            headers: {
                Authorization: "Bearer " + token
            }
        }
    );
    const service: ServiceProps = response.data;
    return service;
}