import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import apiClient from "../http-common";
import {useQuery} from "react-query";

const Detail = () => {
    let { slug } = useParams();
    const [book, setBook] = useState();
    const [error, setError] = useState();

    const { isSuccess, isFetching } = useQuery(
        "query-book-by-id",
        async () => {
            return await apiClient.get(`/books/${slug}`);
        },
        {
            onSuccess: (res) => {
                setBook(res.data.data);
            },
            onError: (err) => {
                setError(err.response?.data || err);
            },
            refetchOnWindowFocus: false,
        }
    );
    // TODO handle error.
    return (
        <>
            {isSuccess && !isFetching && (
                <div id="templatemo_content_right">

                    <h1>{book.title} <span>(by {book.author})</span></h1>
                    <div className="image_panel"><img src={book.images} alt="CSS Template" width="100"
                                                      height="150"/></div>
                    <h2>{book.title}</h2>
                    <ul>
                        <li>By <Link to="#">{book.author}</Link></li>
                        <li>Publisher: {book.publisher}</li>
                        <li>Price: ${book.price}</li>
                    </ul>

                    <p>{book.body}</p>

                    <div className="cleaner_with_height">&nbsp;</div>

                    {/*TODO ads*/}
                    {/*<a href="index.html"><img src="images/templatemo_ads.jpg" alt="css template ad"/></a>*/}

                </div>
                )
            }
        </>
    );
};

export default Detail;