import React from 'react';
import { Category } from './components/Category';
import {AppRoutes} from "./routes/AppRoutes";
import {Search} from "./components/Search";

function App() {
    return (
        <div className="App">
            <Search />
            <Category />
            <AppRoutes/>
        </div>
    );
}

export default App;
