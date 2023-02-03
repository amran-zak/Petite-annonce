import api from "../server";
import axios from "axios";
import UserData from "../Types/User.types";
import LoginData from "../Types/Login.types";

class AuthService {
  signUp(data: UserData) {
    return api.post<Array<UserData>>("/auth/register", data);
  }

  login(data: LoginData) {
    return api.post<Array<LoginData>>("/auth/login", data);
  }
  getUser() {
    const token = JSON.parse(localStorage.getItem("user") || '{}');
    return api.get<any>("/users/me", {
      headers: {
        'Authorization': `Bearer ${token.acces_token}`
      },});
  }

  getCityByCode(code: number | FormDataEntryValue | null) {
    return axios.get<Array<any>>(
      `https://apicarto.ign.fr/api/codes-postaux/communes/${code}`
    );
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
