// source: https://gist.githubusercontent.com/JayashanT/44fa803802fbcf207ecde539499e8f0e/raw/9367664869dbcee3c521c4d39b1d10d39fa1112e/b2c.js

import React from 'react';
import * as msal from 'msal'

const state = {
    stopLoopingRedirect: true,
    config: {
        scopes: [],
        cacheLocation: null,
    },
    launchApp: null,
    accessToken: null,
    msalObj: null,
}

const LOCAL_STORAGE = 'localStorage'
const SESSION_STORAGE = 'sessionStorage'
const AUTHORIZATION_KEY = 'Authorization'

var isIE = function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ") > -1;
    var msie11 = ua.indexOf("Trident/") > -1;
    return msie || msie11;
};

var B2C_SCOPES = {
    API_ACCESS: {
        scopes: ['https://graph.microsoft.com/openid', 'https://graph.microsoft.com/offline_access']
    }
};

var msalAppConfig = {
    auth: {
        clientId: 'bec9d628-b94f-474f-a681-0abf30268fde',
        authority: 'https://csunivie3.b2clogin.com/csunivie3.onmicrosoft.com/B2C_1_singin',
        redirectUri: 'http://localhost:3000',
        validateAuthority: false,
        postLogoutRedirectUri: 'window.location.origin'
    },
    cache: {
        cacheLocation: LOCAL_STORAGE,
        storeAuthStateInCookie: isIE()
    }
};

function acquireToken(successCallback) {
    const account = msalApp.getAccount()
    console.log('account')
    console.log(account)

    if (!account) {
        console.log('account is None, login redirect')
        msalApp.loginRedirect(B2C_SCOPES.API_ACCESS)
    } else {
        console.log('account is set, acquire token')
        msalApp.acquireTokenSilent(B2C_SCOPES.API_ACCESS).then(accessToken => {
            if (msalAppConfig.cache.cacheLocation === LOCAL_STORAGE) {
                window.localStorage.setItem(AUTHORIZATION_KEY, 'Bearer ' + accessToken)
            } else {
                window.sessionStorage.setItem(AUTHORIZATION_KEY, 'Bearer ' + accessToken)
            }
            console.log(accessToken)

            state.accessToken = accessToken
            if (state.launchApp) {
                state.launchApp()
            }
            if (successCallback) {
                successCallback()
            }
        }, error => {
            if (error) {
                console.log('error!')
                console.log(error)
                msalApp.acquireTokenRedirect(B2C_SCOPES.API_ACCESS)
            }
        })
    }
}

let msalApp;

var authentication = {
    initialize: () => {
        msalApp = new msal.UserAgentApplication(msalAppConfig)
    },
    run: (launchApp) => {
        console.log(state)
        state.launchApp = launchApp
        msalApp.handleRedirectCallback(error => {
            if (error) {
                console.log('redirect callback error!')
                const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token."
                console.log(errorMessage)
            }
        });
        acquireToken();
    },
    required: (WrappedComponent, renderLoading) => {
        console.log('returning react component')
        return class extends React.Component {
            constructor(props) {
                super(props)
                this.state = {
                    signedIn: false,
                    error: null
                }
            }

            render() {
                console.log('rendering...')
                if (this.state.signedIn) {
                    return (<WrappedComponent {...this.props} />)
                }
                return typeof renderLoading === 'function' ? renderLoading() : null
            }
        }
    },

    signOut: function signOut() {
        return msalApp.logout();
    },
    getAccessToken: function getAccessToken() {
        console.log('getting access token')
        return state.accessToken;
    }
};

export default authentication;