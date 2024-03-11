import * as React from "react";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Sheet from "@mui/joy/Sheet";

const FormCheckbox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        "& > div": {
          p: 2,
          borderRadius: "md",
          display: "flex",
          background: "black",
        },
      }}
    >
      <Sheet variant="outlined">
        <Checkbox overlay label="Focus on me" style={{ color: "white" }} />
      </Sheet>
      <Sheet variant="outlined">
        <Checkbox overlay label="Focus on me" style={{ color: "white" }} />
      </Sheet>
      <Sheet variant="outlined">
        <Checkbox overlay label="Focus on me" style={{ color: "white" }} />
      </Sheet>
    </Box>
  );
};

export default FormCheckbox;
