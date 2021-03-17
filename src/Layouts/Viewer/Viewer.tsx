import React from 'react';
import { Image } from '../../Models/Derpi';

interface ViewerProps {
	image: Image;
}

export const Viewer = ({ image }: ViewerProps) => {
	return (
		<div>
			<img src={image.representations.full} alt={image.name} />
		</div>
	);
};
