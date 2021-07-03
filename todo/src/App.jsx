//import react  
import React from 'react';
//import LoginContext
import { LoginContext } from '../src/context/auth/context.js';
//import Login
import Login from '../src/context/auth/login.js';
//import Logout
import Logout from '../src/context/auth/logout.js';
//import header
import  Header  from './components/header/header.jsx';
//import todo
import ToDo from './components/todo/todo.jsx';
//import footer
import  Footer  from './components/footer/footer.jsx';
import './App.scss';
//import If
import { If, Else, Then } from 'react-if';
import  { useContext } from 'react';

//App function
function App () {
  const loginContext = useContext(LoginContext);
    return (
      <>
       <Header/>
       <br />
       <Login />
       <Logout />
       <If condition={loginContext.loggedIn}>
        <Then>
        <ToDo />
        </Then>
        <Else>
          <div></div>
        </Else>
      </If>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <Footer/>
      </>
    );
  
}

//export App
export default App;