import axios from "axios";

const URL = "https://localhost:4000";

const createHeaders= (token) => {
    return {
        headers: {'Authorization': `Bearer ${token}`}
    }
} 

export function postDashboard(body){
  const promise = axios.post(`${URL}/dashboard`, body);
  return promise;
}
//
