import axios from "axios";

export const api = axios.create ({
    
    baseURL: 'https://367e-179-108-104-153.sa.ngrok.io',
})

export const createSession = async (username, 
  password) => {
    return api.post('/oauth/token', {
      client_id:"1",
      client_secret:"ftSFyxxXvgTASm9WdDbvchTt4VQBqQ86ogbEP9An", 
      username, 
      password,
      grant_type:"client_credentials" });
}
/*
export const dataUser = async (name) => {
  return api.get('/api/users', {
      name: "",

  });
}
*/








/*
import axios from "axios";


export const api = axios.create({
  baseURL: "https://925c-179-108-104-153.sa.ngrok.io",
  headers: {
    Accept: "application/json", 
    "ngrok-skip-browser-warning": null,
  }
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "0S2pNlzwfOrSHo7Pzqe7Vkwsbk8iRl78t8vGOiff", 
      grant_type: "password"
},);}
*/