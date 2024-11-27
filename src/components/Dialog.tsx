import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import React from "react";

type DialogProps = {
  icon: string,
  title: string,
  headerButtons: { label: string; onClick: () => void }[],
  footerButtons: { label: string; onClick: () => void }[],
  content: React.ReactNode,
  footerDescription?: string;
}

const Dialog: React.FC<DialogProps> = ({ icon, title, headerButtons, footerButtons, content, footerDescription }) => {
  return (
    <div className="dialog">
      <Header icon={icon} title={title} buttons={headerButtons} />
      <Content>{content}</Content>
      <Footer description={footerDescription} buttons={footerButtons} />
    </div>
  )
}

export default Dialog;