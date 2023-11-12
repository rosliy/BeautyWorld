import { observer } from 'mobx-react-lite'
import { OrderForm } from '../../components/OrderForm'





function OrdersPage() {

    // useEffect(() => {
    //     employeesApi.getAll()
    // }, []);

    // const [employees, setEmployees] = useState<EmployeeDto[]>([]);


    // useEffect(() => {
    //     employeesApi.getAll().then(data => {
    //         setEmployees(data)
    //     }); 
    // }, []);

    

    return (
        <>

            <OrderForm />
            {/* <Typography variant="h2" component="div" gutterBottom={ true }>
                Сотрудники
            </Typography> 

            

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

export default observer(OrdersPage);