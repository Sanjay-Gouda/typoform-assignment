import { useContext } from "react";
import { FormProgress } from "../context/form-context";

export const useProgress = () => {
  let { setProgressCount } = useContext(FormProgress);

  const handleProgressCount = () => {
    setProgressCount((count) => count + 1);
  };

  return {
    handleProgressCount,
  };
};
