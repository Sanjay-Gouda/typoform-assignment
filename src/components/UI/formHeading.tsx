import React from "react";

type THeadingProps = {
  heading: string;
  subHeading?: string;
};

const FormHeading = ({ heading, subHeading }: THeadingProps) => {
  return (
    <>
      <div
        className="form-heading"
        style={{ display: "flex", flexDirection: "column", gap: "2px" }}
      >
        <h1>{heading}</h1>
        {subHeading && <p>{subHeading}</p>}
      </div>
    </>
  );
};

export default FormHeading;
