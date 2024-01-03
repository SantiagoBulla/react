import axios from "axios";

//default config for axios
export default axios.create({
    baseURL: 'https://randomuser.me/api/',
    responseType: 'json', //formato de datos
    timeout: 6000, //las peticiones fallan si no se resuelven en 6s
})