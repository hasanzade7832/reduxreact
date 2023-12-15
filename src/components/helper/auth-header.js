import Cookies from "vue-cookies";

export function authHeader() {
  const token = Cookies.get("token");
  // console.log("tokeeeen", token);
  if (token) {
    return "Bearer " + token;
  } else {
    return "";
  }
}
