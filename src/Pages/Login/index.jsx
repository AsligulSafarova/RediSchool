import React from 'react'
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

export default function Login() {
  return (
    <div  style = {{display:"flex", justifyContent:"space-around", margin:"150px"}}>
      <SignIn/>
      <SignUp/>
      
    </div>
  )
}
