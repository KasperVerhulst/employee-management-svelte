import type { PageLoad } from './../$types';
import { redirect } from '@sveltejs/kit';
import { exchangeTokens } from '$lib/oauth';

export const ssr = false;

export const load: PageLoad = async ({ url }) => {
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');

	if (code && state) {
		try {
			await exchangeTokens(code, state);
			// Redirect to the home page or another page after successful authentication
		} catch (error) {
			console.error('Error during token exchange:', error);
			// Handle error (e.g., show an error message to the user)
		}
	} else {
		console.warn('Authorization code or state is missing in the callback URL.');
	}
	throw redirect(302, '/');
};
