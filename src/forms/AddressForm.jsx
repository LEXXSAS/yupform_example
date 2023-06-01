import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import { AppContext } from '../components/context';

const schema = yup.object().shape({
  city: yup.string().min(2, 'Название города должно содержать минимум 2 символа').required('Укажите город'),
  street: yup.string().min(2, 'Название улицы должно содержать минимум 2 символа').required('Укажите улицу'), 
  appartment: yup.string().min(1, 'Укажите номер квартиры').required('Укажите номер квартиры'), 
});

const AddressForm = () => {
  const {nextStep, setFormValues} = React.useContext(AppContext)
  const {handleSubmit, register, reset, formState} = useForm({
    defaultValues: {
      city: '',
      street: '',
      appartment: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = values => {
          setFormValues(prev => ({...prev, ...values}));
          nextStep('result')
          reset({city: '', street: '', appartment: ''})
  };

      // console.log(formState.errors)

  return (
    <div>
      <Box sx={{m: 1}}>
        <div>
        <TextField {...register('city')} helperText={formState.errors.city && formState.errors.city.message} error={!!formState.errors.city} name='city' label="Город" variant='standard' fullWidth />
        <TextField {...register('street')} helperText={formState.errors.street && formState.errors.street.message} error={!!formState.errors.street} name='street' label="Улица" variant='standard' fullWidth />
        <TextField type='number' {...register('appartment')} helperText={formState.errors.appartment && formState.errors.appartment.message} error={!!formState.errors.appartment} name='appartment' label="Номер квартиры / дома" variant='standard' fullWidth />
        </div>
        <br />
        <div className='buttons' style={{display: 'flex'}}>
        <Button onClick={() => reset({city: '', street: '', appartment: ''})} variant='contained' color='secondary'>Очистить</Button>
        <Button onClick={handleSubmit(onSubmit)} variant='contained' color='info'>Далее</Button>
        </div>
    </Box>
    </div>
  )
}

export default AddressForm
