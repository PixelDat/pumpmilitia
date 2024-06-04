import axios from "axios";

export const getUserDetails = async (encrypt_id: string) => {

    let url = "https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details";
    try {
        const response = await axios.get(url, {
            headers: { Authorization: `${encrypt_id}` }
        });
        return {
            status: true,
            data: response.data
        }

    }
    catch (e) {
        console.log(e)
        return {
            status: false,
            data: []
        }
    }


}

export const createAccount = async (url: string, encrypt_id: string) => {

    try {
        const response = await axios.post(url, {}, {
            headers: { Authorization: `${encrypt_id}` }
        });
        return {
            status: true,
            data: response.data
        }

    }
    catch (e) {
        console.log(e)
        return {
            status: false,
            data: []
        }
    }


}

export const claimBalance = async (url: string, encrypt_id: string) => {

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `${encrypt_id}` }
        });
        return {
            status: true,
            data: response.data
        }

    }
    catch (e) {
        console.log(e)
        return {
            status: false,
            data: []
        }
    }


}
