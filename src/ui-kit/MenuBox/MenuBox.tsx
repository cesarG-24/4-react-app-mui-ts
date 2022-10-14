import {Drawer} from "@mui/material";
import {deepPurple} from '@mui/material/colors';

import {Lists} from "../Lists";


interface Props {
    readonly open?: boolean,
    readonly onClose?: (open: boolean) => void
    readonly variant?: any

}

export const MenuBox = ({open, onClose, variant}: Props) => {


    return (
        <Drawer sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                backgroundColor: deepPurple[100],
                boxSizing: 'border-box',
            },
        }}
                anchor='left'
                variant={variant}
                open={open}
                onClose={onClose}
        >
            <Lists/>

        </Drawer>
    )
}
