import Button from "@mui/material/Button";

type TButtonProps = {
  label?: string;
  handleClick: () => void;
};

const FormButton = ({ label, handleClick }: TButtonProps) => {
  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        {label}
      </Button>
    </>
  );
};

export default FormButton;
