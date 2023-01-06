/**
 * Axios - requisições HTTP
 * npm install axios --save
 * Arquivo vinculado ao Axios
 */
import axios from "axios";

//https://viacep.com.br/ws/79003241/json
const api = axios.create({
  baseURL: 'https://viacep.com.br/ws'
});

export default api;