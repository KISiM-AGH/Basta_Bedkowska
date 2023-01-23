import {API_URL} from "../../config"
import ky from "ky";
import {simpleWord} from "../../types/simpleWord";
import {simpleGame} from "../../types/simpleGame";
import {simpleLetter} from "../../types/simpleLetter";

export const getWord = async () => {
    return ky.get(`http://127.0.0.1:9000/api/game/random`).json<simpleWord>();
}

export const checkLetter = async (id: number, letter : simpleLetter) => {
    return ky.put(`http://127.0.0.1:9000/api/game/${id}`, {json:letter}).json<simpleGame>();
}