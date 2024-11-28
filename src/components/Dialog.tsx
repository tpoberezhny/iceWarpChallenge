import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Button from './Button';

type DialogProps = {
  icon: string;
  title: string;
  headerButtons: { label: string; onClick: () => void }[];
  footerButtons: { label: string; onClick: () => void }[];
  content: React.ReactNode;
  footerDescription?: string;
  toggleBorders: () => void;
  showBorders: boolean;
};

const Dialog: React.FC<DialogProps> = ({
  icon,
  title,
  headerButtons,
  footerButtons,
  content,
  footerDescription,
  toggleBorders,
  showBorders,
}) => {
  return (
    <div className="dialog">
      <Button
        label={showBorders ? "Remove Borders" : "Show Borders"}
        onClick={toggleBorders}
        className="toggle-borders"
      />
      <Header icon={icon} title={title} buttons={headerButtons} />
      <Content>{content}</Content>
      <Footer description={footerDescription} buttons={footerButtons} />
    </div>
  );
};

export default Dialog;
