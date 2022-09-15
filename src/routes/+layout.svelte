<script>
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import { Footer, Navbar } from 'components';
</script>

<Navbar />
<div class="min-h-screen dark:bg-gray-900 container mx-auto p-4 py-20 md:pb-4">
	<slot />
</div>
<Footer />
