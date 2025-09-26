<script lang="ts">
	import Button from '$lib/Button.svelte';

	// This Svelte component represents a modal form for adding a new entity (e.g., employee).
	// It requires four props:
	// - onclose: A function to close the modal.
	// - entityName: A string representing the type of entity being added (e.g., "employee").
	// - formData: An object containing the initial form data. The form fields will be generated based on the keys of this object.
	// - onsubmit: An function to execute on form submission.
	let { onclose, entityName, formData, onsubmit } = $props<{
		onclose: () => void;
		entityName: string;
		formData: Record<string, any>;
		onsubmit: () => void;
	}>();

	const formKeys: string[] = Object.keys(formData);
</script>

<div class="overlay"></div>

<div class="modal">
	<button class="close-button" onclick={onclose}>&times;</button>

	<h2>New {entityName.charAt(0).toUpperCase() + entityName.slice(1)}</h2>

	<form>
		{#each formKeys as key}
			<div class="form-group">
				<label for={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>

				<input type="text" name={key} bind:value={formData[key]} required />
			</div>
		{/each}

		<div class="actions">
			<Button onclick={onsubmit} text="Submit" />
		</div>
	</form>
</div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 10;
	}

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		z-index: 11;
		width: 90%;
		max-width: 500px;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		margin-top: 2rem;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 15px;
		background: none;
		border: none;
		font-size: 1.75rem;
		font-weight: bold;
		color: #888;
		cursor: pointer;
		line-height: 1;
	}

	.close-button:hover {
		color: #333;
	}
</style>
