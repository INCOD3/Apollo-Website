import axios from "axios";

const api = "http://api.apollodiscord.com:8080/login";

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