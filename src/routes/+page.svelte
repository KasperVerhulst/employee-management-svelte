<script lang="ts">
	//get data from page.ts file
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	import Table from '$lib/Table.svelte';
	import FormModal from '$lib/FormModal.svelte';
	import Button from '$lib/Button.svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { HttpClient } from '@forgerock/javascript-sdk';
	import { checkTokenScope } from '$lib/oauth';

	// State variable to control the visibility of the Popup
	let popupModal = $state(false);
	// State variable to control the visibility of the "Add Employee" button
	let showEmployeeButton: boolean = $state(false);

	async function updateButtonVisibility() {
		const hasScope = await checkTokenScope('write');
		showEmployeeButton = hasScope;
	}

	$effect(() => {
		updateButtonVisibility();
	});

	// The Modal will need this function to close itself
	// Components should not change the state of their parents directly, so pass a predefined function instead
	function closeModal() {
		popupModal = false;
	}

	// This function will be passed to the Modal and executed on form submission
	async function formsubmission() {
		const res = await HttpClient.request({
			url: PUBLIC_API_URL,
			init: {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			},
			timeout: 5000
		});
		// const res = await fetch(PUBLIC_API_URL, {
		// 	method: 'POST',
		// 	body: JSON.stringify(formData)
		// });
		if (res.ok) {
			// Close the modal on successful submission
			closeModal();
		} else {
			console.error('Failed to submit form');
		}
	}

	class Employee {
		name = '';
		role = '';
		paygrade = '';
	}
	let formData: Employee = $state(new Employee());

	const entityName: string = 'employee';
</script>

<Table employees={data.employees} />

{#if showEmployeeButton}
	<div>
		<Button onclick={() => (popupModal = true)} text="Add Employee" />
	</div>
{/if}

{#if popupModal}
	<FormModal onclose={closeModal} onsubmit={formsubmission} {entityName} {formData} />
{/if}

<style>
	div {
		padding-top: 10px;
		text-align: right;
	}
</style>
