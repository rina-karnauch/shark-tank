import * as React from 'react';
import './Footer.css';
import logo from '../images/logo.png';

function Footer() {
    return (
        <footer className="site-footer">
            {/*This site was created by Rina Karnauch, Ido Pinto, Yohai Shohet, I.B.D and Daniel Perretz with the assistance of Eliran from Lightricks. We love you🧚🏻.*/}
            {/*<br/>*/}
            {/*All Rights Reserved © 2022*/}
            <img
                 src={logo}
                 alt="student-photo"
                 width="50px"
                 height="50px"
            />
        </footer>
    );
}

export default Footer;