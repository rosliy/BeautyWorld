import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import employeesApi from '../../common/api/EmployeesApi'
import { EmployeeDto } from '../../common/dto/EmployeeDto'
import { EmployeeCard } from '../../components/EmployeeCard'
import { EmployeeForm } from '../../components/EmployeeForm'



function EmployeesPage() {

    useEffect(() => {
        employeesApi.getAll()
    }, []);

    const [employees, setEmployees] = useState<EmployeeDto[]>([]);


    useEffect(() => {
        employeesApi.getAll().then(data => {
            setEmployees(data)
        }); 
    }, []);

    

    return (
        <>
            <Typography variant="h2" component="div" gutterBottom={ true }>
                Сотрудники
            </Typography> 

            <EmployeeForm />

            <div>
                {employees.map(employee => (
                    <EmployeeCard 
                    key={employee.id}
                    onClick={() => {employeesApi.deleteCustomer(employee.id)}}
                    fullName={employee.fullName} 
                    position={employee.position}
                    photo={employee.photo}
                    />
                ))}
            
                {!employees.length && 'Список пуст'}

            </div>

            <button onClick={() => employeesApi.getAll()}>Список сотрудников</button>
            {/* <button onClick={() => }>Добавить сотрудника</button> */}
            

        </>
    )
}

export default observer(EmployeesPage);