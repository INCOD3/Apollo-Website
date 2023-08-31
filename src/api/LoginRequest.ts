import axios from "axios";

const api = "http://192.168.1.106:8080/login";

export interface LoginResponse {
    data: {
        token: string;
    };
    status: number;
}

interface LoginDataProps {
    email: string;
    password: string;
}

export function loginAccount(data: LoginDataProps): Promise<LoginResponse> {
    return axios.post(api, data);
}