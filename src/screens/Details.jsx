import React from 'react';
import Layout from "../components/Layout";
import ContentLeft from "../components/ContentLeft";
import Detail from "../components/Detail";

const Details = () => {
    const content = <div id="templatemo_content">
        <ContentLeft />
        <Detail />
    </div>
    return (
        <>
            <Layout content={content} />
        </>
    );
};

export default Details;
