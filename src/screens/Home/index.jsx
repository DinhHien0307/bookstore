import React from 'react';
import Header from "../../components/Header";
import Sale from "./Sale";
import FeaturedCategories from "./FeaturedCategories";
import BestSellingSection from "./BestSellingSection";
import FeaturedBooksSection from "./FeaturedBooksSection";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <Header />

            {/* Sale section. */}
            <Sale />

            {/* Featured categories section. */}
            <FeaturedCategories />

            {/* Best selling section. */}
            <BestSellingSection />

            {/* Featured books section. */}
            <FeaturedBooksSection />

            <Footer />
        </>
    );
};

export default Home;
