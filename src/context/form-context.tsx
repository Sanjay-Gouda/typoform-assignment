import { createContext, useState } from "react";

export const FormProgress = createContext(0);

export const FormContext = ({ children }) => {
  const [progressCount, setProgressCount] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [industry, setIndustry] = useState("");
  const [goal, setGoal] = useState([]);
  return (
    <>
      <FormProgress.Provider
        value={{
          email,
          setEmail,
          goal,
          setGoal,
          industry,
          progressCount,
          setProgressCount,
          lastName,
          setLastName,
          firstName,
          setFirstName,
          setIndustry,
          setRole,
          role,
          progress,
          setProgress,
        }}
      >
        {children}
      </FormProgress.Provider>
    </>
  );
};
