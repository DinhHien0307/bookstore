import React, {useState} from 'react';
import ProductBox from "./ProductBox";
import {useQuery} from "react-query";
import apiClient from "../http-common";

const ContentRight = () => {

    const [getResult, setGetResult] = useState();
    const [error, setError] = useState();

    const {
        isLoading: isLoadingBooks, isSuccess, isFetching
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
    // TODO handle error.
    return (
        <>
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
    )
        ;
};

export default ContentRight;
