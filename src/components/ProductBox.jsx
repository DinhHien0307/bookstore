import React from 'react';

const ProductBox = ({book}) => {
    return (
        <div className="templatemo_product_box">
            <div className="title">
                <h1>{ book.title } <span>(by { book.author })</span></h1>
            </div>

            <img src={require( `../images/${book.image}` )} alt="image"/>
            <div className="product_info">
                <p className="slug">{ book.slug }</p>
                <h3>${ book.price }</h3>
                <div className="buy_now_button"><a href="subpage.html">Buy Now</a></div>
                <div className="detail_button"><a href="subpage.html">Detail</a></div>
            </div>
            <div className="cleaner">&nbsp;</div>
        </div>
    );
};

export default ProductBox;
