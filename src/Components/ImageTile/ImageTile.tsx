import React from 'react';
import { BiDownvote, BiStar, BiUpvote } from 'react-icons/all';
import styles from './ImageTile.scss';
import { Image, MIMEType } from '../../Models/Derpi';

interface ImageTileProps {
	image: Image;
	id: number;
}

const open = (id: number) => {
	console.log(id);
};

export const ImageTile = ({ image, id }: ImageTileProps) => {
	const newUrl =
		image.mime_type === MIMEType.VideoWebm
			? [
					...image.representations.thumb.split('.').slice(0, -1),
					'gif',
			  ].join('.')
			: image.representations.thumb;

	return (
		<button type="button" className={styles.tile} onClick={() => open(id)}>
			<img src={newUrl} alt={image.name} />

			<div className={styles.data}>
				<span className={styles.up}>
					<BiUpvote />
					{image.upvotes}
				</span>
				<span className={styles.score}>{image.score}</span>
				<span className={styles.down}>
					{image.downvotes}
					<BiDownvote />
				</span>
				<span className={styles.fave}>
					{image.faves}
					<BiStar />
				</span>
			</div>
		</button>
	);
};
