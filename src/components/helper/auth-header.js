export function authHeader() {
    let user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.MyUser.TTKK) {
      return "Bearer " + user.MyUser.TTKK + ":" + user.MyUser.Username;
    } else {
      return "";
    }
  }
  