import { useState } from "react";
import "./App.css";
import FormButton from "./components/UI/button";
import Name from "./components/forms/name";
import Email from "./components/forms/email";
import Select from "./components/UI/select";
import SelectOption from "./components/UI/select";
import Industry from "./components/forms/industry";

function App() {
  const [nextField, setNextField] = useState(0);

  const handleNext = () => {
    setNextField((next) => next + 1);
  };

  return (
    <>
      {nextField === 0 ? <Name /> : nextField === 1 ? <Email /> : <Industry />}

      <FormButton label="Next" handleClick={handleNext} />
    </>
  );
}

export default App;
