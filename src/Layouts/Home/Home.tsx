import React, { useState } from 'react';
import { Convert, Image } from '../../Models/Derpi';
import { ImageTileGrid } from '../ImageTileGrid/ImageTileGrid';
import styles from './Home.sass';

export const Home = () => {
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
		<main className={styles.main}>
			<ImageTileGrid images={derpis} />
		</main>
	);
};
