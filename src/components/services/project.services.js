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
  async getEnum(data) {
    return await httpClient.post(ApiConst.getEnum, data);
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
    return await httpClient.post(ApiConst.insertAfBtn, data);
  }
  async changePassword(data) {
    return await httpClient.post(ApiConst.changePassword, data);
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
  async deleteSetting(data) {
    return await httpClient.post(ApiConst.deleteSetting, data);
  }

  async getAllMenu() {
    return await httpClient.post(ApiConst.getAllMenu);
  }
  async getAllFirstPrugTemplate() {
    return await httpClient.post(ApiConst.getAllFirstPrugTemplate);
  }

  //command
  async getAllCommand() {
    return await httpClient.post(ApiConst.getAllCommand);
  }
  async insertCommand(data) {
    return await httpClient.post(ApiConst.insertCommand, data);
  }
  async updateCommand(data) {
    return await httpClient.post(ApiConst.updateCommand, data);
  }
  async deleteCommand(data) {
    return await httpClient.post(ApiConst.deleteCommand, data);
  }

  //ribbon
  async getAllMenu() {
    return await httpClient.post(ApiConst.getAllMenu);
  }

  async insertMenu(data) {
    return await httpClient.post(ApiConst.insertMenu, data);
  }

  async deleteMenu(data) {
    return await httpClient.post(ApiConst.deleteMenu, data);
  }

  async updateMenu(data) {
    return await httpClient.post(ApiConst.updateMenu, data);
  }

  async getMenuTabByMenuId(data) {
    return await httpClient.post(ApiConst.getMenuTabByMenuId, data);
  }

  async insertMenuTab(data) {
    return await httpClient.post(ApiConst.insertMenuTab, data);
  }

  async updateMenuTab(data) {
    return await httpClient.post(ApiConst.updateMenuTab, data);
  }

  async deleteMenuTab(data) {
    return await httpClient.post(ApiConst.deleteMenuTab, data);
  }

  async getMenuGroupByMenuTabId(data) {
    return await httpClient.post(ApiConst.getMenuGroupByMenuTabId, data);
  }

  async insertMenuGroup(data) {
    return await httpClient.post(ApiConst.insertMenuGroup, data);
  }

  async updateMenuGroup(data) {
    return await httpClient.post(ApiConst.updateMenuGroup, data);
  }

  async deleteMenuGroup(data) {
    return await httpClient.post(ApiConst.deleteMenuGroup, data);
  }

  async getMenuItemByMenuGroupID(data) {
    return await httpClient.post(ApiConst.getMenuItemByMenuGroupID, data);
  }

  async insertMenuItem(data) {
    return await httpClient.post(ApiConst.insertMenuItem, data);
  }

  async updateMenuItem(data) {
    return await httpClient.post(ApiConst.updateMenuItem, data);
  }

  async deleteMenuItem(data) {
    return await httpClient.post(ApiConst.deleteMenuItem, data);
  }

  //user
  async getAllUser() {
    return await httpClient.post(ApiConst.getAllUser);
  }
  async insertUser(data) {
    return await httpClient.post(ApiConst.insertUser, data);
  }
  async updateUser(data) {
    return await httpClient.post(ApiConst.updateUser, data);
  }
  async deleteUser(data) {
    return await httpClient.post(ApiConst.deleteUser, data);
  }

  //roles
  async getAllPost() {
    return await httpClient.post(ApiConst.getAllPost);
  }
  async insertPost(data) {
    return await httpClient.post(ApiConst.insertPost, data);
  }
  async updatePost(data) {
    return await httpClient.post(ApiConst.updatePost, data);
  }
  async deletePost(data) {
    return await httpClient.post(ApiConst.deletePost, data);
  }
}

export default new projectService();
