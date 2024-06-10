import axios, { AxiosError, AxiosResponse } from "axios";

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

export const claimTapBalance = async (url: string, encrypt_id: string) => {
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

export const checkClaimBalance = async (encrypt_id: string) => {
    let url = "https://evp-user-service-cea2e4kz5q-uc.a.run.app/check-claimed-game-install-reward";

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
export const getTurboReward = async (encrypt_id: string) => {
    let url = "https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-turbo-boost-reward";

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


export const playAudio = (audio: HTMLAudioElement) => {
    audio.play();
}
export const stopAudio = (audio: HTMLAudioElement) => {
    audio.pause();
    audio.currentTime = 0;
}




