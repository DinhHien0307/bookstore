import React, {useEffect, useState} from 'react';
import Card from "../../components/Card";
import FeaturedBooksData from "./FeaturedBooksData";
import bookApi from "../../api/bookApi";

export default function FeaturedBooksSection() {
    const[featuredBook, setFeaturedBook] = useState([]);
    useEffect(() => {
        const fetchFeaturedBook = async () => {
            try {
                console.log('hien');
                const response = await bookApi.getFeaturedBook();
                console.log('Fetch books successfully');
                setFeaturedBook(response.data);
                console.log(featuredBook);

            } catch (e) {
                console.log('fail');
            }
        }

        fetchFeaturedBook();


    }, []);

    return (
      <section className="pb-24">
        <div className="container px-[15px] pb-[15px] m-auto max-w-[1430px]">
          <header className="mb-8 flex items-center">
            <h2 className="text-[1.875rem] mx-auto">Featured Books</h2>
          </header>
            <ul className="nav nav-tabs flex md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 justify-center "
                id="tabs-tab"
                role="tablist">
                <li className="nav-item" role="presentation">
                    <a href="#tabs-featured" className="
                      nav-link
                      block
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      border-x-0 border-t-0 border-b-2 border-transparent
                      px-6
                      py-3
                      my-2
                      hover:border-transparent hover:bg-gray-100
                      focus:border-transparent
                      active:text-pink-500
                    " id="tabs-featured-tab" data-bs-toggle="pill" data-bs-target="#tabs-featured" role="tab" aria-controls="tabs-featured"
                       aria-selected="true">Featured</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-onsale" className="
                      nav-link
                      block
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      border-x-0 border-t-0 border-b-2 border-transparent
                      px-6
                      py-3
                      my-2
                      hover:border-transparent hover:bg-gray-100
                      focus:border-transparent
                    " id="tabs-onsale-tab" data-bs-toggle="pill" data-bs-target="#tabs-onsale" role="tab"
                       aria-controls="tabs-onsale" aria-selected="false">On Sale</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-most-viewed" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        border-x-0 border-t-0 border-b-2 border-transparent
                        px-6
                        py-3
                        my-2
                        hover:border-transparent hover:bg-gray-100
                        focus:border-transparent
                        " id="tabs-most-viewed-tab" data-bs-toggle="pill" data-bs-target="#tabs-most-viewed" role="tab"
                       aria-controls="tabs-most-viewed" aria-selected="false">Most Viewed</a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <div className="tab-pane fade show active" id="tabs-featured" role="tabpanel"
                     aria-labelledby="tabs-featured-tab">
                    <ul className="products flex flex-wrap">
                            {
                                featuredBook && featuredBook.map(item =>
                                    <li key={item.id} className="product grow-0 shrink-0 basis-1/6 w-1/6
                                    border border-[#eae8e4] box-border group hover:border-[#161619]">
                                        <Card key={item.id} item={item} />
                                    </li>
                                )
                            }
                    </ul>
                </div>
                <div className="tab-pane fade" id="tabs-onsale" role="tabpanel" aria-labelledby="tabs-onsale-tab">
                    <ul className="products flex flex-wrap">
                        {
                            FeaturedBooksData && FeaturedBooksData.FeaturedData.map(item =>
                            <li key={item.id} className="product grow-0 shrink-0 basis-1/6 w-1/6
                                    border border-[#eae8e4] box-border group hover:border-[#161619]">
                                <Card key={item.id}  item={item} />
                            </li>
                            )
                        }
                    </ul>
                </div>
                <div className="tab-pane fade" id="tabs-most-viewed" role="tabpanel" aria-labelledby="tabs-most-viewed-tab">
                    <ul className="products flex flex-wrap">
                        {
                            FeaturedBooksData && FeaturedBooksData.FeaturedData.map(item =>
                            <li key={item.id} className="product grow-0 shrink-0 basis-1/6 w-1/6
                                    border border-[#eae8e4] box-border group hover:border-[#161619]">
                                <Card key={item.id}  item={item} />
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
      </section>
  )
}