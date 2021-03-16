import React from 'react';
import styles from './ImageTileGrid.sass';
import { ImageTile } from '../../Components/ImageTile/ImageTile';
import { Image } from '../../Models/Derpi';

interface ImageTileGridProps {
	images: Image[] | undefined;
}

export const ImageTileGrid = ({ images }: ImageTileGridProps) => (
	<div className={styles.grid}>
		{images === undefined ? (
			<div>Empty</div>
		) : (
			images.map((img) => (
				<ImageTile
					url={img.representations.thumb}
					name={img.name}
					mime={img.mime_type}
					key={img.id}
				/>
			))
		)}
	</div>
);
