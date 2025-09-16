<script>
	import Button from '$lib/Button.svelte';
</script>

<nav>
	<ol>
		<li><a id="home-link" href="/">Home</a></li>
		<li><Button text="Log in" /></li>
	</ol>
</nav>

<style>
	ol {
		display: flex;
		justify-content: space-between;
		padding: 25px 50px;
		margin-block: 0;
	}

	ol li {
		display: inline;
	}

	ol li a {
		text-decoration: none;
		color: white;
	}

	ol li #home-link {
		font-weight: bold;
		font-size: 1.5em;
	}
</style>
