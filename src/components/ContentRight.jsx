import React, {useState} from 'react';
import ProductBox from "./ProductBox";

const ContentRight = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'Photography',
            author: 'Best Author',
            category: 'Art',
            slug: 'Etiam luctus. Quisque facilisis suscipit elit. Curabitur...',
            body: 'Etiam luctus. Quisque facilisis suscipit elit. Curabitur hello anime',
            image: 'templatemo_image_01.jpg',
            price: 55,
        },
        {
            id: 2,
            title: 'Cooking',
            author: 'New Author',
            category: 'Cookery book',
            slug: 'Aliquam a dui, ac magna quis est eleifend dictum....',
            body: 'EAliquam a dui, ac magna quis est eleifend dictum.hello anime',
            image: 'templatemo_image_02.jpg',
            price: 35,
        },
        {
            id: 3,
            title: 'Gardening',
            author: 'New Author',
            category: 'Guide',
            slug: 'Ut fringilla enim sed turpis.Sed justo dolor, convallis at',
            body: 'Ut fringilla enim sed turpis.Sed justo dolor, convallis at.hello anime',
            image: 'templatemo_image_03.jpg',
            price: 65,
        },
        {
            id: 4,
            title: 'Sushi Book',
            author: 'Japanese Name',
            category: 'Cookery book',
            slug: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. hello anime',
            image: 'templatemo_image_04.jpg',
            price: 45,
        },
        {
            id: 5,
            title: 'Rich Dad Poor Dad',
            author: 'Robert T. Kiyosaki',
            category: 'Cookery book',
            slug: 'What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
            body: 'It\'s been nearly 25 years since Robert Kiyosaki’s Rich Dad Poor Dad first made waves in the Personal Finance arena.\n' +
                'It has since become the #1 Personal Finance book of all time... translated into dozens of languages and sold around the world.\n' +
                '\n' +
                'Rich Dad Poor Dad is Robert\'s story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.',
            image: 'richdad.jpg',
            price: 45,
        }
    ]);
    return (
        <div id="templatemo_content_right">
            {books.map((book) => (
                <>
                    <ProductBox key={book.id} book={book}/>
                </>

            ))
            }
            <a href="subpage.html"><img src={require('../images/templatemo_ads.jpg')} alt="ads"/></a>
        </div>
    );
};

export default ContentRight;
