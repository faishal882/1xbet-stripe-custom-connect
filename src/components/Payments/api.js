import axios from "axios";
// export const API_URL = "http://127.0.0.1:8000/";
export const api = axios.create({
  baseURL: "https://betting-app-1xbet.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});

export default class ApiService {
  static saveStripeInfo(data = {}) {
    return api.post(
      "https://betting-app-1xbet.herokuapp.com/payments/save-stripe-info/",
      data
    );
  }
}
