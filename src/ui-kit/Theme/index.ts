import {createTheme} from "@mui/material";
import {deepPurple} from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[400],
        },
        secondary: {
            main: deepPurple[200],
        },
    }
});