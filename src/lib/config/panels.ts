/**
 * Panel configuration
 */

export interface PanelConfig {
	nameKey: string;
	priority: 1 | 2 | 3;
}

export type PanelId =
	| 'map'
	| 'politics'
	| 'tech'
	| 'finance'
	| 'gov'
	| 'heatmap'
	| 'markets'
	| 'monitors'
	| 'commodities'
	| 'crypto'
	| 'polymarket'
	| 'whales'
	| 'mainchar'
	| 'printer'
	| 'contracts'
	| 'ai'
	| 'layoffs'
	| 'venezuela'
	| 'greenland'
	| 'iran'
	| 'leaders'
	| 'intel'
	| 'correlation'
	| 'narrative'
	| 'fed';

export const PANELS: Record<PanelId, PanelConfig> = {
	map: { nameKey: 'panels.map', priority: 1 },
	politics: { nameKey: 'panels.politics', priority: 1 },
	tech: { nameKey: 'panels.tech', priority: 1 },
	finance: { nameKey: 'panels.finance', priority: 1 },
	gov: { nameKey: 'panels.gov', priority: 2 },
	heatmap: { nameKey: 'panels.heatmap', priority: 1 },
	markets: { nameKey: 'panels.markets', priority: 1 },
	monitors: { nameKey: 'panels.monitors', priority: 1 },
	commodities: { nameKey: 'panels.commodities', priority: 2 },
	crypto: { nameKey: 'panels.crypto', priority: 2 },
	polymarket: { nameKey: 'panels.polymarket', priority: 2 },
	whales: { nameKey: 'panels.whales', priority: 3 },
	mainchar: { nameKey: 'panels.mainchar', priority: 2 },
	printer: { nameKey: 'panels.printer', priority: 2 },
	contracts: { nameKey: 'panels.contracts', priority: 3 },
	ai: { nameKey: 'panels.ai', priority: 3 },
	layoffs: { nameKey: 'panels.layoffs', priority: 3 },
	venezuela: { nameKey: 'panels.venezuela', priority: 2 },
	greenland: { nameKey: 'panels.greenland', priority: 2 },
	iran: { nameKey: 'panels.iran', priority: 2 },
	leaders: { nameKey: 'panels.leaders', priority: 1 },
	intel: { nameKey: 'panels.intel', priority: 2 },
	correlation: { nameKey: 'panels.correlation', priority: 1 },
	narrative: { nameKey: 'panels.narrative', priority: 1 },
	fed: { nameKey: 'panels.fed', priority: 1 }
};

export const NON_DRAGGABLE_PANELS: PanelId[] = ['map'];

export const MAP_ZOOM_MIN = 1;
export const MAP_ZOOM_MAX = 4;
export const MAP_ZOOM_STEP = 0.5;
