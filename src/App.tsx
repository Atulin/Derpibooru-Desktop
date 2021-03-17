import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.scss';
import { Home } from './Layouts/Home/Home';
import { Viewer } from './Layouts/Viewer/Viewer';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/view" component={Viewer} />
			</Switch>
		</Router>
	);
}
