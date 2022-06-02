import React from 'react';
import TopBar from "./HeaderContent/TopBar";
import NavHead from "./HeaderContent/NavHead";

const Header = () => {
    return (
        <>
            <div>
                <header id="site-header">
                    <TopBar />
                    <NavHead />
                </header>
            </div>
        </>
);



};

export default Header;
