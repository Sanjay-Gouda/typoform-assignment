import { createContext, useState } from "react";

export const FormProgress = createContext(0);

export const FormContext = ({ children }) => {
  const [progressCount, setProgressCount] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  return (
    <>
      <FormProgress.Provider
        value={{
          progressCount,
          setProgressCount,
          lastName,
          setLastName,
          firstName,
          setFirstName,
          setRole,
          role,
        }}
      >
        {children}
      </FormProgress.Provider>
    </>
  );
};
