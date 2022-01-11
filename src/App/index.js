import { AppLayout } from "./AppLayout";
import { AppProvider } from "./AppProvider";
import { AppHeader } from "./AppHeader";
import { Content } from "../HOC/Content";
import { Settings } from "../Settings";
import './App.css';

function App() {
  return (
      <AppLayout>
          <AppProvider>
              <AppHeader />
              <Content>
                  <Settings />
              </Content>
          </AppProvider>
      </AppLayout>
  );
}

export default App;
