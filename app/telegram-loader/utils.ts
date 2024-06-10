import axios from "axios";
const Cookies = require("js-cookie");


export const authUser = async (tg_username: string, uniqueID: string) => {

    let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/auth-tg-user"

    let params = {
        tg_username,
        uniqueID,
    };
    try {
        // const response = await axios.post(url, params);
        let resp = {
            data: {
                isAuthenticated: true,
                encypted_session_id: "eyJhbGciOiJIUzI1NiJ9.S2xteWh6ZUFEcGFwMENzOXVOQ05qNE52czFTMg.FqK2_dpSo4nJpD7BOJ46CbY0XtZsFPXQ6JuohVe-GgQ",
                role: "user"
            }
        }
        Cookies.set("encrypt_id", `${resp.data.encypted_session_id}`);
        return {
            status: true,
            data: resp.data,
        };
    } catch (error: any) {
        console.log(error)
        if (error.response) {
            return {
                status: false,
                data: [],
            };
        }
    }

}

export const createMiningAccount = async (encrypt_id: string) => {

    let url = "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/create-mining-account";

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `${encrypt_id}` }
        });

        console.log(response)

        return {
            status: true,
        };
    } catch (error: any) {
        console.log(error)
        if (error.response) {
            return {
                status: false,
            };
        }
    }

}