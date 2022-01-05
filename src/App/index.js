import { Welcome } from "./Welcome";
import { AppLayout } from "./AppLayout";
import { AppHeader } from "./AppHeader";
import './App.css';

function App() {
  return (
      <AppLayout>
          <AppHeader />
          <Welcome />
      </AppLayout>
  );
}

export default App;
