export interface EmployeeDto {
    id: number;
    firstName: string;
    patronymic: string;
    surName: string;
    fullName: string;
    position: string;
    startWorkDate: string;
    photo: string;
}

export interface CreateEmployeeDto extends Omit<EmployeeDto, 'id'> {}