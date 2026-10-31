export interface Publication {
	venue: string;
	badgeVariant: string;
	badgeTone?: string;
	title: string;
	authors: string;
	linkHref: string;
}

export const publications: Publication[] = [
	{
		venue: 'arXiv',
		badgeVariant: 'foreground1',
		badgeTone: 'pub-badge-arxiv',
		title: 'Efficient Neighborhood Search in 3D Point Clouds Through Space-Filling Curves and Linear Octrees',
		authors:
			'Pablo D. Viñambres, Miguel Yermo, Silvia R. Alcaraz, Oscar G. Lorenzo, Francisco F. Rivera, José C. Cabaleiro',
		linkHref: 'https://arxiv.org/abs/2603.06771',
	},
];
