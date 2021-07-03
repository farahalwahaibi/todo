//import react
import React from 'react';
//import navbar
import  {Navbar}  from 'react-bootstrap';

const Header = (props)=>{
return (
    <>
     <Navbar bg="primary" variant="dark">
        <Navbar.Brand className="header" >Home</Navbar.Brand>
     </Navbar>
    </>
  );
}

//export header
export default Header;
