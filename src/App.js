import React from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { Crypto } from "./pages/Crypto";
import { Page404 } from "./pages/Page404";
import { Layout } from "./components/Layout";

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
                        <Route path="crypto" element={<Crypto />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Layout>
            </main>
        </>
    )
}
