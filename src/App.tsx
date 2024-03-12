import { useContext, useState } from "react";
import "./App.css";
import FormButton from "./components/UI/button";
import Name from "./components/forms/name";
import Email from "./components/forms/email";
import Select from "./components/UI/select";
import SelectOption from "./components/UI/select";
import Industry from "./components/forms/industry";
import LastName from "./components/forms/lastName";
import Role from "./components/forms/role";
import Goals from "./components/forms/goals";
import { FormProgress } from "./context/form-context";

function App() {
  // const [nextField, setNextField] = useState(0);
  const { progressCount } = useContext(FormProgress);

  // const handleNext = () => {
  //   setNextField((next) => next + 1);
  // };

  return (
    <>
      {progressCount === 0 ? (
        <Name />
      ) : progressCount === 1 ? (
        <LastName />
      ) : progressCount === 2 ? (
        <Industry />
      ) : progressCount === 3 ? (
        <Role />
      ) : progressCount === 4 ? (
        <Goals />
      ) : (
        <Email />
      )}

      {/* <FormButton label="Next" handleClick={handleNext} /> */}
    </>
  );
}

export default App;
