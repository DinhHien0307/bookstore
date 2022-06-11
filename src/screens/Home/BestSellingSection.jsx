import React from 'react'
import CarouselCard from "../../components/Carousel/CarouselCard";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "@heroicons/react/outline";

export default function BestSellingSection() {
    const BestSellingData = [
        {

        }
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
          <CarouselCard />

        </div>
      </section>
  )
}