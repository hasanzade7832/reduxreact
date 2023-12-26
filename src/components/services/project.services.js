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
  async getAllAfBtn() {
    return await httpClient.post(ApiConst.getAllAfBtn);
  }
  async insertAfBtn(data) {
    return await httpClient.post(ApiConst.insertAfBtn,data);
  }

}

// const handleApi = async (api, bool) => {
//   setTimeout(() => {
    
//   }, 1000);

//   setInterval
//   try {
//     const myApi = await api
//     return myApi.data
//   } catch (e) {
//     throw e
//   }
// }
export default new projectService();
