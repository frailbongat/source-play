<script>
	import { Navbar } from 'components';
	import { theme } from '../stores';
	import '../app.css';
</script>

<div data-theme={$theme} class="h-screen">
	<Navbar />

	<div class="container mx-auto p-6">
		<slot />
	</div>
</div>
