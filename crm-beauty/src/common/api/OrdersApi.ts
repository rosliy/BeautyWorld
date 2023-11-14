
import { HttpService } from '../services/HttpService'

interface orderDto {
    name: string;
    phone: string;
    masterId: number;
    serviceId: number;
    visitDate: string;
}


class OrdersApi extends HttpService {
    constructor() {
        super('/orders');
    }

    getAll() {
        return this.get('');
    }

    deleteOrder(id: number) {
        return this.delete(`${id}`)
    }

    createOrder(order: orderDto) {
        return this.post('', order)
    }
}

const ordersApi = new OrdersApi();

export default ordersApi;