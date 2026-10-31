import type { Locale } from './i18n';

export type ProjectBadge = {
	label: string;
	badgeColor?: string;
	badgeText?: string;
};

export type ProjectButton = {
	show: boolean;
	href: string;
	label?: string;
};

type ProjectButtonDefinition = {
	show: boolean;
	href: string;
	label?: LocalizedText;
};

export type ProjectButtons = {
	demo?: ProjectButton;
	paper?: ProjectButton;
	blog?: ProjectButton;
	code?: ProjectButton;
	video?: ProjectButton;
};

type ProjectButtonDefinitions = {
	demo?: ProjectButtonDefinition;
	paper?: ProjectButtonDefinition;
	blog?: ProjectButtonDefinition;
	code?: ProjectButtonDefinition;
	video?: ProjectButtonDefinition;
};

export type ProjectItem = {
	id: string;
	treeLabel: string;
	title: string;
	badges: ProjectBadge[];
	demoBadgeColor?: string;
	year?: number;
	isNew?: boolean;
	buttons: ProjectButtons;
};

export type GroupConfig = {
	label: string;
	typeBadgeLabel: string;
	color: string;
};

type GroupDefinition = {
	label: Record<Locale, string>;
	typeBadgeLabel: Record<Locale, string>;
	color: string;
};

type LocalizedText = {
	en: string;
	es?: string;
};

type ProjectDefinition = {
	id: string;
	treeLabel: LocalizedText;
	title: LocalizedText;
	badges: ProjectBadge[];
	demoBadgeColor?: string;
	year?: number;
	isNew?: boolean;
	buttons: ProjectButtonDefinitions;
};

type ProjectGroupKey =
	| 'research'
	| 'thesis'
	| 'robotics'
	| 'teaching'
	| 'hackathons';

const projectGroups: Record<ProjectGroupKey, GroupDefinition> = {
	research: {
		label: { en: 'Research', es: 'Investigación' },
		typeBadgeLabel: { en: 'Research', es: 'Investigación' },
		color: 'var(--normal-magenta)',
	},
	thesis: {
		label: { en: 'Thesis', es: 'Trabajos' },
		typeBadgeLabel: { en: 'Thesis', es: 'Trabajos' },
		color: 'var(--normal-cyan)',
	},
	robotics: {
		label: { en: 'Robotics', es: 'Robótica' },
		typeBadgeLabel: { en: 'Robotics', es: 'Robótica' },
		color: 'var(--normal-green)',
	},
	teaching: {
		label: { en: 'Teaching', es: 'Docencia' },
		typeBadgeLabel: { en: 'Teaching', es: 'Docencia' },
		color: 'var(--normal-red)',
	},
	hackathons: {
		label: { en: 'Hackathons / Class', es: 'Hackathones / Clase' },
		typeBadgeLabel: { en: 'Hackathons', es: 'Hackathones' },
		color: 'var(--normal-yellow)',
	},
};

const projectDefinitions: Record<ProjectGroupKey, ProjectDefinition[]> = {
	research: [
		{
			id: 'primimix',
			treeLabel: { en: 'Primimix', es: 'Primimix' },
			title: {
				en: 'Primimix: Semantic Planar Splatting for 3D Structured Reconstruction',
				es: 'Primimix: Semantic Planar Splatting para Reconstrucción 3D Estructurada',
			},
			badges: [{ label: 'PyTorch' }, { label: 'CUDA' }, { label: 'Gaussian Splatting' }],
			year: 2026,
			isNew: true,
			buttons: {
				paper: {
					show: true,
					href: '/primimix_report.pdf',
					label: { en: 'REPORT', es: 'INFORME' },
				},
			},
		},
		{
			id: 'gems',
			treeLabel: { en: 'GeMS', es: 'GeMS' },
			title: {
				en: 'GeMS: Geometry-aware Mesh Splatting',
				es: 'GeMS: Geometry-aware Mesh Splatting',
			},
			badges: [{ label: 'PyTorch' }, { label: 'CUDA' }, { label: 'Gaussian Splatting' }],
			year: 2026,
			isNew: true,
			buttons: {
				paper: {
					show: true,
					href: '/gems_report.pdf',
					label: { en: 'REPORT', es: 'INFORME' },
				},
			},
		},
		{
			id: 'matching-disconnected',
			treeLabel: { en: 'Matching Disconnected Shapes', es: 'Matching Disconnected Shapes' },
			title: {
				en: 'Matching Disconnected Shapes: 3D Correspondence under Partiality with Disconnection',
				es: 'Matching Disconnected Shapes: correspondencia 3D bajo parcialidad con desconexión',
			},
			badges: [
				{ label: 'Shape Matching' },
				{ label: 'PyTorch' },
				{ label: '3D Generative Models' },
			],
			year: 2026,
			isNew: true,
			buttons: {},
		},
		{
			id: 'research-octree-neighbourhood',
			treeLabel: {
				en: 'Neighbour Search in 3D Point Clouds via SFCs and Octrees',
				es: 'Efficient Neighbourhood Search...',
			},
			title: {
				en: 'Efficient Neighbourhood Search in 3D Point Clouds Through Space-Filling Curves and Linear Octrees',
				es: 'Efficient Neighbourhood Search in 3D Point Clouds Through Space-Filling Curves and Linear Octrees',
			},
			badges: [{ label: 'C++' }, { label: 'OpenMP' }, { label: 'LiDAR' }],
			demoBadgeColor: 'var(--normal-red)',
			year: 2026,
			buttons: {
				paper: { show: true, href: 'https://arxiv.org/abs/2603.06771' },
				code: {
					show: true,
					href: 'https://github.com/derivada/octrees-benchmark',
				},
			},
		},
	],
	thesis: [
		{
			id: 'octrees-thesis',
			treeLabel: {
				en: 'BSc Informatics',
				es: 'TFG Informática',
			},
			title: {
				en: "Study and improvement of octree structures' performance for neighbour search in 3D point clouds",
				es: 'Estudio y mejora del rendimiento de modelos Octree para búsqueda de vecinos en nubes de puntos 3D',
			},
			badges: [{ label: 'C++' }, { label: 'OpenMP' }, { label: 'LiDAR' }],
			year: 2025,
			buttons: {
				paper: {
					show: true,
					href: '/informatics_thesis.pdf',
					label: { en: 'THESIS', es: 'TESIS' },
				},
				code: {
					show: true,
					href: 'https://github.com/derivada/octrees-benchmark',
				},
			},
		},
		{
			id: 'fft-thesis',
			treeLabel: {
				en: 'BSc Mathematics',
				es: 'TFG Matemáticas',
			},
			title: {
				en: 'The Fast Fourier Transform',
				es: 'La Transformada Rápida de Fourier',
			},
			badges: [{ label: 'FFTs' }, { label: 'Analysis' }, { label: 'Python' }],
			year: 2025,
			buttons: {
				paper: {
					show: true,
					href: '/mathematics_thesis.pdf',
					label: { en: 'THESIS', es: 'TESIS' },
				},
			},
		},
	],
	robotics: [
		{
			id: 'hestia',
			treeLabel: {
				en: 'Hestia',
				es: 'Hestia',
			},
			title: {
				en: 'Project Hestia',
				es: 'Proyecto Hestia',
			},
			badges: [
				{ label: 'ROS2' },
				{ label: 'Isaac Sim' },
				{ label: 'Franka Emika' },
			],
			year: 2026,
			isNew: true,
			buttons: {},
		},
		{
			id: 'intrinsic-challenge',
			treeLabel: {
				en: 'Intrinsic AI Challenge',
				es: 'Intrinsic AI Challenge',
			},
			title: {
				en: 'AI for Industry Challenge: Robotic Cable Insertion',
				es: 'AI for Industry Challenge: Inserción Robótica de Cables',
			},
			badges: [
				{ label: 'ROS2' },
				{ label: 'Isaac GR00T' },
				{ label: 'LeRobot' },
			],
			year: 2026,
			isNew: true,
			buttons: {
				code: {
					show: true,
					href: 'https://github.com/The-RoboTUM/Intrinsic-challenge',
				},
			},
		},
		{
			id: 'puma',
			treeLabel: {
				en: 'PUMA',
				es: 'PUMA',
			},
			title: {
				en: 'Project PUMA',
				es: 'Proyecto PUMA',
			},
			badges: [{ label: 'Python' }, { label: 'ROS2' }],
			year: 2025,
			buttons: {
				blog: {
					show: true,
					href: 'https://www.maxwell-robotics.de/post/puma_project',
					label: { en: 'BLOG', es: 'BLOG' },
				},
			},
		},
	],
	teaching: [
		{
			id: 'python-course',
			treeLabel: {
				en: 'Python & Data Analysis Course',
				es: 'Curso de Python y Análisis de Datos',
			},
			title: {
				en: 'Introduction course to Python and its role in Data Analysis',
				es: 'Curso de introducción a Python y su uso en el análisis de datos',
			},
			badges: [{ label: 'reveal.js' }, { label: 'Python' }],
			demoBadgeColor: 'var(--normal-red)',
			year: 2025,
			buttons: {
				demo: {
					show: true,
					href: 'https://pythoncourse.derivadas.dev/',
					label: {
						en: 'INTERACTIVE SLIDES',
						es: 'SLIDES INTERACTIVAS',
					},
				},
				code: {
					show: true,
					href: 'https://github.com/xianacarrera/python_course_2025',
				},
			},
		},
		{
			id: 'squaring-the-circle',
			treeLabel: {
				en: 'Squaring the Circle',
				es: 'La cuadratura del círculo',
			},
			title: {
				en: 'What geometry does not tell you: The Squaring of the Circle',
				es: 'Lo que la geometría no te cuenta: la cuadratura del círculo',
			},
			badges: [{ label: 'manim' }, { label: 'Python' }],
			year: 2023,
			buttons: {
				video: {
					show: true,
					href: 'https://youtube.com/watch?v=M9CI311fya0',
				},
				code: {
					show: true,
					href: 'https://github.com/derivada/animaciones_video_mikemates',
				},
			},
		},
	],
	hackathons: [
		{
			id: 'zoneplus',
			treeLabel: { en: 'HackaTUM', es: 'HackaTUM' },
			title: { en: 'HackaTUM', es: 'HackaTUM' },
			badges: [{ label: 'C#' }, { label: '3DCV' }],
			year: 2025,
			buttons: {
				code: {
					show: true,
					href: 'https://github.com/DavidAtanasoski/logitech-hackatum2025/tree/master',
				},
				blog: {
					show: true,
					href: 'https://devpost.com/software/logiprod',
				},
			},
		},
		{
			id: 'sentikelia',
			treeLabel: { en: 'HackUDC', es: 'HackUDC' },
			title: { en: 'HackUDC', es: 'HackUDC' },
			badges: [{ label: 'LLMs' }, { label: 'FastAPI' }, { label: 'Python' }],
			year: 2025,
			buttons: {
				code: {
					show: true,
					href: 'https://github.com/derivada/sentikelia',
				},
				blog: {
					show: true,
					href: 'https://devpost.com/software/sentikelia',
				},
			},
		},
		{
			id: 'unihack',
			treeLabel: {
				en: 'UniversityHack',
				es: 'UniversityHack',
			},
			title: {
				en: 'UniversityHack',
				es: 'UniversityHack',
			},
			badges: [{ label: 'Data Analysis' }, { label: 'Python' }],
			year: 2024,
			buttons: {
				code: { show: true, href: '' },
				blog: { show: true, href: '' },
			},
		},
		{
			id: 'tabster',
			treeLabel: { en: 'Tabster', es: 'Tabster' },
			title: { en: 'Tabster', es: 'Tabster' },
			badges: [{ label: 'LLMs' }, { label: 'FastAPI' }, { label: 'Python' }],
			year: 2024,
			buttons: {
				code: {
					show: true,
					href: 'https://github.com/derivada/Tabster',
				},
			},
		},
	],
};

const localize = (text: LocalizedText, locale: Locale): string =>
	locale === 'es' ? text.es ?? text.en : text.en;

const localizeButtons = (
	buttons: ProjectButtonDefinitions,
	locale: Locale,
): ProjectButtons => {
	const entries = Object.entries(buttons).map(([key, button]) => {
		if (!button) {
			return [key, button] as const;
		}

		return [
			key,
			{
				...button,
				label: button.label ? localize(button.label, locale) : undefined,
			},
		] as const;
	});

	return Object.fromEntries(entries) as ProjectButtons;
};

const withGroupTypeBadge = (
	groupConfig: Record<ProjectGroupKey, GroupConfig>,
	groupKey: ProjectGroupKey,
	project: ProjectItem,
): ProjectItem => {
	const config = groupConfig[groupKey];
	if (!config) {
		return project;
	}

	const normalizedTypeLabel = config.typeBadgeLabel.toLowerCase();
	const baseBadges = project.badges.filter(
		(badge) => badge.label.toLowerCase() !== normalizedTypeLabel,
	);

	return {
		...project,
		badges: [
			...baseBadges,
			{ label: config.typeBadgeLabel, badgeText: config.color },
		],
	};
};

export function getProjectsPageData(locale: Locale): {
	groupConfig: Record<ProjectGroupKey, GroupConfig>;
	projectsForRender: Record<ProjectGroupKey, ProjectItem[]>;
	defaultProjectId: string;
} {
	const groupConfig = Object.fromEntries(
		Object.entries(projectGroups).map(([groupKey, config]) => [
			groupKey,
			{
				label: localize(config.label, locale),
				typeBadgeLabel: localize(config.typeBadgeLabel, locale),
				color: config.color,
			},
		]),
	) as Record<ProjectGroupKey, GroupConfig>;

	const projectsByGroup = Object.fromEntries(
		Object.entries(projectDefinitions).map(([groupKey, projects]) => [
			groupKey,
			projects.map((project) => ({
				id: project.id,
				treeLabel: localize(project.treeLabel, locale),
				title: localize(project.title, locale),
				badges: project.badges,
				demoBadgeColor: project.demoBadgeColor,
				year: project.year,
				isNew: project.isNew,
				buttons: localizeButtons(project.buttons, locale),
			})),
		]),
	) as Record<ProjectGroupKey, ProjectItem[]>;

	const projectsForRender = Object.fromEntries(
		Object.entries(projectsByGroup).map(([groupKey, projects]) => [
			groupKey,
			projects.map((project) =>
				withGroupTypeBadge(
					groupConfig,
					groupKey as ProjectGroupKey,
					project,
				),
			),
		]),
	) as Record<ProjectGroupKey, ProjectItem[]>;

	const defaultProjectId =
		Object.values(projectsForRender)[0]?.[0]?.id ?? '';

	return {
		groupConfig,
		projectsForRender,
		defaultProjectId,
	};
}
