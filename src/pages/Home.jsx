// source: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/b2c-sample
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';

export function Home() {
    return (
        <>
            <AuthenticatedTemplate>
                <Navigate to="/protected" />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <Typography variant="h6">
                    <center>Please sign-in to access the system.</center>
                </Typography>
            </UnauthenticatedTemplate>
        </>
    );
}