import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

export default function Layout() {
    return (
        <div id="templatemo_container">
            <Header/>
            <div id="templatemo_content">
                <ContentLeft />
                <ContentRight />
            </div>
            <div className="cleaner_with_height">&nbsp;</div>
            <Footer/>
        </div>
    )
}
