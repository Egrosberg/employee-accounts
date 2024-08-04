// signin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from 'aws-amplify/auth';
export function SignIn() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('signin');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signIn(username, password);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      setSuccessMessage('Sign-up successful! Please check your email for verification.');
      setTimeout(() => navigate('/signin'), 2000);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="container mt-4">
      <h2>{formType === 'signin' ? 'Sign In' : 'Create Account'}</h2>
      <form onSubmit={formType === 'signin' ? handleSignIn : handleSignUp}>
        {formType === 'signup' && (
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              placeholder="Enter your username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {formType === 'signin' ? 'Sign In' : 'Create Account'}
        </button>
      </form>
      <p className="mt-3">
        {formType === 'signin' ? 'Don\'t have an account?' : 'Already have an account?'}
        <button 
          type="button" 
          className="btn btn-link" 
          onClick={() => setFormType(formType === 'signin' ? 'signup' : 'signin')}
        >
          {formType === 'signin' ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
      {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
      {successMessage && <p className="text-success mt-3">{successMessage}</p>}
    </div>
  );
}
export default SignIn;