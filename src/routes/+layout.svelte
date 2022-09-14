<script>
	import '../app.css';
	import 'flowbite/dist/flowbite.css';
	import { Footer, Navbar } from 'components';
</script>

<div class="flex flex-col h-screen dark:bg-gray-900">
	<Navbar />
	<div class="grow container mx-auto p-4"><slot /></div>
	<Footer />
</div>
