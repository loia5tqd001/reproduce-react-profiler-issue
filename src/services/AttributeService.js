import axiosAPI from './api/api';
import BaseService from './api/BaseService';

const SERVICE_NAME = '/ares';

class AttributeService extends BaseService {
  updateAttribute(body, id) {
    return axiosAPI.post(`${SERVICE_NAME}/attributes/update/${id}`, JSON.stringify(body), {
      cancelToken: this.source.token,
    });
  }

  createAttribute(body) {
    return axiosAPI.post(`${SERVICE_NAME}/attributes/create`, JSON.stringify(body), {
      cancelToken: this.source.token,
    });
  }

  getAllAttributes() {
    return axiosAPI.get(`${SERVICE_NAME}/attributes`, {
      cancelToken: this.source.token,
    });
  }
}

export default AttributeService;
