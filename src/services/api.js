import axios from "axios";

export const api = axios.create ({
    
    baseURL: 'https://611c-179-108-104-153.sa.ngrok.io',
})

export const createSession = async (username, 
  password) => {
    return api.post('/oauth/token', {
      client_id:"2",
      client_secret:"eqVNxzUCnKwcBIIe1vz6BFbPfVm1DXmJbW6xOoZZ", 
      username, 
      password,
      grant_type:"client_credentials" });
}











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