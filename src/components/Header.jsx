import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div id="templatemo_menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/newreleases">New Releases</Link></li>
                    <li><Link to="/company">Company</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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
