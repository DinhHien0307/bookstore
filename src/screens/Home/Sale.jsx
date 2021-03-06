import React from 'react';
import CarouselImage from "../../components/Carousel/CarouselImage";
import SaleData from "./SaleData";

export default function Sale() {
  return (
      <section className="pb-24">
        <div className="bg-gray-200 space-2 space-lg-0 bg-img-hero bg-homebg-img1">
          <div className="container m-auto max-w-[1400px]">
            <CarouselImage images={SaleData}/>
          </div>
        </div>
      </section>
  )
}