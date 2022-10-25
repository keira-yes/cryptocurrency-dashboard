import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Crypto } from "./pages/Crypto";
import { Page404 } from "./pages/Page404";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { AppProvider } from "./HOC/AppProvider";

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <Layout>
                    <AppProvider>
                        <Routes>
                            <Route index element={<Dashboard />} />
                            <Route path="crypto" element={<Crypto />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </AppProvider>
                </Layout>
            </main>
        </>
    )
}
