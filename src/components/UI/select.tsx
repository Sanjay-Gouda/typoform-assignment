import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import { OPTIONS } from "../../constants/industries";

type TSelectProps = {
  selectedOption: unknown;
  setSelectedOption: (option: any) => void;
};

const StyledSelect = styled(Select)`
  width: 100% !important;

  .react-select__control {
    background: black !important;
  }

  .react-select__menu {
    background: rgb(26, 26, 26) !important;
    color: white !important;
    z-index: 9999;
  }
  .react-select__option:hover {
    background: rgb(77, 77, 77) !important;
  }

  .react-select__value-container {
    font-size: 1.25em !important;
  }

  .react-select__single-value {
    color: white !important;
  }
`;

const SelectOption = ({ selectedOption, setSelectedOption }: TSelectProps) => {
  // const [selectedOption, setSelectedOption] = useState<unknown>(null);

  return (
    <>
      <StyledSelect
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={OPTIONS}
        placeholder="Select an Option"
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </>
  );
};

export default SelectOption;
