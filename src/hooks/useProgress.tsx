import { useContext } from "react";
import { FormProgress } from "../context/form-context";

export const useProgress = () => {
  let { setProgressCount, setProgress, setEmail, setFirstName, setLastName } =
    useContext(FormProgress);

  const handleProgressCount = () => {
    setProgressCount((count) => count + 1);
  };

  const resetForm = () => {
    setProgress(0);
    setProgressCount(0);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleProgressbar = () => {
    setProgress((count) => count + 18);
  };

  return {
    handleProgressCount,
    handleProgressbar,
    resetForm,
  };
};
