import * as React from 'react';
import sharkTankLogo from '../images/sharkTankNoShark.png'
import {AccountBox} from "./AccountBox"
import './Header.css'

export function Header() {
    return (
        <div className="header">
            <img className="logo" src={sharkTankLogo}></img>
            <AccountBox/>
        </div>
    );
}