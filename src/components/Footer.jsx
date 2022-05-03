import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div id="templatemo_footer">

            <Link to="/">Home</Link> | <Link to="/books">Books</Link> | <Link to="/newreleases">New Releases</Link>
            | <Link to="#">FAQs</Link> | <Link to="/contact">Contact Us</Link><br/>
            Copyright © 2022 <Link to="/company">JennyHome's Book store</Link>
        </div>
    );
};

export default Footer;
