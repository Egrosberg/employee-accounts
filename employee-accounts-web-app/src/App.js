import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import {Layout} from './layout/layout.jsx';
import {About} from './pages/about.jsx';
import {Add} from './pages/add.jsx';
import {Retrieve} from './pages/retrieve.jsx';
import {Update} from './pages/update.jsx';
import {Delete} from './pages/delete.jsx';
import {Home} from './pages/home.jsx';
import {Contact} from './pages/contact.jsx';
import {SignIn} from './pages/signin.jsx';
import { Authenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws/aws-exports.js';


function App() {
  return (
    <Authenticator>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="add" element={<Add />}/>
            <Route path="retrieve" element={<Retrieve />}/>
            <Route path="update" element={<Update />}/>
            <Route path="delete" element={<Delete />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="signin" element={<SignIn/>}/>
          </Route>
         </Routes>
      </BrowserRouter>
    </div>
    </Authenticator>
  );
}

export default App;
