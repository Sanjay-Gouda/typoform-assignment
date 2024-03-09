import React from "react";
import Inputfield from "../UI/inputfield";
import FormButton from "../UI/button";
import { motion } from "framer-motion";

const Email = () => {
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

          <Inputfield placeholder="Enter email address" />
          {/* <FormButton /> */}
        </div>
      </motion.div>
    </>
  );
};

export default Email;
