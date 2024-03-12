import { motion } from "framer-motion";
import SelectOption from "../UI/select";
import FormHeading from "../UI/formHeading";
import FormButton from "../UI/button";
import { useProgress } from "../../hooks/useProgress";
import { useContext, useEffect, useState } from "react";
import AlertError from "../UI/alertError";
import { FormProgress } from "../../context/form-context";

type TOptions = {
  Label: string;
  value: string;
};

const Industry = () => {
  const { handleProgressCount, handleProgressbar } = useProgress();
  const { setIndustry } = useContext(FormProgress);
  const [isError, setIsError] = useState(false);

  const [selectedOption, setSelectedOption] = useState<TOptions>({
    value: "",
    Label: "",
  });

  useEffect(() => {
    if (selectedOption.value !== "") {
      setIsError(false);
    }
  }, [selectedOption]);

  const handleSubmit = () => {
    if (selectedOption.value === "") {
      setIsError(true);
    } else {
      setIsError(false);
      setIndustry(selectedOption.value);
      handleProgressCount();
      handleProgressbar();
    }
  };

  return (
    <>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ y: "40vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, stiffness: 200 }}
      >
        <div className="wrapper">
          <FormHeading
            heading="What industry is your company in?"
            subHeading="We will personalize your learning experience accordingly"
          />

          <SelectOption
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          {isError ? (
            <AlertError />
          ) : (
            <div style={{ position: "relative", zIndex: "-1" }}>
              <FormButton
                label="Ok"
                style={{ position: "absolute" }}
                handleClick={handleSubmit}
              />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Industry;
