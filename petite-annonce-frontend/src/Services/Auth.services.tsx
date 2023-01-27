import api from "../server";
import UserData from "../Types/User.types"
import LoginData from "../Types/Login.types"


class AuthService {
  signUp(data : UserData) {
    return api.post<Array<UserData>>("/auth/register", data);
  }

  login(data : LoginData) {
    return api.post<Array<LoginData>>("/auth/login", data);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || '{}');
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();