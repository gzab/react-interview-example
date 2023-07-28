import * as React from "react";
import MUIList from "@mui/material/List";
import { ReactNode } from "react";
import { Box } from "@mui/material";

type Props<T> = {
  set: T[];
  renderElement: (element: T) => ReactNode;
};

export const List = <T extends { id: number }>(props: Props<T>) => {
  return (
    <MUIList>
      {props.set.map((element, index) => (
        <Box key={index} sx={{ paddingTop: 2, paddingLeft: 2 }}>
          {props.renderElement(element)}
        </Box>
      ))}
    </MUIList>
  );
};
