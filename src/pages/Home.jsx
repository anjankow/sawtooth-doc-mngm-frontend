import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from "react-router-dom";

export function Home() {
    return (
        <>
            <AuthenticatedTemplate>
                <Button component={RouterLink} to="/protected" variant="contained" color="primary">Request Access Token</Button>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <Typography variant="h6">
                    <center>Please sign-in to acquire access tokens.</center>
                </Typography>
            </UnauthenticatedTemplate>
        </>
    );
}