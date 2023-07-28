import * as React from 'react';
import MUIDrawer from '@mui/material/Drawer';
import {ReactNode} from "react";

type Props = {
    open: boolean;
    onClose: (event: Object) => void;
    children: ReactNode;
}

export const Drawer = (props: Props) => {
    return (
        <MUIDrawer
            anchor={"right"}
            open={props.open}
            onClose={props.onClose}
        >
            {props.children}
        </MUIDrawer>
);
}