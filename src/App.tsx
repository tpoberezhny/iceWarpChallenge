import { useState } from 'react';
import Dialog from './components/Dialog';
import Button from './components/Button';

const App: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="app">
      <Button label="Open Dialog" onClick={() => setShowDialog(true)} />
      {showDialog && (
        <Dialog
          icon="⚙️"
          title="Title"
          headerButtons={[
            { label: 'Action 1', onClick: () => alert('Action 1 clicked') },
            { label: 'Action 2', onClick: () => alert('Action 2 clicked') },
            { label: 'Action 3', onClick: () => alert('Action 2 clicked') },
          ]}
          footerButtons={[
            { label: 'Close', onClick: () => setShowDialog(false) },
            { label: 'Action', onClick: () => setShowDialog(false) },
          ]}
          content={<p>This is the content of the dialog.</p>}
          footerDescription="This is an optional footer description."
        />
      )}
    </div>
  );
};

export default App;