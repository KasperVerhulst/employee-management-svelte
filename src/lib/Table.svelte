<script lang="ts">
	// accept employees as a prop	
    let  { employees } = $props();
</script>

<table>
	<thead>
		<tr>
			{#each Object.keys(employees[0]) as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each employees as employee}
			<tr>
				{#each Object.values(employee) as field}
				<td>{field}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		min-width: 400px;

		border-radius: 10px;
		border-collapse: separate;
		overflow: hidden;
		border-spacing: 0;
	}

	thead tr {
		background-color: #123a69;
		color: white;
		text-align: left;
	}
	
	th,
	td {
		padding: 12px 15px;
	}

	tbody tr:nth-of-type(even) {
		background-color: #f3f3f3;
	}

	tbody tr:nth-of-type(odd) {
		background-color: white;
	}
</style>
