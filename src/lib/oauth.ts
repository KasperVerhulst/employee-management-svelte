import {
	PUBLIC_SCOPE,
	PUBLIC_WEB_OAUTH_CLIENT,
	PUBLIC_WELL_KNOWN,
	PUBLIC_REDIRECT_URI
} from '$env/static/public';
import * as forgerock from '@forgerock/javascript-sdk';

let initializeSDK: Promise<void> | null = null;

/**
 * Initializes the ForgeRock SDK configuration.
 */
function initialize(): Promise<void> {
	if (!initializeSDK) {
		initializeSDK = forgerock.Config.setAsync({
			clientId: PUBLIC_WEB_OAUTH_CLIENT,
			redirectUri: PUBLIC_REDIRECT_URI,
			scope: PUBLIC_SCOPE,
			serverConfig: {
				wellknown: PUBLIC_WELL_KNOWN
			}
		});
		console.debug('ForgeRock SDK configured successfully.');
	} else {
		console.debug('ForgeRock SDK is already initialized.');
	}
	return initializeSDK;
}

export async function oauth2flow(): Promise<forgerock.OAuth2Tokens | void> {
	await initialize(); //ensure SDK is initialized
	const tokens = await forgerock.TokenManager.getTokens({
		login: 'redirect', // Redirect to the server or the web app that handles authentication
		forceRenew: false, // Immediately return stored tokens, if they exist
		skipBackgroundRequest: true, // Regardless of session status, redirect to the authorization server to initiate the OAuth 2.0 flow
		query: {
			acr_values: 'PersonaLogin'
		}
	});
	console.log('Tokens:', tokens);
	return tokens;
}

export async function exchangeTokens(
	code: string,
	state: string
): Promise<forgerock.OAuth2Tokens | void> {
	await initialize(); //ensure SDK is initialized

	// Exchange the authorization code for tokens
	const tokens = await forgerock.TokenManager.getTokens({
		query: {
			code,
			state
		}
	});

	console.log('Tokens received:', tokens);
	return tokens;
}

export async function checkTokenScope(requiredScope: string): Promise<boolean> {
	const tokens = await forgerock.TokenStorage.get();
	const accessToken = tokens?.accessToken;
	if (!accessToken) {
		return false;
	}

	// Decode the JWT access token
	const payload = JSON.parse(atob(accessToken.split('.')[1]));

	// Extract the scopes from the token payload
	const tokenScopes: string[] = payload.scope ? payload.scope : [];
	if (tokenScopes.includes(requiredScope)) {
		return true;
	} else {
		return false;
	}
}
