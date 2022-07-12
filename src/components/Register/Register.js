import { useState} from 'react'
// import validator from 'validator';
import useInput from '../../hooks/useInput';

const isNotEmpty = value =>value.trim() !== '';
const isEmail = value => value.includes('@');
let formValid = false;

const Register = (props) => {

  const {
    value: nameValue,
    isValid: nameisValid,
    hasError:nameError,
    valueChangeHandler: nameChangeHandler,
    BlurHandler: nameBlurHandler,
    reset : restName

  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailisValid,
    hasError:emailError,
    valueChangeHandler: emailChangeHandler,
    BlurHandler: emailBlurHandler,
    reset : restEmail

  } = useInput(isEmail);
  const nameClasses = !nameError ? 'form-control' : 'form-control-invalid'
  const emailClasses = !emailError ? 'form-control' : 'form-control-invalid'
  
  if(nameisValid && emailisValid)
  {
    formValid = true
  }

  const submitHandler =(event)=>
  {
    event.preventDefault();
    if(!formValid)
    {
      return;
    }
    console.log(nameValue,emailValue)
    restName()
    restEmail()
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Name</label>
        <input
         type='text'
          id='name'
          onChange={nameChangeHandler} 
          onBlur={nameBlurHandler} 
          value={nameValue} />

        {nameError && <p className='error-text'>Please Enter a Name!</p>}
      </div>

      <div className={emailClasses}>
        <label htmlFor='email'>Email</label>
        
        <input type='text'
         id='email'
        onChange={emailChangeHandler} 
        onBlur={emailBlurHandler} 
        value={emailValue} />

        {emailError && <p className='error-text'>Please Enter a valid Email!</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );

};

export default Register;