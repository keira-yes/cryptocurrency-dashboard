import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";
import { AppProvider } from "./components/AppProvider";
import { AppHeader } from "./components/AppHeader";
import { Content } from "./HOC/Content";
import { Settings } from "./Settings";
import { Dashboard } from "./pages/Dashboard";
import { Page404 } from "./pages/Page404";

const Crypto = React.lazy(() => import("./pages/Crypto"));

export const App = () => {
    return (
        <>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Layout>
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route
                            path="crypto"
                            element={<React.Suspense fallback={<>Loading</>}><Crypto /></React.Suspense>}
                        />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Layout>
            </main>
        </>
    )
}

// function App() {
//   return (
//       <Layout>
//           <AppProvider>
//               <AppHeader />
//               <Content>
//                   <Settings />
//               </Content>
//           </AppProvider>
//       </Layout>
//   );
// }
