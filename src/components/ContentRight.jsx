import React, {useEffect, useState} from 'react';
import ProductBox from "./ProductBox";
import {useQuery} from "react-query";
import apiClient from "../http-common";
import {useParams} from "react-router-dom";

const ContentRight = () => {
    let { slug } = useParams();
    const [getResult, setGetResult] = useState();
    const [error, setError] = useState();
    const [isSuccess, setIsSuccess] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    const {
        isSuccess: isSuccessBooks, isFetching: isFetchingBooks
    } = useQuery('query-books', async () => {
            return await apiClient.get("/books");
        },
        {
            onSuccess: (res) => {
                const result = {
                    status: res.status + "-" + res.statusText,
                    headers: res.headers,
                    data: res.data.data,
                };
                setGetResult(result);
            },
            onError: (err) => {
                setError(err.response?.data || err);
            },
            refetchOnWindowFocus: false,
        });

    const {
        isSuccess: isSuccessCateBooks, isFetching: isFetchingCateBooks
    } = useQuery('query-cate-books', async () => {
            return await apiClient.get(`/categories/${slug}`);
        },
        {
            onSuccess: (res) => {
                const result = {
                    status: res.status + "-" + res.statusText,
                    headers: res.headers,
                    data: res.data.data,
                };
                setGetResult(result);
            },
            onError: (err) => {
                setError(err.response?.data || err);
            },
            refetchOnWindowFocus: false,
        });


    useEffect(() => {
        if (isSuccessCateBooks) setIsSuccess(!isSuccess);
        if (isSuccessBooks) setIsSuccess(!isSuccess);
        if (isFetchingBooks) setIsFetching(!isFetching);
        if (isFetchingCateBooks) setIsFetching(!isFetching);
    }, [isSuccess, isFetching,isSuccessCateBooks, isSuccessBooks, isFetchingCateBooks, isFetchingBooks]);

    return (
        <div>
            {error ? (
                <span>Error: {error}</span>
            ) : (<>
                {isSuccess && !isFetching && (
                    <div id="templatemo_content_right">
                        {getResult.data.map((book) => (
                            <>
                                <ProductBox key={book.id} book={book}/>
                            </>

                        ))
                        }
                        <a href="#"><img src={require('../images/templatemo_ads.jpg')} alt="ads"/></a>
                    </div>
                )

                }
            </>
            )}
        </div>

)
    ;
};

export default ContentRight;
