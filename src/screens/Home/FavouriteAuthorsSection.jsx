import React from 'react'
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "@heroicons/react/outline";
import CarouselRoundedCard from "../../components/Carousel/CarouselRoundedCard";

export default function FavouriteAuthorsSection() {
    const FavouriteAuthors = [
        {
            id: 5,
            name: 'Kelly Harms',
            publishedbook: '25',
            image: 'author5',
        },
        {
            id: 2,
            name: 'Stephen King',
            publishedbook: '25',
            image: 'author2',
        },
        {
            id: 1,
            name: 'Barbara O\'Neil',
            publishedbook: '25',
            image: 'author1',
        },
        {
            id: 6,
            name: 'Jimmy Anny',
            publishedbook: '25',
            image: 'author6',
        },
        {
            id: 3,
            name: 'Joe Wicks',
            publishedbook: '25',
            image: 'author3',
        },
        {
            id: 4,
            name: 'Jessica Simpson',
            publishedbook: '25',
            image: 'author4',
        },
        {
            id: 7,
            name: 'John Melton ',
            publishedbook: '25',
            image: 'author7',
        },
    ];

    return (
      <section className="pb-24">
        <div className="container px-[15px] pb-[15px] m-auto max-w-[1430px]">
          <header className="mb-8 flex justify-between items-center">
            <h2 className="text-[1.875rem]">Favourite Authors</h2>
            <Link to="#" className="text-base text-gray-700 flex items-center group hover:text-red-500">
              View all
              <ChevronRightIcon className="w-5 h-5 text-gray-700 group-hover:text-red-500"/>
            </Link>
          </header>
          <CarouselRoundedCard data={FavouriteAuthors} />
        </div>
      </section>
  )
}