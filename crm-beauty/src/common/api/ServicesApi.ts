
import { HttpService } from '../services/HttpService'

class ServicesApi extends HttpService {
    constructor() {
        super('/services');
    }

    getAll() {
        return this.get('');
    }

    deleteService(id: number) {
        return this.delete(`${id}`)
    }

    createService(dataForm) {
        return this.post('', {
            ...dataForm
        })
    }
}

const servicesApi = new ServicesApi();

export default servicesApi;