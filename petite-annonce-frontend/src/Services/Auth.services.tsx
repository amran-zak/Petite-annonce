import http from "../server";
import UserData from "../Types/User.types"
import LoginData from "../Types/Login.types"


class AuthService {
  signUp(data : UserData) {
    return http.post<Array<UserData>>("/users/signup", data);
  }

  login(data : LoginData) {
    return http.post<Array<LoginData>>("/users/login", data);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || "");
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();