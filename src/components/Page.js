import * as React from 'react';
import Content from './Content.js';
import Footer from './Footer.js'
import './Page.css';

function Page() {
    return (
        <React.Fragment>
            <Content/>
            <Footer/>
        </React.Fragment>
    );
}

export default Page;
