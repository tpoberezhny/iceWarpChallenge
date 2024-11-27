import Button from "./Button";

type ButtonGroupProps = {
  buttons: { label: string; onClick: () => void }[];
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="button-group">
      {buttons.map((btn, index) => (
        <Button key={index} label={btn.label} onClick={btn.onClick} />
      ))}
    </div>
  );
};

export default ButtonGroup;
