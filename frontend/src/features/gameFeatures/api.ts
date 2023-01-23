import {API_URL} from "../../config"
import ky from "ky";
import {simpleWord} from "../../types/simpleWord";
import {simpleGame} from "../../types/simpleGame";
import {simpleLetter} from "../../types/simpleLetter";

export const getWord = async () => {
    return ky.get(`http://127.0.0.1:9000/api/game/random`).json<simpleWord>();
}

export const checkLetter = async (letter : simpleLetter) => {
    return ky.put(`http://127.0.0.1:9000/api/game/update`, {json:letter}).json<simpleGame>();
}