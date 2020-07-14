import axios from "axios";

export default class BaseService {

    constructor() {
        this.source = axios.CancelToken.source();
        this.headers = {
            "content-type": "application/json"
        }
    }

    cancel() {
        this.source.cancel('');
    }
}