import React, { useState } from "react";
import { motion } from "framer-motion";
import FormHeading from "../UI/formHeading";
import FormCheckbox from "../UI/checkbox";
import { useProgress } from "../../hooks/useProgress";
import FormButton from "../UI/button";
import { FormProgress } from "../../context/form-context";
import AlertError from "../UI/alertError";
const Goals = () => {
  const { handleProgressCount, handleProgressbar } = useProgress();
  const { firstName, setGoal } = React.useContext(FormProgress);

  const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);
  const [isError, setIsError] = useState({
    isSelected: false,
    isTwoOptionSelected: false,
  });
  const handleChange = (goals: string) => {
    if (selectedGoals.includes(goals)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== goals));
    } else {
      if (selectedGoals.length < 2) {
        setSelectedGoals([...selectedGoals, goals]);
      }
    }
    setIsError({ isSelected: false, isTwoOptionSelected: false });
  };

  const handleSubmit = () => {
    if (selectedGoals.length === 0) {
      setIsError({ isSelected: true, isTwoOptionSelected: false });
    } else if (selectedGoals.length < 2) {
      setIsError({ isSelected: false, isTwoOptionSelected: true });
    } else {
      setGoal(selectedGoals);
      handleProgressCount();
      handleProgressbar();
    }
  };

  return (
    <>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ y: "40vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, stiffness: 200 }}
      >
        <div className="wrapper">
          <FormHeading
            heading={`${firstName}, what's your professional goal for the next 12 months?`}
          />

          <FormCheckbox
            onChange={(goal) => handleChange(goal)}
            selectedGoals={selectedGoals}
          />

          {isError.isSelected ? (
            <AlertError message={`Oops! Please make a selection`} />
          ) : isError.isTwoOptionSelected ? (
            <AlertError message={`Please select more choices`} />
          ) : (
            <FormButton label="Ok" handleClick={handleSubmit} />
          )}

          {/* <FormButton label="Next" handleClick={handleSubmit} /> */}
        </div>
      </motion.div>
    </>
  );
};

export default Goals;
