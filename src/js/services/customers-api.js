import { HttpService } from './http-service'

const API_PATH = 'http://localhost:3001/api';

class CustomersApi extends HttpService {
    constructor() {
        super(API_PATH);
    }

    getAll() {
        return this.get();
    }
}

export default new CustomersApi();

