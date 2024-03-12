import { Box, Input } from "@mui/material";
import styled from "styled-components";

type TInputprops = {
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
};

const StyledInputField = styled(Input)`
  &.MuiInputBase-root {
    &::before {
      border-bottom: 1px solid #ffffff !important;
    }
  }
  color: #ffffff !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
`;

const Inputfield = ({ placeholder, onChange, value }: TInputprops) => {
  const ariaLabel = { "aria-label": "description" };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <StyledInputField
          defaultValue=""
          inputProps={ariaLabel}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          style={{ width: "100%", fontSize: "1.75em" }}
        />
      </Box>
    </>
  );
};

export default Inputfield;
