import React from "react";
import styles from './ImageTile.sass';
import {Derpi} from "../../Models/Derpi";

const grab = () => {
	fetch('https://derpibooru.org/api/v1/json/search/posts?q=rarity')
		.then(d => d.json())
		.then(d => console.log(d));
}

export const ImageTile = ({url, alt = null}: Derpi) =>
	<div className={styles.tile} onClick={grab}>
		<img src={url} alt={alt ?? 'Image'}/>
		<div className={styles.data}>skookum</div>
	</div>
