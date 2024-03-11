import * as React from "react";
import Box from "@mui/joy/Box";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import styled from "styled-components";

const StyledSheet = styled(Sheet)`
  &.MuiSheet-colorNeutral {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  &.MuiRadio-label {
    color: #ffffff !important;
  }

  //   &.MuiRadio-action {
  //     &:hover {
  //       background-color: rgba(255, 255, 255, 0.3) !important;
  //     }
  //   }
  //   &:hover {
  //     background-color: rgba(255, 255, 255, 0.3) !important;
  //   }
`;

const StyledRadio = styled(Radio)`
  &.MuiRadio-label {
    color: #ffffff !important;
  }
  //   &.MuiRadio-action {
  //     &:hover {
  //       background-color: rgba(255, 255, 255, 0.3) !important;
  //     }
  //   }
  //   &:hover {
  //     background-color: rgba(255, 255, 255, 0.3) !important;
  //   }
`;

const RadionButton = () => {
  return (
    <Box sx={{ width: 300 }}>
      <RadioGroup
        aria-labelledby="storage-label"
        defaultValue="512GB"
        size="lg"
        sx={{ gap: 1.5, backgroundColor: "#000000" }}
      >
        {["512GB", "1TB", "2TB"].map((value) => (
          <StyledSheet
            key={value}
            sx={{
              p: 2,
              borderRadius: "md",
              boxShadow: "sm",
            }}
          >
            <StyledRadio
              label={`${value} SSD storage`}
              overlay
              disableIcon
              value={value}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: "lg",
                    fontSize: "md",
                    color: checked ? "white" : "white",
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      "--variant-borderWidth": "2px",
                      "&&": {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </StyledSheet>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default RadionButton;
