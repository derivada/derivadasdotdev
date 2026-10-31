export type Locale = 'en' | 'es';

export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES: Locale[] = ['en', 'es'];

export function detectLocale(pathname: string): Locale {
	return pathname.startsWith('/es') ? 'es' : 'en';
}

export function toLocalizedPath(locale: Locale, path: string): string {
	const normalized = path === '/' ? '' : path.replace(/^\/+/, '');
	if (locale === 'en') {
		return normalized ? `/${normalized}` : '/';
	}
	return normalized ? `/es/${normalized}` : '/es';
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
	const withoutLocale = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
	return toLocalizedPath(targetLocale, withoutLocale);
}