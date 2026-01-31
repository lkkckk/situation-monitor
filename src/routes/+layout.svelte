<script lang="ts">
	import '../app.css';
	import { initI18n } from '$lib/i18n';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	initI18n();
</script>

<div class="min-h-screen bg-bg text-text-primary">
	{@render children()}
</div>
