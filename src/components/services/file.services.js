import { ApiConst } from "../helper/constant-helper";
import httpClient from "../helper/httpClient";
import httpClientFile from "../helper/httpClientFile";

class fileService {
  async getFile(model) {
    return await httpClientFile.post(ApiConst.getFile, model);
  }

  async download(model) {
    return await httpClientFile.post(ApiConst.download, model, {
      responseType: "arraybuffer",
    });
  }

  async uploadFile(file) {
    return await httpClientFile.post(ApiConst.upload, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async insert(model) {
    return await httpClient.post(ApiConst.insert, model);
  }

}
export default new fileService();
