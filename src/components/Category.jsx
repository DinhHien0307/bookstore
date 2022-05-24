import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import apiClient from '../http-common';

const Category = () => {
    const [getResult, setGetResult] = useState(null);
    const {
        isLoading: isLoadingCategories, refetch: getAllCategories, isSuccess, isFetching
    } = useQuery('query-categories', async () => {
            return await apiClient.get("/categories");
        },
        {
            onSuccess: (res) => {
                const result = {
                    status: res.status + "-" + res.statusText,
                    headers: res.headers,
                    data: res.data,
                };
                setGetResult(result);
            },
            onError: (err) => {
                setGetResult(err.response?.data || err);
            },
            refetchOnWindowFocus: false,
        });

    useEffect(() => {
        if (isLoadingCategories) setGetResult("loading...");
    }, [isLoadingCategories]);

    return (
        <div className="templatemo_content_left_section">
            <h1>Categories</h1>

            {isSuccess && !isFetching && (
                <ul>
                    {
                        getResult.data.map((category) => (
                            <li key={category.id}><a href="#">{category.name}</a></li>
                        ))
                    }

                </ul>
            )
            }
        </div>
    );
};

export default Category;
