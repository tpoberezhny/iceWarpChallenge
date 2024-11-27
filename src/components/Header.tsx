import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";

type HeaderProps = {
  icon: string;
  title: string;
  buttons: {label: string; onClick: () => void}[];
}

const Header: React.FC<HeaderProps> = ({ icon, title, buttons }) => {
  return (
    <div className="header">
      <Icon icon={icon} />
      <h2>{title}</h2>
      <ButtonGroup buttons={buttons} />
    </div>
  )
};


export default Header;