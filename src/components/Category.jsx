import React, {useState} from 'react';

const Category = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Action & Adventure',
            slug: 'action-adventure',
        },
        {
            id: 2,
            name: 'Arts, Film & Photography',
            slug: 'art-film-photography',
        },
        {
            id: 3,
            name: 'Biographies, Diaries & True Accounts',
            slug: 'biographies-diaries-trueaccounts',
        },
        {
            id: 4,
            name: 'Business & Economics',
            slug: 'business-economics',
        },
        {
            id: 5,
            name: 'Children\'s & Young Adult',
            slug: 'childrens-youngadult',
        },
        {
            id: 6,
            name: 'Comics & Mangas',
            slug: 'comics-mangas',
        },
        {
            id: 7,
            name: 'Computing, Internet & Digital Media',
            slug: 'computing-internet-digital-media',
        },
        {
            id: 8,
            name: 'Crafts, Home & Lifestyle',
            slug: 'crafts-home-lifestyle',
        },
        {
            id: 9,
            name: 'Health, Family & Personal Development',
            slug: 'health-family-personaldevelopment',
        },
    ]);
    return (
        <div className="templatemo_content_left_section">
            <h1>Categories</h1>
            <ul>
                {
                    categories.map((category) => (
                        <li><a href="#">{category.name}</a></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Category;
