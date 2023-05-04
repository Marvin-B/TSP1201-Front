import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/LoginPage";

const AppRouter = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route index element={<Home />} />
                </Routes>
                { children }
            </BrowserRouter>
        </>
    );
};

export default AppRouter;