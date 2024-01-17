export const oktaConfig = {
    clientId:'0oae9l1axd776bgGe5d7',
    issuer: 'https://dev-17510382.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}