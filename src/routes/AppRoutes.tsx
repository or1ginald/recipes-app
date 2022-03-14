import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Home} from "./Home";
import {Cuisine} from "./Cuisine";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/cuisine/:type'} element={<Cuisine/>}/>

        </Routes>
    );
};

