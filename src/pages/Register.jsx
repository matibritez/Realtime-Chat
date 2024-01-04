import React, { useState } from 'react';
import Add from '../img/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update the state variables with form values
    setDisplayName(e.target[0].value);
    setEmail(e.target[1].value);
    setPassword(e.target[2].value);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // If you need the user's displayName, you can set it after creating the user
      await updateProfile(auth.currentUser, { displayName });

      // Additional logic for handling the avatar file (upload, etc.) can be added here

      console.log('User registered successfully:', res);
    } catch (err) {
      console.error('Error registering user:', err.message);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Mati dev</span>
        <span className='logo'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an avatar</span>
          </label>
          <button type='submit'>Sign up</button>
          {err & <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
