import { API_URL } from "../config/config";
import axios from "axios";

export async function getArea(){
    const URL = `${API_URL}/area/`
    console.log(URL)
    return axios.get(URL).then((res)=>(res.data))
}