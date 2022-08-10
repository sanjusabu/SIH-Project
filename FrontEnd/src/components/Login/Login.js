import useInput from "../../hooks/useInput";
import { useRequest } from "../../hooks/request-hook";
import ErrorModal from "../../Design/UIElements/ErrorModal";
import {AuthContext} from '../../context/authcontext' 
import { useContext } from "react";
const isEmail = value => value.includes('@');
const isPassword = value => value.trim().length >= 6;
let formValid = false
const Login = ()=>
{
  const auth = useContext(AuthContext)
  const {isError,sendRequest,clearError} = useRequest()

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


    const emailClasses = !emailError ? 'form-control' : 'form-control-invalid'
    const passwordClasses = !passwordError ? 'form-control' : 'form-control-invalid'

    if(emailisValid && passwordisValid )
  {
    formValid = true
  }
  if(!emailisValid || !passwordisValid )
  {
    formValid= false
  }

  const submitHandler =async(event)=>
  {
    event.preventDefault();
    if(!formValid)
    {
        return;
    }
    const response = await sendRequest(
      'http://localhost:5002/users/login',
      'POST',
      JSON.stringify({
        email: emailValue,
        password : passwordValue
      }),
      {
        "Content-Type" : "application/json"
      })
    auth.login(response.user.id)
    console.log(response)

    resetEmail()
    resetPassword()
  }
return(
  <>
  <ErrorModal error={isError} onClear ={clearError} />
  <form onSubmit={submitHandler}>
  <div>
    Login Form
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

  <label htmlFor='password'>Password</label>
  <input type='password'
   id='set_password'
  onChange={passwordChangeHandler} 
  onBlur={passwordBlurHandler} 
  value={passwordValue} />

  {passwordError && <p className='error-text'>Password should be atleast 6 characters long!</p>}

</div>

<button disabled={!formValid}>Submit</button>
</form>
</>
)
}

export default Login;