import { useContext, useState } from "react";
import { useProgress } from "../../hooks/useProgress";
import FormButton from "../UI/button";
import FormHeading from "../UI/formHeading";
import Inputfield from "../UI/inputfield";
import { motion } from "framer-motion";
import { FormProgress } from "../../context/form-context";
import AlertError from "../UI/alertError";

const LastName = () => {
  const { handleProgressCount } = useProgress();
  const { firstName, lastName, setLastName } = useContext(FormProgress);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setLastName(e.target.value);
    setIsError(false);
  };

  const handleSubmit = () => {
    if (lastName === "") {
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
          <FormHeading heading={`and your last name,${firstName}`} />

          <Inputfield
            placeholder="Type your answer here..."
            value={lastName}
            onChange={handleChange}
          />
          {/* <FormButton /> */}

          {isError ? (
            <AlertError />
          ) : (
            <FormButton label="Next" handleClick={handleSubmit} />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default LastName;
