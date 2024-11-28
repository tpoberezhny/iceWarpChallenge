type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
