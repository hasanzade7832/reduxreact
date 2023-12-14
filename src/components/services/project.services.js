import { ApiConst } from "../helper/constant-helper";
import httpClient from "../helper/httpClient";
class projectService {
  async webLogin(loginModel) {
    return await httpClient.post(ApiConst.webLogin, loginModel);
  }
  async getAllCompany() {
    return await httpClient.post(ApiConst.getAllCompany);
  }
  async getAllSetting() {
    return await httpClient.post(ApiConst.getAllSetting);
  }
  async getAllMenu() {
    return await httpClient.post(ApiConst.getAllMenu);
  }
  async getAllFirstPrugTemplate() {
    return await httpClient.post(ApiConst.getAllFirstPrugTemplate);
  }
}
export default new projectService();
