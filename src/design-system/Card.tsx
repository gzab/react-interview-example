import * as React from 'react';
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Button, CardActions, Typography} from "@mui/material";

type Props = {
    title: string;
    action: () => void;
}

export const Card = (props: Props) => {
    return (
        <MUICard sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.action}>{"View"}</Button>
            </CardActions>
        </MUICard>
    );
}