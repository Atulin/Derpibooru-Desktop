import React from "react";
import styles from './ImageTileGrid.sass'
import {ImageTile} from "../../Components/ImageTile/ImageTile";
import {Derpi} from "../../Models/Derpi";

interface ImageTileGridProps {
	images: Derpi[]
}

export const ImageTileGrid = ({images}: ImageTileGridProps) =>
	<div className={styles.grid}>
		{images.map((img, i) =>
			<ImageTile url={img.url} alt={img.alt} key={i}/>
		)}
	</div>
