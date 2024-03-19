import { createContext, useState } from "react";

type TFormProgressContextType = {
  email: string;
  setEmail: (email: string) => void;
  goal: unknown[];
  setGoal: (goal: unknown[]) => void;
  industry: string;
  progressCount: number;
  setProgressCount: (count: number) => void;
  lastName: string;
  setLastName: (lname: string) => void;
  firstName: string;
  setFirstName: (fname: string) => void;
  setIndustry: (industry: string) => void;
  setRole: (role: string) => void;
  role: string;
  progress: number;
  setProgress: (count: number) => void;
};

export const FormProgress = createContext<TFormProgressContextType>({
  email: "",
  firstName: "",
  goal: [{}],
  industry: "",
  lastName: "",
  progress: 0,
  progressCount: 0,
  role: "",
  setEmail: () => {},
  setFirstName: () => {},
  setGoal: () => {},
  setIndustry: () => {},
  setLastName: () => {},
  setProgress: () => {},
  setProgressCount: () => {},
  setRole: () => {},
});

export const FormContext = ({ children }) => {
  const [progressCount, setProgressCount] = useState<number>(0);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [industry, setIndustry] = useState<string>("");
  const [goal, setGoal] = useState<unknown>([]);
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
