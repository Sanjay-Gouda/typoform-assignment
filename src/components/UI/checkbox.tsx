import * as React from "react";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Sheet from "@mui/joy/Sheet";
import styled from "styled-components";
import { FormContext, FormProgress } from "../../context/form-context";

const goals = [
  "Get Hired",
  "Get Promoted",
  "Connect with like-minded people",
  "Structured approach to growth",
  "Build a growth team",
];
const foundergoals = [
  "Connect with like-minded people",
  "Structured approach to growth",
  "Build a growth team",
];
const StyledSheet = styled(Sheet)`
  &.MuiSheet-root:hover {
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
`;
const StyledCheckbox = styled(Checkbox)`
  // &.Mui-checked {
  //   background-color: rgba(255, 255, 255, 0.3) !important;
  // }

  .MuiCheckbox-label {
    color: ${(props) => (props.disabled ? "grey" : "white")};
  }
`;

const FormCheckbox = () => {
  const { role } = React.useContext(FormProgress);

  const prefrenceGoal = role === "Founder or CXO" ? foundergoals : goals;

  const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);

  const handleChange = (goals: string) => {
    if (selectedGoals.includes(goals)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== goals));
    } else {
      if (selectedGoals.length < 2) {
        setSelectedGoals([...selectedGoals, goals]);
      }
    }
  };

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
      {prefrenceGoal?.map((goal, ind) => (
        <StyledSheet variant="outlined" key={ind}>
          <StyledCheckbox
            overlay
            label={goal}
            checked={selectedGoals.includes(goal)}
            style={{ color: "white" }}
            disabled={
              selectedGoals.length === 2 && !selectedGoals.includes(goal)
            }
            onChange={() => handleChange(goal)}
          />
        </StyledSheet>
      ))}
    </Box>
  );
};

export default FormCheckbox;
