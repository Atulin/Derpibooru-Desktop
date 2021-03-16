import React from 'react';
import styles from './ImageTile.sass';
import { MIMEType } from '../../Models/Derpi';

interface ImageTileProps {
	url: string;
	name: string;
	mime: MIMEType;
}

export const ImageTile = ({ url, name, mime }: ImageTileProps) => {
	const newUrl =
		mime === MIMEType.VideoWebm
			? [...url.split('.').slice(0, -1), 'gif'].join('.')
			: url;

	return (
		<button type="button" className={styles.tile}>
			<img src={newUrl} alt={name} />
			<div className={styles.data}>skookum</div>
		</button>
	);
};
