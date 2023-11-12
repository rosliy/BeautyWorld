import { TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import './order-form.css'

import React from 'react'
import { Controller, SubmitHandler, useForm, useFormState } from "react-hook-form"

import { orderFormValidation } from './validation'


interface ISignInForm {
    name: string,
    phone: string,
    masterId: number,
    serviceId: number,
    visitDate: string}

export const OrderForm: React.FC = () => {

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
                    render={({ field }) => (
                        <TextField 
                            label="Дата визита" 
                            size="small"
                            margin="normal"
                            className="employee-form__input"
                            fullWidth={ true }
                            onChange={(e) => field.onChange(e)}
                            value={ field.value }
                            error={ !!errors.visitDate?.message }
                            helperText={ errors.visitDate?.message }
                        />
                    )}
                />
                <Controller 
                    control={ control }
                    name="masterId"
                    render={({ field }) => (
                        <select >
                            <option value="field.value">Выберите услугу</option>
                            <option value="field.value">Услуга 1</option>
                            <option value="field.value">Услуга 2</option>
                        </select>
                        // <TextField 
                        //     label="Услуга" 
                        //     size="small"
                        //     margin="normal"
                        //     className="employee-form__input"
                        //     fullWidth={ true }
                        //     onChange={(e) => field.onChange(e)}
                        //     value={ field.value }
                        //     error={ !!errors.serviceId?.message }
                        //     helperText={ errors.serviceId?.message }
                        // />
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
