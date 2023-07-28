import React from "react";
import MUITextField from "@mui/material/TextField";

type Props = {
    label: string;
    value: string;
}
export const TextField = (props: Props) => {
    return (
        <MUITextField
            id="standard-read-only-input"
            label={props.label}
            defaultValue={props.value}
            InputProps={{
                readOnly: true,
            }}
            variant="standard"
        />
    );
}