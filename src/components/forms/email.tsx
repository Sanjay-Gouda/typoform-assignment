import React, { useContext, useState } from "react";
import Inputfield from "../UI/inputfield";
import FormButton from "../UI/button";
import { motion } from "framer-motion";
import { FormProgress } from "../../context/form-context";
import AlertError from "../UI/alertError";
import { useProgress } from "../../hooks/useProgress";

const Email = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { handleProgressCount, handleProgressbar } = useProgress();

  const { email, setEmail } = useContext(FormProgress);
  const [isError, setIsError] = useState(false);
  const [inValidError, setInvalidError] = useState(false);

  // const handleSubmit = () => {
  //   fetch("https://eo3oi83n1j77wgp.m.pipedream.net", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: new URLSearchParams(formData),
  //   })
  //     .then((response) => response.text())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error:", error));
  // };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsError(false);
    setInvalidError(false);
  };

  const handleSubmit = () => {
    if (email === "") {
      setIsError(true);
    } else if (!emailRegex.test(email)) {
      setInvalidError(true);
    } else {
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
          <h1>Please give your email address? *</h1>

          <Inputfield
            placeholder="name@example.com"
            onChange={handleChange}
            value={email}
          />

          {isError ? (
            <AlertError />
          ) : inValidError ? (
            <AlertError message="Hmm... that email doesn't look right..." />
          ) : (
            <FormButton label="Submit" handleClick={handleSubmit} />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Email;
