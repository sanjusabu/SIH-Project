// import { useState,useEffect} from 'react'
// import validator from 'validator';
import useInput from '../../hooks/useInput';

const isNotEmpty = value =>value.trim() !== '';
const isEmail = value => value.includes('@');
const isPassword = value => value.trim().length >= 3;
console.log(isPassword.value)

let formValid = false;
// let conPass = true;

const Register = (props) => {

  // const [enteredConfirmedPassword,setConfirmPassword] = useState('');
  // const [isTouched,setisTouched] = useState(false)

  const {
    value: nameValue,
    isValid: nameisValid,
    hasError:nameError,
    valueChangeHandler: nameChangeHandler,
    BlurHandler: nameBlurHandler,
    reset : resetName

  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailisValid,
    hasError:emailError,
    valueChangeHandler: emailChangeHandler,
    BlurHandler: emailBlurHandler,
    reset : resetEmail

  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordisValid,
    hasError:passwordError,
    valueChangeHandler: passwordChangeHandler,
    BlurHandler: passwordBlurHandler,
    reset : resetPassword

  } = useInput(isPassword);
 
//  const confirmPasswordChangeHandler=(e)=>
// {
//     setConfirmPassword(e.target.value)
// }

// const confirmPasswordBlurHandler = ()=>
//   {
//     setisTouched(true)
//   }

// useEffect(()=>{
  
//     if(enteredConfirmedPassword === passwordValue)
//     {
//       conPass= true
//       formValid = false
//     }
//     if(enteredConfirmedPassword !== passwordValue)
//     {
//       conPass= false
//     }

// },[enteredConfirmedPassword,passwordValue])

  const nameClasses = !nameError ? 'form-control' : 'form-control-invalid'
  const emailClasses = !emailError ? 'form-control' : 'form-control-invalid'
  const passwordClasses = !passwordError ? 'form-control' : 'form-control-invalid'
  // const confirmPassClasses = conPass ? 'form-control' : 'form-control-invalid'


  if(nameisValid && emailisValid && passwordisValid)
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
    resetName()
    resetEmail()
    resetPassword()
    // setConfirmPassword('')
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

      <div className={passwordClasses}>
        <label htmlFor='password'>Set Password</label>
        
        <input type='password'
         id='set_password'
        onChange={passwordChangeHandler} 
        onBlur={passwordBlurHandler} 
        value={passwordValue} />

        {passwordError && <p className='error-text'>Password should be atleast 3 characters long!</p>}
      </div>

      {/* <div className={passwordClasses}>
        <label htmlFor='password'>Confirm Password</label>
        
        <input type='password'
         id='confirm_password'
        onChange={confirmPasswordChangeHandler} 
        onBlur={confirmPasswordBlurHandler} 
        value={enteredConfirmedPassword} />

        {isTouched && !conPass && <p className='error-text'>Passwords are not the same!</p>}
      </div> */}


      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );

};

export default Register;