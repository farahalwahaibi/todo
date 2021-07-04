//import React
import React, { useState, useEffect } from 'react';
//import superagent
import superagent from 'superagent';
//import cookie
import cookie from 'react-cookies';
//import jwt
import jwt from 'jsonwebtoken';
//import dotenv
// dotenv.config();

const API = 'https://auth-server-401.herokuapp.com';

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const token = cookie.load('auth');
		validateToken(token);
	}, []);

	function validateToken(token) {
		try {
			const user = jwt.decode(token);
			if (user) setLoginState(true, token, user);
		} catch (error) {
			setLoginState(false, null, {});
			console.log(`Token Validation Error ${error.message}`);
		}
	}

	function setLoginState(loggedIn, token, user) {
		cookie.save('auth', token);
		setUser({ user });
		setLoggedIn(loggedIn);
	}

	function setLogoutState(loggedIn, user) {
		cookie.save('auth', null);
		setUser({ user });
		setLoggedIn(loggedIn);
	}

	async function login(username, password) {
		try {
			const response = await superagent
				.post(`${API}/signin`)
				.set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
			validateToken(response.body.token);
		} catch (error) {
			console.error('Signin Error', error.message);
		}
	}
	
	async function signup(email, username, password, role) {
		try {
			const response = await superagent.post(`${API}/signup`, {
				email,
				username,
				password,
				role,
			});
			console.log(response.body.token);
			validateToken(response.body.token);
		} catch (error) {
			console.error('Signup Error', error.message);
		}
	}

	function logout() {
		setLogoutState(false, {});
	}

	const state = {
		loggedIn,
		user,
		setLoggedIn,
		login,
		signup,
		logout,
		setUser,
	};

	return (
		<LoginContext.Provider value={state}>
			{props.children}
		</LoginContext.Provider>
	);
};


//export LoginProvider
export default LoginProvider;

// import React from 'react';
// import jwt from 'jsonwebtoken';
// import superagent from 'superagent';
// import cookie from 'react-cookies';

// const API = 'https://auth-server-401.herokuapp.com';
// const SECRET = 'supersecret';//you should never add your secret to your front end app, even in the env variables. instead you need to re-verify in the server

// export const LoginContext = React.createContext();

// class LoginProvider extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loggedIn: false,
//             token: null,
//             login: this.login,
//             logout: this.logout,
//             user: {}
//         }
//     }

//     componentDidMount() {
//         const token = cookie.load('auth');
//         this.validateToken(token);
//     }

//     login = async (username, password) => {
//         try {
//             // username:password
//             // klasdflkjasdf 

//             const response = await superagent.post(`${API}/signin`)
//                 .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);

//             this.validateToken(response.body.token);
//             //do login stuff
//             // this.setLoginState(true, 'somevalues', {username})
//         } catch (error) {
//             console.error('Failed to signin', error.message);
//         }
//     }

//     validateToken = (token) => {
//         try {
//             // const user = jwt.verify(token, SECRET);
//             const user = jwt.decode(token);
//             console.table(user);
//             this.setLoginState(!!user, token, user);// about the double !, we use this to send true if the user has values otherwise send false. (this will pass a boolean instead of an object)
//         } catch (error) {
//             console.error('User is not verified', error.message);
//             this.setLoginState(false, null, {})
//         }
//     }


//     logout = () => {
//         this.setLoginState(false, null, {})
//     }

//     setLoginState = (loggedIn, token, user) => {
//         cookie.save('auth', token);
//         this.setState({ token, loggedIn, user });
//     }

//     render() {
//         return (
//             <LoginContext.Provider value={this.state}>
//                 {this.props.children}
//             </LoginContext.Provider>
//         );
//     }
// }

// export default LoginProvider;