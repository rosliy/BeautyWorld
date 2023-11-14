import { HttpService } from './http-service'


class CustomersApi extends HttpService {
    constructor() {
        super('costumers');
    }

    getAll() {
        return this.get();
    }
}

export default new CustomersApi();

