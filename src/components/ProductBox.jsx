import React from 'react';
import {Link} from "react-router-dom";

const ProductBox = ({book}) => {
    return (
        <div key={book.id} className="templatemo_product_box">
            <div className="title">
                <h1>{ book.title } <span>(by { book.author })</span></h1>
            </div>

            <img src={book.images} alt="image"/>
            <div className="product_info">
                <p className="slug">{ book.slug }</p>
                <h3>${ book.price }</h3>
                <div className="buy_now_button"><a href="subpage.html">Buy Now</a></div>
                <div className="detail_button">
                    <Link
                        to={`/books/${book.slug}`}>
                        Detail
                    </Link>
                </div>
            </div>
            <div className="cleaner">&nbsp;</div>
        </div>
    );
};

export default ProductBox;
