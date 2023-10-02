import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login'
import Books from './pages/Books/Books'
import NewBook from './pages/NewBook/NewBook'

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/books" element={<Books/>} />
                <Route path="/book/new/:bookId" element={<NewBook/>} />
            </Routes>
        </BrowserRouter>
    );
}
