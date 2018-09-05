import React from 'react'
import Logo from "../Logo/Logo";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle.js"
import "./ToolBar.scss"

const Toolbar = ({
                     drawerToggleClicked
                 }) => (
    <header className="ToolBar">
        <DrawerToggle clicked={drawerToggleClicked}/>
        <Logo />
    </header>
);

export default Toolbar;