import React, {useState} from 'react';
import Carousel from "react-simply-carousel";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import Card from "../Card";

export default function CarouselCard({data}) {
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
          backwardBtnProps={{
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
          hideNavIfAllVisible={true}
          itemsToShow={5}
          speed={500}
          infinite={false}
      >
        {data && data.map((item) => (
            <div key={item.id}
                className="bg-white w-[280px] h-[420px] leading-6 border border-[#eae8e4] box-border group hover:border-[#161619]">
                <Card key={item.id} item={item} />
            </div>
        ))}
      </Carousel>
  )
}