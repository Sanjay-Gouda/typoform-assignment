import Inputfield from "../UI/inputfield";
import FormButton from "../UI/button";
import { motion } from "framer-motion";
import RadionButton from "../UI/radioButton";
import FormCheckbox from "../UI/checkbox";
import FormHeading from "../UI/formHeading";
import { useContext, useState } from "react";
import { FormProgress } from "../../context/form-context";
import { useProgress } from "../../hooks/useProgress";
import { Alert } from "@mui/material";
import AlertError from "../UI/alertError";

const Name = () => {
  const { handleProgressCount } = useProgress();
  const { firstName, setFirstName } = useContext(FormProgress);

  const [isError, setIsError] = useState(false);

  const handleChange = (e: any) => {
    setFirstName(e.target.value);
    setIsError(false);
  };

  const handleSubmit = () => {
    if (firstName === "") {
      setIsError(true);
    } else {
      handleProgressCount();
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
          <FormHeading heading="What's your first name?" />
          <Inputfield
            placeholder="Type your name here"
            onChange={handleChange}
            value={firstName}
          />
        </div>
        {isError ? (
          <AlertError />
        ) : (
          <FormButton label="Next" handleClick={handleSubmit} />
        )}
      </motion.div>
    </>
  );
};

export default Name;
