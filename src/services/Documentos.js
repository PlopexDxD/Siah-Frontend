import axios from 'axios';
export  async function getDocumento () {
   return axios.get('http://192.160.35.172:4000/api/documentoher/porid/e03d4ad2-a238-405c-b79d-5ab6875b9f1a')
    .then(res => (res.data)
      
    )
    .catch(err => {
      console.log(err)
      
    })

} 