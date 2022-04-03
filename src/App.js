import './App.css';
import {BrowserRouter} from "react-router-dom";
import * as React from 'react';
import Page from "./components/Page.js"



function App() {
    return (
        // present what is needed according to the url,
        // meaning if the :
        // url is \ then homepage
        // url is \q then questionary page
        // url is \c then we have the chat
        // <Page/>
        // <BrowserRouter>
        //
        //     {/*<Route path="/q" exact render={<div> q </div>}*/}
        //     {/*    // render={() => (*/}
        //     {/*    //     <div> questionary </div>*/}
        //     {/*    // )}*/}
        //     {/*/>*/}
        //     {/*<Route path="/c" exact render={<div> c </div>}*/}
        //     {/*    // render={() => (*/}
        //     {/*    //     <div> chat </div>*/}
        //     {/*    // )}*/}
        //     {/*/>*/}
        // </BrowserRouter>
        // render={() => (
        //     <Page/>
        // )}
        <BrowserRouter>
            <Page/>
        </BrowserRouter>
    );
}

export default App;
