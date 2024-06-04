import axios from "axios";
const Cookies = require("js-cookie");


export const tasks = [
    {
        title: "Follow Telegram Channel",
        amount: "20,000",
    },
    {
        title: "Follow X",
        amount: "20,000",
    },
    {
        title: "Retweet X",
        amount: "20,000",
    },
    {
        title: "Follow Tiktok",
        amount: "20,000",
    },
    {
        title: "Subscribe Youtube",
        amount: "20,000",
    },
    {
        title: "Follow Instagram",
        amount: "20,000",
    },

]




export const getAllBalances = async (tg_username: string, uniqueID: string) => {

    let urlTelegram = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/auth-tg-user"
    let urlDiscord = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/auth-tg-user"
    let urlTwitter = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/auth-tg-user"


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