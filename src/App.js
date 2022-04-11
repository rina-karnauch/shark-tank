import './App.css';
import {BrowserRouter} from "react-router-dom";
import * as React from 'react';
import Page from "./components/Page.js"



function App() {
    return (
        <BrowserRouter>
            <Page/>
        </BrowserRouter>
    );
}

export default App;
