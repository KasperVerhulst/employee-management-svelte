<script lang="ts">
	// This Svelte component represents a Button.
	// It requires two props:
	// - text: The text to display on the button.
	// - onclick: A function to execute when the button is clicked.
	let { text, onclick = undefined } = $props<{
		text: string;
		onclick: () => void;
	}>();
</script>

<button {onclick}>{text}</button>

<style>
	button {
		background-color: #123a69;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1em;
		font-family: Montserrat, Arial, sans-serif;
	}
</style>
