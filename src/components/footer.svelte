<script lang="ts">
	import { BookOpen, Film, Puzzle, ViewGrid } from 'svelte-heros';
	import classNames from 'classnames';
	import { page } from '$app/stores';

	const menus = [
		{ icon: Puzzle, label: 'Games', href: '/' },
		{ icon: ViewGrid, label: 'Apps', href: '/apps' },
		{ icon: Film, label: 'Movies', href: '/movies' },
		{ icon: BookOpen, label: 'Books', href: '/books' }
	];
</script>

<div
	class="bg-white border-t border-gray-200 dark:border-gray-600 dark:bg-gray-800 block md:hidden fixed z-50 bottom-0 w-full"
>
	<div class="container items-center justify-between h-16 mx-auto px-4 flex">
		{#each menus as { icon, label, href }}
			<a
				{href}
				class={classNames(
					'font-medium',
					$page.url.pathname === href
						? 'text-green-600 dark:text-green-500'
						: 'text-gray-500 dark:text-gray-400'
				)}
			>
				<svelte:component this={icon} variation="solid" size="20" class="mx-auto mb-0.5" />
				{label}
			</a>
		{/each}
	</div>
</div>
