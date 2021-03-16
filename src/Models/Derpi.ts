export class Derpi {
	url: string;
	alt?: string | null;

	constructor(url: string, alt: string | null = null) {
		this.url = url;
		this.alt = alt;
	}
}
