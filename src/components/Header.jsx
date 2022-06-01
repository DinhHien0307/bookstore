import React from 'react';
import { QuestionMarkCircleIcon, PhoneIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/outline';


const Header = () => {
    return (
        <>
            <div>
                <header id="site-header">
                    <div className="bg-white border-b-gray-300 border-b">
                        <div className="container-fluid px-14">
                            <div className="topbar-nav flex items-center justify-between">
                                <ul className="topbar-nav-left nav ml-md-n3 flex flex-wrap items-center p-2">
                                    <li className="items-center nav-item list-item">
                                        <a href="#" className="nav-link py-2 px-4 flex hover:text-red-700">
                                            <QuestionMarkCircleIcon class="h-5 w-5 text-blue-500 mr-2"/>Can we help you?</a>
                                    </li>
                                    <li className="items-center nav-item list-item ">
                                        <div className="nav-link p-1 flex">
                                            <PhoneIcon class="h-5 w-5 text-blue-500 mr-2" />+84 903-195-698</div>
                                    </li>
                                </ul>
                                <ul className="topbar-nav-right nav flex flex-wrap">
                                    <li className="items-center nav-item list-item">
                                        <a href="#" className="nav-link py-2 px-1 flex">
                                            <UserIcon class="h-5 w-5 text-blue-500 hover:text-red-700 mr-2"/></a>
                                    </li>
                                    <li className="items-center nav-item list-item ">
                                        <a href="#" className="nav-link py-2 px-1 flex">
                                            <ShoppingCartIcon class="h-5 w-5 text-blue-500 hover:text-red-700 mr-2" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
);



};

export default Header;
