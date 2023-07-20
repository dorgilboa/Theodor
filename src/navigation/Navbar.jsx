import { Menu } from "@mui/icons-material";
import { AppBar, Container, IconButton, Toolbar } from "@mui/material";
import { useContext } from "react";
import { toggleMenuOpenContext } from "./Menu";

const AppNavBar = () => {
    const toggleOpen = useContext(toggleMenuOpenContext);
    console.log(toggleOpen);
    
    return (
        <AppBar color="secondary" position="static">
            <Container maxWidth="fit-content">
                <Toolbar disableGutters>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr:1}} onClick={toggleOpen}>
                        <Menu/>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppNavBar;