// source: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/b2c-sample
import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

import { loginRequest } from "./authConfig.js";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {

        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                return;
            });
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest);
        }
    }

    return (
        <div>
            <Button
                onClick={() => handleLogin("redirect")}
                color="inherit"
            >
                Login
            </Button>
        </div>
    )
};