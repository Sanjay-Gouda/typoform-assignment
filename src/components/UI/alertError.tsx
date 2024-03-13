import React from "react";
import { motion } from "framer-motion";
import { Alert } from "@mui/material";

type TAlertProps = {
  message?: string;
};

const AlertError = ({ message }: TAlertProps) => {
  return (
    <>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ y: "5vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, stiffness: 200 }}
      >
        <Alert severity="error">{message || `Please Fill this in`}</Alert>
      </motion.div>
    </>
  );
};

export default AlertError;
