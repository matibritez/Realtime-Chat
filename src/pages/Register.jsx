import React from 'react';
import Add from '../img/addAvatar.png'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

const Register = () => {

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[0].value;
    const file = e.target[3].files[0];
  
   try{ 
  const res =  await createUserWithEmailAndPassword(auth, email, password)
   
  }catch(err){

  }
}
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Mati dev</span>
          <span className='logo'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'></input>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
                <input style={{display:"none"}} type='file' id='file'></input>
                <label htmlFor='file'>
                  <img src={Add} alt=''/>
                  <span>Add an avatar</span>
                </label>
                <button>Sing up </button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
export default Register