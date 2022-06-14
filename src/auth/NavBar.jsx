// source: https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/b2c-sample
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SignInSignOutButton from "./SignInSignOutButton";



const NavBar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <SignInSignOutButton />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;