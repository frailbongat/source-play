<script>
	import classNames from 'classnames';
</script>

<button
	type="button"
	class={classNames(
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-xl text-sm p-2.5',
		$$props.class
	)}
	on:click|stopPropagation
>
	<slot />
</button>
