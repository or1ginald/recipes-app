import React from 'react';
import { Category } from './components/Category';
import {AppRoutes} from "./routes/AppRoutes";

function App() {
    return (
        <div className="App">
            <Category />
            <AppRoutes/>
        </div>
    );
}

export default App;
