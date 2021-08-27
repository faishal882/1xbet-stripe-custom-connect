import axios from "axios";
// export const API_URL = "http://127.0.0.1:8000/";
export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-type": "application/json",
  },
});

export default class ApiService {
  static saveStripeInfo(data = {}) {
    return api.post("http://127.0.0.1:8000/payments/save-stripe-info/", data);
  }
}
