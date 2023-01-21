import {API_URL} from "../../config"

export const getWord = async () => {
    const response = await fetch ('${API_URL}/game', {
        method: 'GET'
    })
}