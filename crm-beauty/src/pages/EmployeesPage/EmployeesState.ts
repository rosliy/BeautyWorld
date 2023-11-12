import { makeAutoObservable } from "mobx"

import { EmployeeDto } from '../../common/dto/EmployeeDto'


class EmployeesState {

    employees: EmployeeDto[] = [];
    employee: EmployeeDto[] = [];

    constructor() {
        makeAutoObservable(this, undefined, { autoBind: true });
    }

    setEmployees(data: EmployeeDto[]) {
        this.employees = data;
    }

    removeEmployee(id: number) {
        this.employees = this.employees.filter(e => e.id !== id);
    }

    // createEmployee(employee: {userName: string}) {
    //     this.employees = this.employees.push(employee)
    // }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeesState();