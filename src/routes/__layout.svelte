<script>
	import { Navbar } from 'components';
	import { theme } from '../stores';
	import '../app.css';
</script>

<div data-theme={$theme} class="h-screen">
	<Navbar />
	<slot />
</div>
