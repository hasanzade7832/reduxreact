import { ApiConst } from "../helper/constant-helper";
import httpClient from "../helper/httpClient";
class projectService {
    async webLogin(loginModel) {
        return await httpClient.post(ApiConst.webLogin, loginModel);
      }
    async getAllCompany() {
        return await httpClient.post(ApiConst.getAllCompany);
    }
}
export default new projectService();
