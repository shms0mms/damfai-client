export const OPTIONS = {
  required: "Это поле обязательно",
  email: {
    message: "Введите правильный email",
    value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  },
  password: {
    message: "Пароль должен содержать не менее 8 символов",
    value: 8
  }
}
