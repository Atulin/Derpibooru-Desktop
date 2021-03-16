import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.global.scss';
import {ImageTileGrid} from "./Layouts/ImageTileGrid/ImageTileGrid";
import {Derpi} from "./Models/Derpi";

let images = [
	new Derpi('https://picsum.photos/200'),
	new Derpi('https://picsum.photos/300'),
	new Derpi('https://picsum.photos/400'),
	new Derpi('https://picsum.photos/500'),
	new Derpi('https://picsum.photos/600'),
];

const Hello = () => {
	return (
		<main>
			<ImageTileGrid images={images}/>
		</main>
	);
};

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Hello}/>
			</Switch>
		</Router>
	);
}
