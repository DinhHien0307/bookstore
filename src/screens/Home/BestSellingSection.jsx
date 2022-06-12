import React from 'react'
import CarouselCard from "../../components/Carousel/CarouselCard";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "@heroicons/react/outline";

export default function BestSellingSection() {
    const BestSellingData = [
        {
            id: 1,
            title: 'Think like a Monk: Train Your Mind for Peace',
            author: 'Jay Shetty',
            price: '29',
            image: 'book1',
            type: 'paperback'
        },
        {
            id: 2,
            title: 'The Last Sister (Columbia River Book 1)',
            author: 'Kelly Harms',
            price: '19',
            image: 'book2',
            type: 'kindle edition'
        },
        {
            id: 3,
            title: 'Think like a Monk: Train Your Mind for Peace',
            author: 'Jay Shetty',
            price: '39',
            image: 'book3',
            type: 'paperback'
        },
        {
            id: 4,
            title: 'The Overdue Life of Amy Byler',
            author: 'Kelly Harms',
            price: '25',
            image: 'book4',
            type: 'paperback'
        },
        {
            id: 5,
            title: 'She funny that way',
            author: 'Kelly Harms',
            price: '25',
            image: 'book5',
            type: 'kindle edition'
        },
        {
            id: 6,
            title: 'Beast',
            author: 'Hien',
            price: '35',
            image: 'book6',
            type: 'paperback'
        },
        {
            id: 7,
            title: 'Milk Money',
            author: 'Vy',
            price: '30',
            image: 'book7',
            type: 'paperback'
        },

    ];
  return (
      <section className="pb-24">
        <div className="container px-[15px] pb-[15px] m-auto max-w-[1430px]">
            <header className="mb-8 flex justify-between items-center">
                <h2 className="text-[1.875rem]">Bestselling Books</h2>
                <Link to="#" className="text-base text-gray-700 flex items-center group hover:text-red-500">
                    View all
                    <ChevronRightIcon className="w-5 h-5 text-gray-700 group-hover:text-red-500"/>
                </Link>
            </header>
          <CarouselCard data={BestSellingData}/>

        </div>
      </section>
  )
}