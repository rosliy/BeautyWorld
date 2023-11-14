import { TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import './employee-form.css'

import React from 'react'
import { Controller, SubmitHandler, useForm, useFormState } from "react-hook-form"
import employeesApi from '../../common/api/EmployeesApi'
import { employeeFormValidation } from './validation'


interface ISignInForm {
    firstName: string,
    patronymic: string,
    surName: string,
    position: string
}

export const EmployeeForm: React.FC = () => {

    const { handleSubmit, control } = useForm<ISignInForm>({ 
        defaultValues: { 
            firstName: "",
            patronymic: "",
            surName: "",
            position: ""
        } });
    const { errors } = useFormState({
        control
    });

    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        
        employeesApi.postCustomer(data)
        
    }


    return (
        <div className='employee-form'>
            <Typography  variant="h5" component="div" gutterBottom={ true }>
                Добавить нового сотрудника
            </Typography>

            <form className='employee-form__form' onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                    control={ control }
                    name="firstName"
                    rules={ employeeFormValidation }
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
                            error={ !!errors.firstName?.message }
                            helperText={ errors.firstName?.message }
                        />
                    )}
                />
                <Controller 
                    control={ control }
                    name="patronymic"
                    rules={ employeeFormValidation }
                    render={({ field }) => (
                        <TextField 
                            label="Отчество" 
                            size="small"
                            margin="normal"
                            className="employee-form__input"
                            fullWidth={ true }
                            onChange={(e) => field.onChange(e)}
                            value={ field.value }
                            error={ !!errors.patronymic?.message }
                            helperText={ errors.patronymic?.message }
                        />
                    )}
                />
                <Controller 
                    control={ control }
                    name="surName"
                    rules={ employeeFormValidation }
                    render={({ field }) => (
                        <TextField 
                            label="Фамилия" 
                            size="small"
                            margin="normal"
                            className="employee-form__input"
                            fullWidth={ true }
                            onChange={(e) => field.onChange(e)}
                            value={ field.value }
                            error={ !!errors.surName?.message }
                            helperText={ errors.surName?.message }
                        />
                    )}
                />
                <Controller 
                    control={ control }
                    name="position"
                    rules={ employeeFormValidation }
                    render={({ field }) => (
                        <TextField 
                            label="Должность" 
                            size="small"
                            margin="normal"
                            className="employee-form__input"
                            fullWidth={ true }
                            onChange={(e) => field.onChange(e)}
                            value={ field.value }
                            error={ !!errors.position?.message }
                            helperText={ errors.position?.message }
                        />
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
