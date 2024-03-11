import Inputfield from "../UI/inputfield";
import FormButton from "../UI/button";
import { motion } from "framer-motion";
import RadionButton from "../UI/radioButton";
import FormCheckbox from "../UI/checkbox";

const Name = () => {
  return (
    <>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ y: "40vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, stiffness: 200 }}
      >
        <div className="wrapper">
          <h1>What's your first name? *</h1>

          {/* <RadionButton /> */}
          <FormCheckbox />
          {/* <Inputfield placeholder="Type your name here" /> */}
        </div>
      </motion.div>
    </>
  );
};

export default Name;
