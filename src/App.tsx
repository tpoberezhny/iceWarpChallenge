import { useState } from 'react';
import Dialog from './components/Dialog';
import Button from './components/Button';

const App: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog1, setShowDialog1] = useState(false);
  const [showBorders, setShowBorders] = useState(false);

  const toggleBorders = () => {
    const elements = document.querySelectorAll('.dialog, .header, .footer, .content, .button-group, .icon, .title, .footer-description, .footer-buttons');
    elements.forEach((element) => {
      if (showBorders) {
        element.classList.remove('show-border');
      } else {
        element.classList.add('show-border');
      }
    });
    setShowBorders(!showBorders);
  };

  return (
    <div className="app">
      <Button label="Open First Dialog Example" onClick={() => setShowDialog(true)} />
      <Button label="Open Second Dialog Example" onClick={() => setShowDialog1(true)} />
      {showDialog && (
        <div className="dialog-container">
          <Dialog
            icon="⚙️"
            title="Title"
            headerButtons={[
              { label: 'Action 1', onClick: () => alert('Action 1 clicked') },
              { label: 'Action 2', onClick: () => alert('Action 2 clicked') },
              { label: 'Action 3', onClick: () => alert('Action 3 clicked') },
            ]}
            footerButtons={[
              { label: 'Close', onClick: () => setShowDialog(false) },
              { label: 'Close', onClick: () => setShowDialog(false) },
            ]}
            content={<p>This is the content of the dialog.</p>}
            footerDescription="This is an optional footer description."
            toggleBorders={toggleBorders}
            showBorders={showBorders}
          />
        </div>
      )}
      {showDialog1 && (
        <div className="dialog-container">
        <Dialog
          icon="⚙️"
          title="Title 2"
          headerButtons={[
            { label: 'Action 1', onClick: () => alert('Action 1 clicked') },
            { label: 'Action 2', onClick: () => alert('Action 2 clicked') },
          ]}
          footerButtons={[
            { label: 'Close', onClick: () => setShowDialog1(false) },
          ]}
          content={<p>This is the content of the second dialog example.</p>}
          footerDescription="This is an optional footer description for second example."
          toggleBorders={toggleBorders}
          showBorders={showBorders}
        />
      </div>
      )}
    </div>
  );
};

export default App;