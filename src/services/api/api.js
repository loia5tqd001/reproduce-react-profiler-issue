import axios from "axios";
import * as Constant from '../../common/Constant';

let token = null; // get token from cookie or local storage

const axiosAPI = axios.create({
    baseURL: Constant.API.BASE_URL,
    headers: {
        ...(token && { 'Authorization': `Bearer ${token}` })
    }
});

//Performing multiple concurrent requests
// axios.all([getUserAccount(), getUserPermissions()])
//   .then(axios.spread(function (acct, perms) {
//     // Both requests are now complete
//   }));

export default axiosAPI;
