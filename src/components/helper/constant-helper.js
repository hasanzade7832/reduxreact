export const ApiConst = Object.freeze({
  webLogin: "api/Login/LoginO",
  getFile: "api/File/GetById",
  download: "api/File/Download",
  upload: "api/File/Upload",
  insert: "api/File/Insert",
  getAllCompany: "api/Company/GetAll",
  getEnum: "api/GetEnumByName",
  getAllMenu: "api/Menu/GetAll",
  getAllFirstPrugTemplate: "api/ProgramTemplate/GetAll",
  getAllProgramTemplate: "api/ProgramTemplate/GetAll",
  getAllWfTemplate: "api/WFTemplate/GetAll",
  getAllEntityType: "api/EntityType/GetAllComplete",
  getAllAfBtn: "api/AFBtn/GetAll",
  insertAfBtn: "api/AFBtn/Insert",
  changePassword: "api/User/ChangePasswordByAdmin",

  //setting
  getAllSetting: "api/Setting/GetAll",
  insertSetting: "api/Setting/Insert",
  updateSetting: "api/Setting/Update",
  deleteSetting: "api/Setting/Delete",

  //command
  getAllCommand: "api/Command/GetAll",
  insertCommand: "api/Command/Insert",
  updateCommand: "api/Command/Update",
  deleteCommand: "api/Command/Delete",

  //ribbon
  getAllMenu: "api/Menu/GetAll",
  insertMenu: "api/Menu/Insert",
  deleteMenu: "api/Menu/Delete",
  updateMenu: "api/Menu/Update",
  getMenuTabByMenuId: "api/MenuTab/GetByMenuId",
  insertMenuTab: "api/MenuTab/Insert",
  updateMenuTab: "api/MenuTab/Update",
  deleteMenuTab: "api/MenuTab/Delete",
  insertMenuTabByMenuId: "api/MenuTab/GetByMenuId",
  getMenuGroupByMenuTabId: "api/MenuGroup/GetAllByMenuTabID",
  insertMenuGroup: "api/MenuGroup/Insert",
  updateMenuGroup: "api/MenuGroup/Update",
  deleteMenuGroup: "api/MenuGroup/Delete",
  getMenuItemByMenuGroupID: "api/MenuItem/GetAllByMenuGroupId",
  insertMenuItem: "api/MenuItem/Insert",
  updateMenuItem: "api/MenuItem/Update",
  deleteMenuItem: "api/MenuItem/Delete",

  //user
  getAllUser: "api/User/GetAll",
  insertUser: "api/User/Insert",
  updateUser: "api/User/Update",
  deleteUser: "api/User/Delete",

  //roles
  getAllPost: "api/Post/GetAll",
  insertPost: "api/Post/Insert",
  updatePost: "api/Post/Update",
  deletePost: "api/Post/Delete",

  //assignment
  getAllPostForAssignment: "api/Post/GetAllForAdmin",
  getAllProject: "api/Project/GetAll",
});
