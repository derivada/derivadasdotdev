import { getCollection } from 'astro:content';
import type { Locale } from './i18n';

export async function getPostsByLocale(locale: Locale) {
	const posts = await getCollection('blog', ({ data }) => data.lang === locale);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostByLocaleAndSlug(locale: Locale, slug: string) {
	const posts = await getCollection('blog', ({ data }) => data.lang === locale && data.urlSlug === slug);
	return posts[0];
}

export async function getPostByTranslationKey(locale: Locale, translationKey?: string) {
	if (!translationKey) return undefined;
	const posts = await getCollection('blog', ({ data }) => data.lang === locale && data.translationKey === translationKey);
	return posts[0];
}