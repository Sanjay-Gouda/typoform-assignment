import { createContext, useState } from "react";

interface FormProgressContextType {
  email: string;
  setEmail: (email: string) => void;
  goal: unknown[];
  setGoal: (goal: unknown[]) => void;
  industry: string;
  progressCount: number;
  setProgressCount: (count: any) => void;
  lastName: string;
  setLastName: (lname: string) => void;
  firstName: string;
  setFirstName: (fname: string) => void;
  setIndustry: (industry: string) => void;
  setRole: (role: string) => void;
  role: string;
  progress: number;
  setProgress: (count: any) => void;
}

export const FormProgress = createContext<FormProgressContextType | undefined>(
  undefined
);

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
