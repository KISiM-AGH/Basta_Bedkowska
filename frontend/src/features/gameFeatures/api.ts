import {API_URL} from "../../config"
import ky from "ky";
import {simpleWord} from "../../types/simpleWord";

export const getWord = async () => {
    return ky.get(`http://127.0.0.1:9000/api/word`).json<simpleWord>();
}