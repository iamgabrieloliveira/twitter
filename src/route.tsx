import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import {App} from "./pages/App";
import {Login} from "./pages/Login/Login";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<App/>}/>
        </Routes>
    )
}