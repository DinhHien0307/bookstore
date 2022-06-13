import React from 'react';
import Header from "../../components/Header";
import Sale from "./Sale";
import FeaturedCategories from "./FeaturedCategories";
import BestSellingSection from "./BestSellingSection";
import FeaturedBooksSection from "./FeaturedBooksSection";
import Footer from "../../components/Footer";
import NewReleaseSection from "./NewReleaseSection";
import FavouriteAuthorsSection from "./FavouriteAuthorsSection";

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

            {/* New Releases section. */}
            <NewReleaseSection />

            {/* Featured books section. */}
            <FeaturedBooksSection />

            {/* Featured books section. */}
            <FavouriteAuthorsSection />

            <Footer />
        </>
    );
};

export default Home;
