import React from 'react';

const Header = () => {
    return (
        <>
            <div id="templatemo_menu">
                <ul>
                    <li><a href="index.html" className="current">Home</a></li>
                    <li><a href="subpage.html">Search</a></li>
                    <li><a href="subpage.html">Books</a></li>
                    <li><a href="subpage.html">New Releases</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div id="templatemo_header">
                <div id="templatemo_special_offers">
                    <p>
                        <span>25%</span> discounts for
                        purchase over $80
                    </p>
                    <a href="subpage.html">Read more...</a>
                </div>


                <div id="templatemo_new_books">
                    <ul>
                        <li>Suspen disse</li>
                        <li>Maece nas metus</li>
                        <li>In sed risus ac feli</li>
                    </ul>
                    <a href="subpage.html">Read more...</a>
                </div>
            </div>
        </>
    );
};

export default Header;
