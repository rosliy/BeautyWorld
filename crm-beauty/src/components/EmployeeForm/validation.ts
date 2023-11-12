export const employeeFormValidation = {
    required: "Обязательно для заполнения",
    validate: (value: string) => {

        if(value.match(/[a-zA-Z]/)) {
            return 'Имя не может содержать латинские буквы'
        }
    }
}