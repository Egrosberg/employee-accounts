
// // // export default SignIn;
// // import { Form} from 'react-bootstrap';
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// // import { Auth } from 'aws-amplify/auth'; // Correct import

// // // import { Auth } from 'aws-amplify'; // Import Auth from aws-amplify
// // // import { Auth } from '@aws-amplify/auth';

// // export function SignIn() {
// //   const navigate = useNavigate();
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');

// //   const handleSignIn = async (event) => {
// //     event.preventDefault();
// //     try {
// //       // Sign in using AWS Cognito
// //       await Auth.signIn(username || email, password); // Use username or email for sign-in

// //       // Redirect to homepage after successful sign-in
// //       navigate.push('/');
// //     } catch (error) {
// //       // Handle authentication errors
// //       setErrorMessage(error.message);
// //     }
// //   };

// //   return (

// //     <>

// // <div className="container mt-4">
// //       <h2>Sign In</h2>
// //       <form onSubmit={handleSignIn}>
// //         <div className="mb-3">
// //           <label htmlFor="username" className="form-label">Username</label>
// //           <input 
// //             type="text" 
// //             className="form-control" 
// //             id="username" 
// //             placeholder="Enter your username" 
// //             value={username} 
// //             onChange={(e) => setUsername(e.target.value)} 
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label">Email</label>
// //           <input 
// //             type="email" 
// //             className="form-control" 
// //             id="email" 
// //             placeholder="Enter your email" 
// //             value={email} 
// //             onChange={(e) => setEmail(e.target.value)} 
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="password" className="form-label">Password</label>
// //           <input 
// //             type="password" 
// //             className="form-control" 
// //             id="password" 
// //             placeholder="Enter your password" 
// //             value={password} 
// //             onChange={(e) => setPassword(e.target.value)} 
// //           />
// //         </div>
// //         <button type="submit" className="btn btn-primary">Sign In</button>
// //       </form>
// //       {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
// //     </div>

// //       <Form.Label htmlFor="inputPassword5">Password</Form.Label>
// //       <Form.Control
// //         type="password"
// //         id="inputPassword5"
// //         aria-describedby="passwordHelpBlock"
// //       />
// //       <Form.Text id="passwordHelpBlock" muted>
// //         Your password must be 8-20 characters long, contain letters and numbers,
// //         and must not contain spaces, special characters, or emoji.
// //       </Form.Text>
// //     </>

    
// //   );
// // }

// // export default SignIn;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// import { Auth } from 'aws-amplify'; // Import Auth from aws-amplify

// export function SignIn() {
//   const navigate = useNavigate();
//   const [formType, setFormType] = useState('signin'); // State to toggle between 'signin' and 'signup'
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     try {
//       await Auth.signIn(username || email, password); // Use username or email for sign-in
//       navigate('/'); // Redirect to homepage after successful sign-in
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     try {
//       await Auth.signUp({
//         username,
//         password,
//         attributes: {
//           email
//         }
//       });
//       setSuccessMessage('Sign-up successful! Please check your email for verification.');
//       setTimeout(() => navigate('/signin'), 2000); // Redirect to sign-in page after 2 seconds
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>{formType === 'signin' ? 'Sign In' : 'Create Account'}</h2>
//       <form onSubmit={formType === 'signin' ? handleSignIn : handleSignUp}>
//         {formType === 'signup' && (
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               id="username" 
//               placeholder="Enter your username" 
//               value={username} 
//               onChange={(e) => setUsername(e.target.value)} 
//             />
//           </div>
//         )}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input 
//             type="email" 
//             className="form-control" 
//             id="email" 
//             placeholder="Enter your email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input 
//             type="password" 
//             className="form-control" 
//             id="password" 
//             placeholder="Enter your password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           {formType === 'signin' ? 'Sign In' : 'Create Account'}
//         </button>
//       </form>
//       <p className="mt-3">
//         {formType === 'signin' ? 'Don\'t have an account?' : 'Already have an account?'}
//         <button 
//           type="button" 
//           className="btn btn-link" 
//           onClick={() => setFormType(formType === 'signin' ? 'signup' : 'signin')}
//         >
//           {formType === 'signin' ? 'Sign Up' : 'Sign In'}
//         </button>
//       </p>
//       {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
//       {successMessage && <p className="text-success mt-3">{successMessage}</p>}
//     </div>
//   );
// }

// export default SignIn;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// import { Auth } from 'aws-amplify'; // Import Auth from aws-amplify

// export function SignIn() {
//   const navigate = useNavigate();
//   const [formType, setFormType] = useState('signin'); // State to toggle between 'signin' and 'signup'
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     try {
//       await Auth.signIn(email, password); // Use email and password for sign-in
//       navigate('/'); // Redirect to homepage after successful sign-in
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     try {
//       await Auth.signUp({
//         username,
//         password,
//         attributes: {
//           email
//         }
//       });
//       setSuccessMessage('Sign-up successful! Please check your email for verification.');
//       setTimeout(() => navigate('/signin'), 2000); // Redirect to sign-in page after 2 seconds
//     } catch (error) {
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>{formType === 'signin' ? 'Sign In' : 'Create Account'}</h2>
//       <form onSubmit={formType === 'signin' ? handleSignIn : handleSignUp}>
//         {formType === 'signup' && (
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               id="username" 
//               placeholder="Enter your username" 
//               value={username} 
//               onChange={(e) => setUsername(e.target.value)} 
//             />
//           </div>
//         )}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input 
//             type="email" 
//             className="form-control" 
//             id="email" 
//             placeholder="Enter your email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input 
//             type="password" 
//             className="form-control" 
//             id="password" 
//             placeholder="Enter your password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           {formType === 'signin' ? 'Sign In' : 'Create Account'}
//         </button>
//       </form>
//       <p className="mt-3">
//         {formType === 'signin' ? 'Don\'t have an account?' : 'Already have an account?'}
//         <button 
//           type="button" 
//           className="btn btn-link" 
//           onClick={() => setFormType(formType === 'signin' ? 'signup' : 'signin')}
//         >
//           {formType === 'signin' ? 'Sign Up' : 'Sign In'}
//         </button>
//       </p>
//       {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
//       {successMessage && <p className="text-success mt-3">{successMessage}</p>}
//     </div>
//   );
// }

// export default SignIn;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { Auth } from 'aws-amplify'; // Import Auth from aws-amplify

export function SignIn() {
  const navigate = useNavigate();
  const [formType, setFormType] = useState('signin'); // State to toggle between 'signin' and 'signup'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await Auth.signIn(email, password); // Use email and password for sign-in
      navigate('/'); // Redirect to homepage after successful sign-in
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      });
      setSuccessMessage('Sign-up successful! Please check your email for verification.');
      setTimeout(() => navigate('/signin'), 2000); // Redirect to sign-in page after 2 seconds
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
