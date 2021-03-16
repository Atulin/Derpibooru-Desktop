import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.scss';
import { ImageTileGrid } from './Layouts/ImageTileGrid/ImageTileGrid';
import { Convert, Image } from './Models/Derpi';

const Hello = () => {
	const [derpis, setDerpis] = useState<Image[]>();

	fetch('https://derpibooru.org/api/v1/json/search/images?q=rarity')
		.then((d) => d.text())
		.then((d) => {
			const derpi = Convert.toDerpi(d);
			setDerpis(derpi.images);
			return true;
		})
		.catch(console.error);

	return (
		<main>
			<ImageTileGrid images={derpis} />
		</main>
	);
};

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Hello} />
			</Switch>
		</Router>
	);
}
