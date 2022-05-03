import React from 'react';
import ContentLeft from "../components/ContentLeft";
import ContentRight from "../components/ContentRight";
import Layout from "../components/Layout";

const Home = () => {
    const content = <div id="templatemo_content">
        <ContentLeft />
        <ContentRight />
    </div>
    return (
        <Layout content={content} />
    );
};

export default Home;
