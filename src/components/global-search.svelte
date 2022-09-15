<script lang="ts">
	import { Search } from 'svelte-heros';
	import { clickOutside } from 'utils';

	export let searched: boolean = false;
</script>

<div class="relative w-full max-w-3xl md:ml-6 md:mr-4" use:clickOutside={() => (searched = false)}>
	<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
		<Search class="w-5 h-5 text-gray-500 dark:text-gray-400" variation="solid" />
	</div>
	<input
		type="text"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
		placeholder="Search for apps & games"
	/>
</div>
