import { Dns, Home } from "@mui/icons-material";

export const menuProps = {
    pages: [
    {
        pageName: "Home",
        pageIcon: <Home/>,
        pageRoute: "/home"
    },
    {
        pageName: "Change Env",
        pageIcon: <Dns/>,
        pageRoute: "/env"
    }
    ],
    width: "240px",
    side: "left",
}