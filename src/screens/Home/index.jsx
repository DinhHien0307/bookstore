import React from 'react';
import Header from "../../components/Header";
import Sale from "./Sale";
import FeaturedCategories from "./FeaturedCategories";
import BestSellingSection from "./BestSellingSection";

const Index = () => {
    return (
        <>
            <Header />

            <Sale />
            <FeaturedCategories />

            <BestSellingSection />
        </>
    );
};

export default Index;
