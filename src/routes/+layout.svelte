<script lang="ts">
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	let { children } = $props();
</script>

<div>
	<main>
		<Navbar />

		{@render children()}

		<Footer />
	</main>
</div>

<style>
	div {
		background: linear-gradient(45deg, #4158d0, #c850c0);
		min-height: 100vh;
	}

	main {
		width: 80%;
		margin: 0 auto;
		font-size: 1em;
		font-family: Montserrat, Arial, sans-serif;

		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	:global(body) {
		/* Reset browser defaults to avoid white border */
		margin: 0;
		padding: 0;
	}
</style>
