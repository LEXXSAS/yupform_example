import React from 'react'
import PersonalInfoForm from './forms/PersonalInfoForm'
import AddressForm from './forms/AddressForm';
import Result from './forms/Result';
import {Route, Routes, useNavigate} from 'react-router-dom'
import { AppContext } from './components/context';
import Test from './forms/test';


function App() {
  const [formValues, setFormValues] = React.useState({})
  const navigate = useNavigate();
  const nextStep = (name) => {
    navigate(name)
  }

  console.log('Главная форма', formValues)

  return (
    <div className='App'>
      <AppContext.Provider value={{nextStep, setFormValues, formValues}}>
      <Routes>
      <Route path='/' element={<PersonalInfoForm /> } />
      <Route path='/address' element={<AddressForm /> } />
      <Route path='/result' element={<Result /> } />
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
