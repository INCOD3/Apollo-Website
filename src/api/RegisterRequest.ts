import axios from "axios";

const api = 'http://192.168.1.150:8080/register';

interface RegisterDataProps {
    email: string;
    password: string;
}

export function registerAccount(data: RegisterDataProps): Promise<Response> {
    return axios.post(api, data)
}