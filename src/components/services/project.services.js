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
  async insertSetting(data) {
    return await httpClient.post(ApiConst.insertSetting, data);
  }
  async getAllMenu() {
    return await httpClient.post(ApiConst.getAllMenu);
  }
  async getAllFirstPrugTemplate() {
    return await httpClient.post(ApiConst.getAllFirstPrugTemplate);
  }

  async getAllCommand() {
    return await httpClient.post(ApiConst.getAllCommand);
  }
  async getAllProgramTemplate() {
    return await httpClient.post(ApiConst.getAllProgramTemplate);
  }
  async getAllWfTemplate() {
    return await httpClient.post(ApiConst.getAllWfTemplate);
  }
  async getAllEntityType() {
    return await httpClient.post(ApiConst.getAllEntityType);
  }
}
export default new projectService();
