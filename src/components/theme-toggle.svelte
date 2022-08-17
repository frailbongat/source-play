<script>
	import { Moon, Sun } from 'svelte-heros';
	import { theme } from 'stores';

	const onToggle = () => {
		if ($theme === 'emerald') return ($theme = 'dark');
		if ($theme === 'dark') return ($theme = 'emerald');
	};
</script>

<button class="btn btn-ghost btn-circle" on:click={onToggle}>
	{#if $theme === 'emerald'}
		<Moon class="h-5 w-5" />
	{:else}
		<Sun class="h-5 w-5" />
	{/if}
</button>
