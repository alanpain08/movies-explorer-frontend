import React, { useCallback, useEffect } from 'react';
import { mainApi } from '../utils/MainApi';

function useFormWithValidation() {
  const [values, setValues] = React.useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  useEffect(() => {
    mainApi.getUserInfo()
      .then((data) => {
        if (data) {
          setValues(data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const checkValidation = (name, value) => {
    if (name === 'name') {
      if (value.length < 2) {
        setErrors({ ...errors, [name]: 'Имя должно иметь более 2х символов' })
        setIsValid(false)
      }

    }

    if (name === 'email') {
      const REG_EX = /^[A-Z0-9._%+-]+@[A-Z0-9_-]+.+.[A-Z]{2,6}$/i;
      if (!REG_EX.test(value)) {
        setErrors({ ...errors, [name]: 'Неверный формат электронной почты. Пример верного формата: "user@mail.ru"' })
        setIsValid(false)
      }
    }

    if (name === 'password') {
      if (value.length < 8) {
        setErrors({ ...errors, [name]: 'Пароль должен быть не менее 8ми символов' })
        setIsValid(false)
      }
    }

    if (value === '') {
      setErrors({ ...errors, [name]: 'Заполните это поле' })
      setIsValid(false)
    }
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    //const value = target.value;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    checkValidation(name, value);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}

export default useFormWithValidation;
