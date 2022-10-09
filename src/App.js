import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AppProvider } from "./components/AppProvider";
import { AppHeader } from "./components/AppHeader";
import { Content } from "./HOC/Content";
import { Settings } from "./Settings";
import { Dashboard } from "./pages/Dashboard";
import { Crypto } from "./pages/Crypto";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "crypto",
        element: <Crypto />,
    },
]);

export const App = () => {
    return (
        <>
            <aside>
                Aside
            </aside>
            <main>
                <RouterProvider router={router} />
            </main>
        </>
    )
}

// function App() {
//   return (
//       <AppLayout>
//           <AppProvider>
//               <AppHeader />
//               <Content>
//                   <Settings />
//               </Content>
//           </AppProvider>
//       </AppLayout>
//   );
// }
