import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {Home} from "./Home";
import {Cuisine} from "./Cuisine";
import {Searched} from "./Searched";
import {Recipe} from "./Recipe";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/cuisine/:type'} element={<Cuisine/>}/>
            <Route path={'/searched/:search'} element={<Searched/>}/>
            <Route path={'/recipe/:id'} element={<Recipe/>}/>



        </Routes>
    );
};

