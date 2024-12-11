import React from 'react';
import  "./SignInForm.scss";
import Button from "../Button";
import FormInput from '../FormInput';




export default function SignIn() {
  return (
    <div>
        <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span style = {{fontSize:"18px"}}>Sign in with your email and password</span>
      <form >
            <FormInput label="Email" type="email" required  name='email' />
            <FormInput  label =  "Password" type="password" required   name='password' />
            <div className='buttons-container'>
               <Button type ="submit">Sign In</Button>
            <Button type="button" buttonType='inverted'> Google Sign In</Button>    
            </div>
           
      </form>
    </div>
    </div>
  )
}
