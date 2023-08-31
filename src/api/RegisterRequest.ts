import axios from "axios";

const api = 'http://localhost:8080/register';

interface RegisterDataProps {
    email: string;
    password: string;
}

export function registerAccount(data: RegisterDataProps): Promise<Response> {
    return axios.post(api, data)
}