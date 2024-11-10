import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible && <Alert onClose={() => setVisible(false)}>My Alert</Alert>}
      <Button onClick={() => setVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
