
import axiosAPI from './api/api';
import BaseService from './api/BaseService';


const SERVICE_NAME = '/athena';

class ApprovalProcessService extends BaseService {
    
    getRequestProductHistories(statusRequest, offset, limit) {
        return axiosAPI.get(`${SERVICE_NAME}/supervisor-request-histories`,
            {
                params: {
                    status: statusRequest,
                    offset: offset,
                    limit: limit
                },
                cancelToken: this.source.token
            }
        );
    }

    confirmRequest(id, body) {
        return axiosAPI.post(`${SERVICE_NAME}/products/confirm/${id}`,
            JSON.stringify(body),
            {
                cancelToken: this.source.token,

            }
        );
    }

    confirmMultipleRequets(body, multiple) {
        return axiosAPI.post(`${SERVICE_NAME}/products/confirm`,
            JSON.stringify(body),
            {
                cancelToken: this.source.token,
                params: {
                    multiple: multiple
                },
            }
        );
    }

    getRequest(id) {
        return axiosAPI.get(`${SERVICE_NAME}/products/confirm/${id}`,
            {
                cancelToken: this.source.token,

            }
        );
    }
}

export default ApprovalProcessService;