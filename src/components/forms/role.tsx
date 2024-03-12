import React, { useContext, useEffect, useState } from "react";
import FormHeading from "../UI/formHeading";
import Inputfield from "../UI/inputfield";
import { motion } from "framer-motion";
import RadionButton from "../UI/radioButton";
import { useProgress } from "../../hooks/useProgress";
import FormButton from "../UI/button";
import AlertError from "../UI/alertError";
import { FormContext, FormProgress } from "../../context/form-context";

const Role = () => {
  const { handleProgressCount } = useProgress();

  const { setRole } = useContext(FormProgress);

  const [selectedRole, setSelectedRole] = useState<number>(null);
  const [isError, setIsError] = useState(false);

  const handleClick = (id: number, value: string) => {
    setSelectedRole(id);
    console.log(value);
    setRole(value);
    setIsError(false);
  };

  const handleSubmit = () => {
    if (selectedRole === null) {
      setIsError(true);
    } else {
      setIsError(false);
      handleProgressCount();
    }
  };

  return (
    <motion.div
      className="col-md-6 offset-md-3"
      initial={{ y: "40vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, stiffness: 200 }}
    >
      <div className="wrapper">
        <FormHeading
          heading="Your role in your company?"
          subHeading="We want to understand how you spend your time right now."
        />

        <RadionButton
          onClick={(id, value) => handleClick(id, value)}
          selectedRole={selectedRole}
        />

        {isError ? (
          <AlertError message={`Oops! Please make a selection`} />
        ) : (
          <FormButton label="Submit" handleClick={handleSubmit} />
        )}
      </div>
    </motion.div>
  );
};

export default Role;
