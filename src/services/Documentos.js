import axios from 'axios';

import { API_URL } from "../config/config";


export  async function getDocumento () {
   return axios.get('http://192.160.35.172:4000/api/documentoher/porid/e03d4ad2-a238-405c-b79d-5ab6875b9f1a')
    .then(res => (res.data)
      
    )
    .catch(err => {
      console.log(err)
      
    })


} 
export async function getDocumentosActivos (){
  const URL = `${API_URL}/ubicacion/pacientes`
  console.log(URL)
  return axios.get(URL).then((res)=>(res.data))
}
