export const validate = (values) => {
    const errors = {}
    const requiredFields = [
        'title', 'text', 'description', 'project', 'price','company',
        'companyName', 'companyAddress', 'companyPhone', 'companyEmail'
    ]
    const requiredPhones = ['companyPhone', 'phone01', 'phone02',
        'phone03', 'phone04', 'phone05', 'phone']

    const requiredMails = ['companyEmail', 'email']

    const requiredDigits = ['price']

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
    return errors
}

// [^0-9 ]+$