/*
This file will export a Load function that exports the data required by the +page.svelte
This is strictly a feature of SvelteKit, so it won't work in a regular Svelte component.
*/

import { PUBLIC_API_URL } from '$env/static/public';
import { oauth2flow } from '$lib/oauth';
import type { PageLoad } from './$types';
import { HttpClient } from '@forgerock/javascript-sdk';

// disable server-side rendering for this page
// API calls  must be done client-side because it requires the user's token
export const ssr = false;

interface Employee {
	ID: number;
	Company: string;
	Name: string;
	JoinDate: string;
	Role: string;
	Paygrade: string;
}

const mock: Employee[] = [
	{
		ID: 1,
		Company: 'Proximus',
		Name: 'Jan Peeters',
		JoinDate: '2021-02-15',
		Role: 'Network Engineer',
		Paygrade: 'P3'
	},
	{
		ID: 2,
		Company: 'Telenet',
		Name: 'Emma Janssens',
		JoinDate: '2020-05-20',
		Role: 'Marketing Manager',
		Paygrade: 'M2'
	},
	{
		ID: 3,
		Company: 'Telenet',
		Name: 'Wouter Claes',
		JoinDate: '2019-11-05',
		Role: 'Software Developer',
		Paygrade: 'P2'
	},
	{
		ID: 4,
		Company: 'Proximus',
		Name: 'Marie Dubois',
		JoinDate: '2022-01-10',
		Role: 'Data Analyst',
		Paygrade: 'P1'
	},
	{
		ID: 5,
		Company: 'Proximus',
		Name: 'Pieter Mertens',
		JoinDate: '2018-07-01',
		Role: 'Senior Technician',
		Paygrade: 'T3'
	}
];

// The 'load' function loads the data for this page.
export const load: PageLoad = async ({ fetch }) => {
	let employees: Employee[] = mock;

	if (PUBLIC_API_URL) {
		await oauth2flow();

		try {
			const res = await HttpClient.request({
				url: PUBLIC_API_URL,
				init: {
					method: 'GET'
				},
				timeout: 5000
			});
			if (res.ok) {
				employees = await res.json();
			} else {
				console.error('API error:', res.status, res.statusText);
			}
		} catch (err) {
			console.error('Fetch failed:', err);
		}
	} else console.warn('PUBLIC_API_URL is not set. Using mock data.');

	return { employees };
};
