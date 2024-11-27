import ButtonGroup from "./ButtonGroup";

type FooterProps = {
  description?: string;
  buttons: { label: string; onClick: () => void }[];
};

const Footer: React.FC<FooterProps> = ({ description, buttons }) => {
  return (
    <div className="footer">
      <div className="footer-description">
        {description && <p>{description}</p>}
      </div>
      <div className="footer-buttons">
        <ButtonGroup buttons={buttons} />
      </div>
    </div>
  );
};

export default Footer;
