import { register, init, locale } from 'svelte-i18n';
import { browser } from '$app/environment';

const DEFAULT_LOCALE = 'zh' as const;
const LOCALE_STORAGE_KEY = 'situationMonitorLocale';
const SUPPORTED_LOCALES = ['zh', 'en'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

let initialized = false;

function getStoredLocale(): SupportedLocale | null {
	if (!browser) return null;
	const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
	return SUPPORTED_LOCALES.includes(stored as SupportedLocale) ? (stored as SupportedLocale) : null;
}

function applyDocumentLocale(currentLocale: SupportedLocale): void {
	if (!browser) return;
	document.documentElement.lang = currentLocale;
}

export function initI18n(): void {
	if (initialized) return;
	initialized = true;

	register('zh', () => import('./locales/zh.json'));
	register('en', () => import('./locales/en.json'));

	const initialLocale = getStoredLocale() ?? DEFAULT_LOCALE;
	init({
		fallbackLocale: DEFAULT_LOCALE,
		initialLocale
	});
	locale.set(initialLocale);
	applyDocumentLocale(initialLocale);
}

export function setLocale(nextLocale: SupportedLocale): void {
	locale.set(nextLocale);
	applyDocumentLocale(nextLocale);
	if (browser) {
		localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
	}
}

export const supportedLocales = SUPPORTED_LOCALES;
export { locale, DEFAULT_LOCALE, LOCALE_STORAGE_KEY };
