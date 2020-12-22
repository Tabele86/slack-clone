import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import {useStateValue} from './StateProvider';


function App() {
	// const [ user, setUser ] = useState(null);
	//user is defined as null inside reducer
	const [{user}, dispatch]= useStateValue();

	return (
		<div className="app">
			<Router>
			{!user ? (
				<Login />
			):	(
				
				<>
				<Header />
				<div className="app_body">
					{/* Sidebar */}
					<Sidebar />
					{/* React-Router  -> Chat Screen*/}
					<Switch>
						<Route path="/room/:roomId">
							<Chat />
						</Route>
						<Route path="/">
							<h1>Welcome</h1>
						</Route>
					</Switch>
				</div>
				</>
				)}
			</Router>
		</div>
	);
}

export default App;

				