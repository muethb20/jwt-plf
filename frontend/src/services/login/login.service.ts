import axios, {AxiosResponse} from "axios";


export const loginUser = async (email: string, password: string): Promise<string> => {

    const response: AxiosResponse = await axios.post
    ('http://localhost:3000/login',
        {
         email, password
        }, {
            withCredentials: false
        });

    return response.data.accessToken;
}