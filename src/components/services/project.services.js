import { ApiConst } from "../helper/constant-helper";
import httpClient from "../helper/httpClient";
class projectService {
  async webLogin(loginModel) {
    return await httpClient.post(ApiConst.webLogin, loginModel);
  }
  async getFile(gid) {
    return await httpClient.post(ApiConst.getFile, { gid });
  }
  async download(data) {
    return await httpClient.post(ApiConst.download, data);
  }
  async upload() {
    return await httpClient.post(ApiConst.upload);
  }
  async insert(gid) {
    return await httpClient.post(ApiConst.insert, { gid });
  }
  async getAllCompany() {
    return await httpClient.post(ApiConst.getAllCompany);
  }

  //setting
  async getAllSetting() {
    return await httpClient.post(ApiConst.getAllSetting);
  }
  async insertSetting(data) {
    return await httpClient.post(ApiConst.insertSetting, data);
  }
  async updateSetting(data) {
    return await httpClient.post(ApiConst.updateSetting, data);
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


export default new projectService();
