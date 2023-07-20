import { Box } from "@mui/material";
import AppNavBar from "../navigation/Navbar";
import TheodorMenu from "../navigation/Menu";

const AppLayout = ({ children }) => {
    return (
        <Box minHeight="100vh">
            <TheodorMenu>
                <AppNavBar/>
            </TheodorMenu>

            <Box 
                sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: `repeat(${children.length}, 1fr)`,
                    padding: "1rem"
                }}>
                    {children}
            </Box>
        </Box>
    );
};

export default AppLayout;
