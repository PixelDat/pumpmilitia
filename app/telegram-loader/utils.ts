import axios from "axios";
const Cookies = require("js-cookie");


export const authUser = async (tg_username: string, uniqueID: string) => {

    let url = "https://evp-login-signup-service-cea2e4kz5q-uc.a.run.app/auth-tg-user"

    let params = {
        tg_username,
        uniqueID,
    };
    try {
        const response = await axios.post(url, params);

        console.log(response)
        // Cookies.set("encrypt_id", `${response.data.encypted_session_id}`);
        return true;
    } catch (error: any) {
        console.log(error)
        // if (error.response) {
        //     return true;
        // }
    }

}