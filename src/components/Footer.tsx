import ButtonGroup from "./ButtonGroup";

type FooterProps = {
  description?: string;
  buttons: {label: string; onClick: () => void}[];
};

const Footer: React.FC<FooterProps> = ({description, buttons}) => {
  return (
    <div className="footer">
      {description && <p>{description}</p>}
      <ButtonGroup buttons={buttons} />
    </div>
  )
}

export default Footer;