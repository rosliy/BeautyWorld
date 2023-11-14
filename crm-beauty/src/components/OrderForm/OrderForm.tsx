import { InputLabel, Select, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'
import { Controller, SubmitHandler, useForm, useFormState } from "react-hook-form"
import './order-form.css'

import servicesApi from '../../common/api/ServicesApi'
import { orderFormValidation } from './validation'

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { useEffect, useState } from 'react'
import employeesApi from '../../common/api/EmployeesApi'
import { EmployeeDto } from '../../common/dto/EmployeeDto'
import { ServicesDto } from '../../common/dto/ServicesDto'



interface ISignInForm {
    name: string,
    phone: string,
    masterId: number,
    serviceId: number,
    visitDate: string}


    

export const OrderForm: React.FC = () => {

    const [originalReleaseDate, setOriginalReleaseDate] = useState(null);

    const { handleSubmit, control } = useForm<ISignInForm>({ 
        defaultValues: { 
            name: "",
            phone: "",
            masterId: 0,
            serviceId: 0,
            visitDate: "",
        } });
    const { errors } = useFormState({
        control
    });

    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        
        console.log(data)
        
    }

    const [service, setService] = useState<number>();
    const [employee, setEmployee] = useState<string>();

    const serviceHandleChange = (event: SelectChangeEvent) => {
        setService(event.target.value as unknown as number);
    };
    const employeeHandleChange = (event: SelectChangeEvent) => {
        setEmployee(event.target.value as string);
    };

    const getServices = () => {
        const Services = servicesApi.getAll();
        return Services
    }

    useEffect(() => {
        servicesApi.getAll()
    }, []);

    const [services, setServices] = useState<ServicesDto[]>([]);

    useEffect(() => {
        servicesApi.getAll().then(data => {
            setServices(data)
        }); 
    }, []);

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
        <div className='order-form'>
            <Typography  variant="h5" component="div" gutterBottom={ true }>
                Добавить заявку
            </Typography>

            <form className='order-form__form' onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                    control={ control }
                    name="name"
                    rules={ orderFormValidation }
                    render={({ field }) => (
                        <TextField 
                            label="Имя" 
                            size="small"
                            margin="normal"
                            className="employee-form__input"
                            fullWidth={ true }
                            onChange={(e) => field.onChange(e)}
                            onBlur={ field.onBlur }
                            value={ field.value }
                            error={ !!errors.name?.message }
                            helperText={ errors.name?.message }
                        />
                    )}
                />
                <Controller 
                    control={ control }
                    name="phone"
                    rules={ orderFormValidation }
                    render={({ field }) => (
                        <TextField 
                            label="Телефон" 
                            size="small"
                            margin="normal"
                            className="employee-form__input"
                            fullWidth={ true }
                            onChange={(e) => field.onChange(e)}
                            value={ field.value }
                            error={ !!errors.phone?.message }
                            helperText={ errors.phone?.message }
                        />
                    )}
                />
                <Controller 
                    control={ control }
                    name="visitDate"

                    render={({
                        field: {onChange, value},
                        fieldState: { error }
                    }) => (
                        <FormControl fullWidth={ true } sx={{ marginTop: 2, marginBottom: 2, minWidth: 120 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" >
                                <DateTimePicker 
                                    label="Data"
                                    value={value}  
                                    onChange={event => onChange(event)}
                                    slotProps={{ textField: { error: !!error, helperText: error?.message  } }}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    )}
                />
                <Controller 
                    control={ control }
                    name="serviceId"
                    render={({ field }) => (
                        <FormControl fullWidth={ true } sx={{ marginTop: 2, marginBottom: 2, minWidth: 120 }}>
                            <InputLabel id="serviceLabel">Услуга</InputLabel>
                            <Select
                                label="Услуга"
                                labelId="serviceLabel"
                                {...field}
                            >
                                {services.map(service => (
                                    <MenuItem key={service.id} value={service.id}>{service.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller 
                    control={ control }
                    name="masterId"
                    render={({ field }) => (
                        <FormControl fullWidth={ true } sx={{ marginTop: 2, marginBottom: 2, minWidth: 120 }}>
                            <InputLabel id="masterLabel">Мастер</InputLabel>
                            <Select
                                label="Мастер"
                                labelId="masterLabel"
                                {...field}
                            >
                                {employees.map(employee => (
                                    <MenuItem key={employee.id} value={employee.id}>{employee.fullName}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                

                <Button 
                    type='submit'
                    variant='contained'
                    fullWidth={ true }
                    disableElevation= { true }
                    sx={{
                        marginTop: 2
                    }}
                >
                    Добавить
                </Button>


            </form>
        </div>
    )
}
