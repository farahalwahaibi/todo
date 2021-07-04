//import react
import React, { useContext, useState } from 'react';
//importing from bootstrap
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
//import If, Else, Then
import { If, Else, Then } from 'react-if';
//import LoginContext
import { LoginContext } from './context.js';

//function logout
const Logout = () => {
	const loginContext = useContext(LoginContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('user');

	function handleChangeUsername(e) {
		setUsername(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}

	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		loginContext.signup(email, username, password, role);
	}

	return (
		<If condition={loginContext.loggedIn}>
			<Then>
				<div></div>
			</Then>
			<Else>
				<Card style={{ float: 'left', width: "300px", padding: '10px', marginTop: "100px" }}>
					<h3>Sign Up Form</h3>
					<Form onSubmit={handleSubmitSignup}>
						<Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

							<Col sm={10}>
								<Form.Control type="email" placeholder="Enter Email" onChange={handleChangeEmail} />
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3" >

							<Col sm={10}>
								<Form.Control type="text" placeholder="Enter username" onChange={handleChangeUsername} />
							</Col>
						</Form.Group>

						<Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

							<Col sm={10}>
								<Form.Control type="password" placeholder="Password" onChange={handleChangePassword} />
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3">
							<Col sm={{ span: 10, offset: 2 }}>
								<Form.Label>
									Role :
                        </Form.Label>
								<select name="roles" id="roles" onChange={handleChangeRole}>
									<option value="user">user</option>
									<option value="editor">editor</option>
									<option value="admin">admin</option>
								</select>
							</Col>
						</Form.Group>
						<Form.Group as={Row} className="mb-3">
							<Col sm={{ span: 10, offset: 2 }}>
								<Button type="submit">Sign Up</Button>
							</Col>
						</Form.Group>
					</Form>
				</Card>
			</Else>
		</If>
	);
};


//export Logout
export default Logout;