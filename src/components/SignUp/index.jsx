import React  from 'react';
import FormInput from '../FormInput';
import  "./SignUp.scss";
import Button from "../Button";




export default function SignUp() {

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span style = {{fontSize:"18px"}}>Sign up with your email and password</span>
      <form >
            <FormInput  label= "Display Name " type="text" required name='displayName' />
            <FormInput label="Email" type="email" required  name='email' />
            <FormInput  label =  "Password" type="password" required   name='password' />
            <FormInput  label = "Confirm Password" type="password" required name='confirmPassword' />

            <Button>Sign Up</Button>
      </form>
    </div>
  )}
