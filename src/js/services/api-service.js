import { API_PATH } from '../../common/constants'
import { HttpService } from './http-service'



class ApiService extends HttpService {
    constructor() {
        super(API_PATH);
    }

    getServices() {
        return this.get('services');
    }

    createOrder(data) {
        return this.post('orders', data);
    }
}

export default new ApiService();