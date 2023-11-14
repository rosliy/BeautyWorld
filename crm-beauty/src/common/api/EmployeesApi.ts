
import { HttpService } from '../services/HttpService'

class EmployeesApi extends HttpService {
    constructor() {
        super('/staff');
    }

    getAll() {
        return this.get('');
    }

    deleteCustomer(id: number) {
        return this.delete(`${id}`)
    }



    // createCustomer() {
    //     return this.post('customers', )
    // }

    postCustomer(dataForm) {
        return this.post('', {
            ...dataForm
        })
    }
}

const employeesApi = new EmployeesApi();

export default employeesApi;