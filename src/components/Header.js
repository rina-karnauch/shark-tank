import * as React from 'react';
import sharkTankLogo from '../images/SharkTankWithText.png'
import {AccountBox} from "./AccountBox"
import './Header.css'

export function Header() {
    return (
        <div className="header">
            <img src={sharkTankLogo}></img>
            <AccountBox/>
        </div>
    );
}