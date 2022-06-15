// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: 'bec9d628-b94f-474f-a681-0abf30268fde',
        authority: 'https://csunivie3.b2clogin.com/csunivie3.onmicrosoft.com/B2C_1_singin',
        knownAuthorities: ['https://csunivie3.b2clogin.com', 'https://csunivie3.onmicrosoft.com/23442958-08df-4782-85fa-d3f834120fbb'],
        redirectUri: 'http://localhost:3000',
        validateAuthority: false,
        postLogoutRedirectUri: 'http://localhost:3000'
    }
};

// Scopes you add here will be prompted for consent during login
export const loginRequest = {
    scopes: ['https://csunivie3.onmicrosoft.com/23442958-08df-4782-85fa-d3f834120fbb/docs.sign',
        'https://csunivie3.onmicrosoft.com/23442958-08df-4782-85fa-d3f834120fbb/docs.write',
        'https://csunivie3.onmicrosoft.com/23442958-08df-4782-85fa-d3f834120fbb/docs.read']
};
