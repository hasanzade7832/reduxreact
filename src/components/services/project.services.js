import { ApiConst } from "../helper/constant-helper";
import httpClient from "../helper/httpClient";
class projectService {
    async getAllCompany() {
        return await httpClient.post(ApiConst.getAllCompany);
    }
}
export default new projectService();
