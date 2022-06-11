import React, {useState} from 'react';
import Carousel from "react-simply-carousel";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import Card from "./Card";

export default function CarouselCard() {

  const [activeSlide, setActiveSlide] = useState(0);

  return (
      <Carousel
          updateOnItemClick
          easing="linear"
          containerProps={{
            style: {
            }
          }}
          innerProps={{
            style: {
              width: "1430px",
              justifyContent: "space-between"
            }
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
            }
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: <ChevronLeftIcon className="w-5 h-5 mx-auto stroke-1" />,
            style: {
                width: 40,
                height: 40,
                minWidth: 40,
                alignSelf: "center",
                border: "1px solid #eae8e4",
                backgroundcolor: "white",
                position: "absolute",
                left: "8%",
            },
            className: "bestselling-button"
          }}
          backwardBtnProps={{
            children: <ChevronRightIcon className="w-5 h-5 mx-auto stroke-1" />,
            style: {
              width: 40,
              height: 40,
              minWidth: 40,
              alignSelf: "center",
              border: "1px solid #eae8e4",
              backgroundcolor: "white",
              position: "absolute",
              right: "8%",
            },
            className: "bestselling-button"
          }}
          hideNavIfAllVisible={true}
          itemsToShow={5}
          speed={500}
          infinite={false}
      >
        {Array.from({ length: 8 }).map((item) => (
            <Card item={item}/>
        ))}
      </Carousel>
  )
}