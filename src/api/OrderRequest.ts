import axios from "axios";

const api = "https://api.apollodiscord.com:8080/order/";

export interface ServiceOrder {
    id: string;
    email: string;
    serviceType: string;
    serviceStatus: string;
    qrcode: string;
    qrcodeBase64: string;
}

export async function createOrder(token: string, email: string, serviceType: string): Promise<ServiceOrder> {
    const response = await axios.post(api + "create", {
        email: email,
        serviceType: serviceType
    },
    {
        headers: {
            Authorization: "Bearer " + token
        }
    });
    const order: ServiceOrder = response.data;

    return order;
}