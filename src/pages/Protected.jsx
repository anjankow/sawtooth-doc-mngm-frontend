// source: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/b2c-sample
import { useEffect, useState } from "react";

// Msal imports
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionType, InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "../auth/authConfig";

// Sample app imports
import Typography from '@mui/material/Typography';
import ProtectedData from "../components/ProtectedData";

// Material-ui imports
import Paper from '@mui/material/Paper';

const ProtectedContent = () => {
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [atsResponse, setAtsResponse] = useState(null);
    console.log('loading protected content')

    useEffect(() => {
        if (!atsResponse && account && inProgress === InteractionStatus.None) {
            const request = {
                ...loginRequest,
                account: account
            };
            instance.acquireTokenSilent(request).then((response) => {
                setAtsResponse(response);
            }).catch((e) => {
                if (e instanceof InteractionRequiredAuthError) {
                    instance.acquireTokenRedirect(request);
                }
            });
        }
    }, [account, inProgress, instance, atsResponse]);

    console.log(atsResponse)

    return (
        <Paper>
            {atsResponse ? <ProtectedData responseData={atsResponse} /> : null}
        </Paper>
    );
};

export function Protected() {
    const authRequest = {
        ...loginRequest
    };

    const ErrorComponent = ({ error }) => {
        return <Typography variant="h6">An Error Occurred: {error.errorCode}</Typography>;
    }

    const Loading = () => {
        return <Typography variant="h6">Authentication in progress...</Typography>
    }

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
            errorComponent={ErrorComponent}
            loadingComponent={Loading}
        >
            <ProtectedContent />
        </MsalAuthenticationTemplate>
    )
};
