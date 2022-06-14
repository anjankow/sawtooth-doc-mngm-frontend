import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import SignInSignOutButton from "./SignInSignOutButton";
import { Link as RouterLink } from "react-router-dom";


const NavBar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        <Link component={RouterLink} to="/" color="inherit" variant="h6">Home</Link>
                    </Typography>
                    <SignInSignOutButton />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;