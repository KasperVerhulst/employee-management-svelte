/*
This file will export a Load function that exports the data required by the +page.svelte
This is strictly a feature of SvelteKit, so it won't work in a regular Svelte component.
*/


import type { PageLoad } from './$types';

interface Employee {
    ID: number;
    Company: string;
    Name: string;
    JoinDate: string;
    Role: string;
    Paygrade: string;
}

const employees: Employee[] = [
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
	},
	{
		ID: 6,
		Company: 'Telenet',
		Name: 'Julie Lambert',
		JoinDate: '2023-03-12',
		Role: 'HR Business Partner',
		Paygrade: 'H2'
	},
	{
		ID: 7,
		Company: 'Proximus',
		Name: 'Thomas Leroy',
		JoinDate: '2020-09-08',
		Role: 'Customer Support Agent',
		Paygrade: 'S1'
	},
	{
		ID: 8,
		Company: 'Telenet',
		Name: 'Laura Simon',
		JoinDate: '2021-06-22',
		Role: 'Product Owner',
		Paygrade: 'M1'
	},
	{
		ID: 9,
		Company: 'Telenet',
		Name: 'Dries Goossens',
		JoinDate: '2022-08-30',
		Role: 'Field Technician',
		Paygrade: 'T2'
	},
	{
		ID: 10,
		Company: 'Proximus',
		Name: 'Sarah Martin',
		JoinDate: '2017-04-18',
		Role: 'Sales Director',
		Paygrade: 'M4'
	},
	{
		ID: 11,
		Company: 'Telenet',
		Name: 'Michiel Wouters',
		JoinDate: '2023-02-02',
		Role: 'Junior Developer',
		Paygrade: 'P1'
	},
	{
		ID: 12,
		Company: 'Proximus',
		Name: 'Eva Jacobs',
		JoinDate: '2019-10-14',
		Role: 'Systems Administrator',
		Paygrade: 'P3'
	},
	{
		ID: 13,
		Company: 'Proximus',
		Name: 'Robbe Willems',
		JoinDate: '2021-12-07',
		Role: 'Network Analyst',
		Paygrade: 'P2'
	},
	{
		ID: 14,
		Company: 'Telenet',
		Name: 'Lisa Dupont',
		JoinDate: '2022-07-19',
		Role: 'Graphic Designer',
		Paygrade: 'C2'
	},
	{
		ID: 15,
		Company: 'Proximus',
		Name: 'Louis Maes',
		JoinDate: '2020-03-03',
		Role: 'Finance Manager',
		Paygrade: 'M3'
	}
];

// The 'load' function loads the data for this page.
export const load: PageLoad = () => {
    return {
        employees: employees
    };};
