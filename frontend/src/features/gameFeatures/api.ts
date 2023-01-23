import {API_URL} from "../../config"
import ky from "ky";
import {simpleWord} from "../../types/simpleWord";
import {simpleGame} from "../../types/simpleGame";

export const getWord = async () => {
    return ky.get(`http://127.0.0.1:9000/api/word`).json<simpleWord[]>();
}

export const checkLetter = async (letter : string) => {
    return ky.put(`http://127.0.0.1:9000/api/game`, {json:letter}).json<simpleGame>();
}