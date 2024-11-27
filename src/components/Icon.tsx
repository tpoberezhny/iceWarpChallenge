type IconProps = {
  icon: string;
};

const Icon: React.FC<IconProps> = ({icon}) => {
  return <div className="icon">{icon}</div>
}

export default Icon;