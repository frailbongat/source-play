<script lang="ts">
	import { Moon, Search, Sun } from 'svelte-heros';
	import classNames from 'classnames';
	import { page } from '$app/stores';
	import { Github, Logo, MenuButton } from 'components';

	interface MenusType {
		label: string;
		href: string;
	}

	const menus: MenusType[] = [
		{ label: 'Games', href: '/games' },
		{ label: 'Apps', href: '/apps' },
		{ label: 'Movies', href: '/movies' },
		{ label: 'Books', href: '/books' }
	];

	const toggleTheme = () => {
		if (localStorage.getItem('color-theme')) {
			if (localStorage.getItem('color-theme') === 'light') {
				document.documentElement.classList.add('dark');
				localStorage.setItem('color-theme', 'dark');
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.setItem('color-theme', 'light');
			}
		}
	};
</script>

<div class="bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
	<div class="container flex items-center justify-between h-16 mx-auto px-4">
		<div class="flex gap-8">
			<a
				href="/"
				class="text-2xl flex gap-3 self-center font-semibold whitespace-nowrap dark:text-white"
			>
				<Logo />
				Source Play
			</a>
			<ul class="hidden md:flex gap-6 items-center">
				{#each menus as { label, href }}
					<li>
						<a
							{href}
							class={classNames(
								'text-sm font-medium hover:text-green-600 dark:hover:text-green-500',
								$page.url.pathname === href
									? 'text-green-600 dark:text-green-500'
									: 'text-gray-900  dark:text-gray-300'
							)}
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex gap-1">
			<MenuButton><Search variation="solid" size="20" /></MenuButton>
			<MenuButton on:click={toggleTheme}>
				<Moon variation="solid" size="20" class="block dark:hidden" />
				<Sun variation="solid" size="20" class="dark:block hidden" />
			</MenuButton>
			<a href="https://github.com/frailbongat/source-play" target="_blank">
				<MenuButton><Github /></MenuButton>
			</a>
		</div>
	</div>
</div>
