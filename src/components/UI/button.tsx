import Button from "@mui/material/Button";

type TButtonProps = {
  label?: string;
  handleClick: () => void;
  style?: any;
};

const FormButton = ({ label, style, handleClick }: TButtonProps) => {
  return (
    <>
      <Button variant="contained" style={style} onClick={handleClick}>
        {label}
      </Button>
    </>
  );
};

export default FormButton;
