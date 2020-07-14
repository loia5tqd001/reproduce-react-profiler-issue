
import axiosAPI from './api/api';
import BaseService from './api/BaseService';


const SERVICE_NAME = '/ares';

class CatalogService extends BaseService {

    deleteCategory(body) {
        return axiosAPI.post(`${SERVICE_NAME}/categories/delete`,
            JSON.stringify(body),
            {
                cancelToken: this.source.token
            }
        );
    }

    createCategory(body) {
        return axiosAPI.post(`${SERVICE_NAME}/categories/create`,
            JSON.stringify(body),
            {
                cancelToken: this.source.token
            }
        );
    }

    updateCategory(body, categoryId) {
        return axiosAPI.post(`${SERVICE_NAME}/categories/update/${categoryId}`,
            JSON.stringify(body),
            {
                cancelToken: this.source.token
            }
        );
    }

    updateCategoryTree(body) {
        return axiosAPI.post(`${SERVICE_NAME}/categories/update`,
            JSON.stringify(body),
            {
                cancelToken: this.source.token
            }
        );
    }

    getAllCategories() {
        return axiosAPI.get(`${SERVICE_NAME}/categories`,
            {
                cancelToken: this.source.token
            }
        );
    }
}

export default CatalogService;