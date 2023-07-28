import { Box } from "@mui/material";
import { Children, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Form = (props: Props) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {Children.toArray(props.children).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </Box>
  );
};
