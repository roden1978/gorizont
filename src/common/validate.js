export const validate = (values) => {
    const errors = {}
    const requiredFields = [
        'title', 'text', 'description', 'project', 'price','company',
        'companyName', 'companyAddress', 'companyPhone', 'companyEmail',
        'email', 'password','firstName', 'lastName', 'confPassword', 'password'
    ]
    const requiredPhones = ['companyPhone', 'phone01', 'phone02',
        'phone03', 'phone04', 'phone05', 'phone']

    const requiredMails = ['companyEmail', 'email']

    const requiredDigits = ['price']

    const reqPassword = ['password']
    const confPassword = ['confPassword']

    const minLengthPassword = ['userPassword', 'confPassword', 'password']

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Обязательное поле'
        }
    })

    requiredPhones.forEach(phone => {
        if (values[phone] &&
            !/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/i.test(values[phone])) {
            errors[phone] = 'Не верный формат телефона'
        }
    })

    requiredMails.forEach(mail => {
        if (values[mail] &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values[mail])) {
            errors[mail] = 'Не верный формат электронной почты'
        }
    })

    requiredDigits.forEach(digit => {
        if (values[digit] &&
            !/^\d+$/i.test(values[digit])) {
            errors[digit] = 'Только цифры'
        }
    })

   /* reqPassword.forEach(pass => {
        if(values[pass] !== values['confPassword'])
            errors[confPassword] = "Пароли не совпадают"
        /!*console.log(values['confPassword'])
        console.log(values[pass])*!/
    })*/

    if(values[reqPassword] !== values[confPassword])
        errors[confPassword] = "Пароли не совпадают"

    minLengthPassword.forEach(length =>{
        if(values[length] && values[length].length < 8)
            errors[length] = 'Длина пароля должная быть не менее 8 символов'
    })
    return errors
}

// [^0-9 ]+$