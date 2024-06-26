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

export async function checkMiningBalance(item: any, encrypt: string) {
    let url = item.title.includes('X') ? "https://evp-follow-task-token-minner-service-cea2e4kz5q-uc.a.run.app/get-mining-balance" : item.title.includes('Telegram') ? "https://evp-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/get-mining-balance" : item.title.includes('Discord') ? "https://evp-discord-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/get-mining-balance" : ""

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `${encrypt}` }
        });
        return response.data.balance

    }
    catch (e) {
        return 0;

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


export const checkDownloadReward = async (encrypt_id: string) => {
    let url = "https://evp-referral-service-cea2e4kz5q-uc.a.run.app/check-game-download-reward";

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `${encrypt_id}` }
        });
        return {
            status: true,
            data: response.data
        }

    }
    catch (e: any) {
        console.log(e)
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return {
                status: 'server_error',
                data: []
            }
        } else if (e.request) {
            // The request was made but no response was received
            return {
                status: 'connection_error',
                data: []
            }
        } else {
            // Something happened in setting up the request that triggered an Error
            return {
                status: 'unknown_error',
                data: []
            }
        }
    }
}

export const checkMiningBalanceDash = async (encrypt_id: string) => {
    let url = "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/get-mining-balance";
    // let url = "http://localhost:8080/get-mining-balance";

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
            data: e
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
        console.error(e)
        return {
            status: false,
            data: []
        }
    }
}

export const checkTurboBoostOn = async (encrypt_id: string) => {
    // let url = "http://localhost:8080/check-turbo-boost-on";
    let url = "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/check-turbo-boost-on";

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
        console.error(e)
        return {
            status: false,
            data: []
        }
    }
}

export const checkRefill = async (encrypt_id: string) => {
    let url = "https://evp-telegram-bot-service-cea2e4kz5q-uc.a.run.app/check-refill";

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


export const claimBalance = async (url: string, encrypt_id: string) => {
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

export const showGif = (image: HTMLImageElement) => {
    image.style.display = 'block';
};

export const hideGif = (image: HTMLImageElement) => {
    image.style.display = 'none';
};


