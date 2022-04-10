import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from './Home.js';
import QComponent from './QComponent.js';
import Chat from './Chat.js';
import './Page.css';


function Page() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/shark-tank/" element={<Home/>}/>
                <Route path="/shark-tank/q" element={<QComponent/>}/>
                <Route path="/shark-tank/c" element={<Chat/>}/>
            </Routes>
        </React.Fragment>
    );
}

export default Page;
