import { useContext } from "react";
import { FormProgress } from "../context/form-context";

export const useProgress = () => {
  const {
    setProgressCount,
    setProgress,
    progressCount,
    progress,
    setEmail,
    setFirstName,
    setLastName,
  } = useContext(FormProgress);

  const handleProgressCount = () => {
    setProgressCount(progressCount + 1);
  };

  const resetForm = () => {
    setProgress(0);
    setProgressCount(0);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleProgressbar = () => {
    setProgress(progress + 18);
  };

  return {
    handleProgressCount,
    handleProgressbar,
    resetForm,
  };
};
