import { useContext, useEffect, useRef, useState } from "react";
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
import LoadingBar from "react-top-loading-bar";
import Logo from "./assets/logo.svg";
import { useProgress } from "./hooks/useProgress";
import Preview from "./components/preview";

function App() {
  const { progressCount, progress, setProgress } = useContext(FormProgress);

  return (
    <>
      <LoadingBar
        color="#0076FE"
        shadow={true}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="flex flex-col" style={{ width: "100%", height: "100vh" }}>
        <div style={{ height: "10vh", padding: "10px" }}>
          <div style={{ width: "150px", height: "60px" }}>
            <img
              src={Logo}
              className="logo"
              alt="Vite logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          ) : progressCount === 5 ? (
            <Email />
          ) : (
            <Preview />
          )}
        </div>
      </div>

      {/* <FormButton label="Next" handleClick={handleNext} /> */}
    </>
  );
}

export default App;
