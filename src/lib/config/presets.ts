/**
 * Onboarding presets for first-time users
 */

import type { PanelId } from './panels';

export interface Preset {
	id: string;
	nameKey: string;
	icon: string;
	descriptionKey: string;
	panels: PanelId[];
}

export const PRESETS: Record<string, Preset> = {
	'news-junkie': {
		id: 'news-junkie',
		nameKey: 'presets.newsJunkie.name',
		icon: '📰',
		descriptionKey: 'presets.newsJunkie.description',
		panels: ['politics', 'tech', 'finance', 'gov', 'ai', 'mainchar', 'map']
	},
	trader: {
		id: 'trader',
		nameKey: 'presets.trader.name',
		icon: '📈',
		descriptionKey: 'presets.trader.description',
		panels: [
			'markets',
			'heatmap',
			'commodities',
			'crypto',
			'polymarket',
			'whales',
			'printer',
			'finance',
			'map'
		]
	},
	geopolitics: {
		id: 'geopolitics',
		nameKey: 'presets.geopolitics.name',
		icon: '🌍',
		descriptionKey: 'presets.geopolitics.description',
		panels: [
			'map',
			'intel',
			'leaders',
			'politics',
			'gov',
			'venezuela',
			'greenland',
			'iran',
			'correlation',
			'narrative'
		]
	},
	intel: {
		id: 'intel',
		nameKey: 'presets.intel.name',
		icon: '🔍',
		descriptionKey: 'presets.intel.description',
		panels: ['map', 'intel', 'leaders', 'correlation', 'narrative', 'mainchar', 'politics']
	},
	minimal: {
		id: 'minimal',
		nameKey: 'presets.minimal.name',
		icon: '⚡',
		descriptionKey: 'presets.minimal.description',
		panels: ['map', 'politics', 'markets']
	},
	everything: {
		id: 'everything',
		nameKey: 'presets.everything.name',
		icon: '🎛️',
		descriptionKey: 'presets.everything.description',
		panels: [
			'map',
			'politics',
			'tech',
			'finance',
			'gov',
			'heatmap',
			'markets',
			'monitors',
			'commodities',
			'crypto',
			'polymarket',
			'whales',
			'mainchar',
			'printer',
			'contracts',
			'ai',
			'layoffs',
			'venezuela',
			'greenland',
			'iran',
			'leaders',
			'intel',
			'correlation',
			'narrative'
		]
	}
};

export const PRESET_ORDER = [
	'news-junkie',
	'trader',
	'geopolitics',
	'intel',
	'minimal',
	'everything'
];

// Storage keys
export const ONBOARDING_STORAGE_KEY = 'onboardingComplete';
export const PRESET_STORAGE_KEY = 'selectedPreset';
