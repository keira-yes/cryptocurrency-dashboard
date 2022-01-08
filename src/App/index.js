import { AppLayout } from "./AppLayout";
import { AppProvider } from "./AppProvider";
import { AppHeader } from "./AppHeader";
import { Settings } from "../Settings";
import './App.css';

function App() {
  return (
      <AppLayout>
          <AppProvider>
              <AppHeader />
              <Settings />
          </AppProvider>
      </AppLayout>
  );
}

export default App;
