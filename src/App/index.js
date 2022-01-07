import { Welcome } from "./Welcome";
import { AppLayout } from "./AppLayout";
import { AppProvider } from "./AppProvider";
import { AppHeader } from "./AppHeader";
import './App.css';

function App() {
  return (
      <AppLayout>
          <AppProvider>
              <AppHeader />
              <Welcome />
          </AppProvider>
      </AppLayout>
  );
}

export default App;
