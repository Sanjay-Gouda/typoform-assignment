import React from "react";
import { motion } from "framer-motion";
import FormHeading from "../UI/formHeading";
import FormCheckbox from "../UI/checkbox";
import { useProgress } from "../../hooks/useProgress";
import FormButton from "../UI/button";
import { FormProgress } from "../../context/form-context";
const Goals = () => {
  const { handleProgressCount } = useProgress();
  const { firstName } = React.useContext(FormProgress);

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

          <FormCheckbox />

          <FormButton label="Next" handleClick={handleProgressCount} />
        </div>
      </motion.div>
    </>
  );
};

export default Goals;
