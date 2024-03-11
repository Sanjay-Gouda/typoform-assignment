import { motion } from "framer-motion";
import SelectOption from "../UI/select";

const Industry = () => {
  return (
    <>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ y: "40vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, stiffness: 200 }}
      >
        <div className="wrapper">
          <h1>What industry is your company in? *</h1>

          <SelectOption />
        </div>
      </motion.div>
    </>
  );
};

export default Industry;
