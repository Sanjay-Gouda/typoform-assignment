import FormButton from "../UI/button";
import { useProgress } from "../../hooks/useProgress";

const Preview = () => {
  // const { email, firstName, lastName, role, industry, goal } =
  //   useContext(FormProgress);

  const { resetForm } = useProgress();

  return (
    <>
      <div className="preview-wrapper ">
        <div>
          <picture
            style={{ display: "block", height: "120px", width: "120px" }}
          >
            <img
              alt=""
              data-qa-loaded="true"
              src="https://images.typeform.com/images/2dpnUBBkz2VN/image/default"
              style={{ display: "block", height: "120px", width: "120px" }}
            />
          </picture>
          <h1>Thanks for completing this typeform</h1>
        </div>

        <FormButton label="Reset" handleClick={resetForm} />

        {/* <h1>Preview of filled form</h1>

        <p>FirstName:{firstName}</p>
        <p>LastName:{lastName}</p>
        <p>Industry of Company:{industry}</p>
        <p>Role:{role}</p>
        <p>Professional Goal:Sanjay</p>
        <p>Email:{email}</p> */}
      </div>
    </>
  );
};

export default Preview;
