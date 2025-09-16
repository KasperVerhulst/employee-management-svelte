<script lang="ts">
	//get data from page.ts file
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	import Table from '../lib/Table.svelte';
	import Button from '$lib/Button.svelte';
</script>

<Table employees={data.employees} />
<div><Button text="Add Employee" /></div>

<style>
	div {
		padding-top: 10px;
		text-align: right;
	}
</style>
