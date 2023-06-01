import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import { AppContext } from '../components/context';

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'Имя должно содержать минимум 2 символа').required('Это обязательное поле'),
  lastName: yup.string().min(2, 'Фамилия должна содержать минимум 2 символа').required('Это обязательное поле'),
  email: yup.string().email('Неверная почта').required('Укажите почту'),
  password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').max(32).required('Это обязательное поле'),
});

const PersonalInfoForm = () => {
  const {nextStep, setFormValues} = React.useContext(AppContext)

  const {handleSubmit, register, reset, formState} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = values => {
          setFormValues(values);
          nextStep('address')
          reset({firstName: '', lastName: '', password: '', email: ''})
  };

      // console.log(formState.errors)

  return (
    <div>
      <Box sx={{m: 1}}>
        <div style={{display: 'flex'}}>
        <TextField {...register('firstName')} helperText={formState.errors.firstName && formState.errors.firstName.message} error={!!formState.errors.firstName} name='firstName' label="Имя" variant='standard' fullWidth />
        <TextField {...register('lastName')} helperText={formState.errors.lastName && formState.errors.lastName.message} error={!!formState.errors.lastName} name='lastName' label="Фамилия" variant='standard' fullWidth />
        </div>
        <div style={{display: 'flex'}}>
        <TextField {...register('email', {pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Это неверная почта!'},})} helperText={formState.errors.email && formState.errors.email.message} error={!!formState.errors.email} name='email' label="Email" variant='standard' fullWidth />
        <TextField {...register('password')} helperText={formState.errors.password && formState.errors.password.message} error={!!formState.errors.password} name='password' type='password' label="Пароль" variant='standard' fullWidth />
        </div>
        <br />
        <div className='buttons' style={{display: 'flex'}}>
        <Button onClick={() => reset({firstName: '', lastName: '', password: '', email: ''})} variant='outlined' color='secondary'>Очистить</Button>
        <Button onClick={handleSubmit(onSubmit)} variant='contained' color='info'>Далее</Button>
        </div>
    </Box>
    </div>
  )
}

export default PersonalInfoForm
