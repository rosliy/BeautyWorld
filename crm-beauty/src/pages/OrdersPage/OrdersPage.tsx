import { observer } from 'mobx-react-lite'
import { OrderForm } from '../../components/OrderForm'

import DataTable from '../../components/Table'




function OrdersPage() {

    return (
        <>
            
                <OrderForm />
           

            <DataTable />
        </>
    )
}

export default observer(OrdersPage);