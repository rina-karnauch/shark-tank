import * as React from 'react';
import Home from './Home.js';
import './Page.css';
import {Route, Routes} from "react-router-dom";

function cText(text) {
    return <div>{text}</div>
}

function Page() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/q" element={cText("questionary")}/>
                <Route path="/c" element={cText("chat")}/>
            </Routes>

        </React.Fragment>
    );
}

export default Page;
