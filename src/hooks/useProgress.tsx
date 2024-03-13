import { useContext } from "react";
import { FormProgress } from "../context/form-context";

export const useProgress = () => {
  const { setProgressCount, setProgress, setEmail, setFirstName, setLastName } =
    useContext(FormProgress);

  const handleProgressCount = () => {
    setProgressCount((count: any) => count + 1);
  };

  const resetForm = () => {
    setProgress(0);
    setProgressCount(0);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleProgressbar = () => {
    setProgress((count: any) => count + 18);
  };

  return {
    handleProgressCount,
    handleProgressbar,
    resetForm,
  };
};
