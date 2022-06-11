import React from 'react'
import {Link} from "react-router-dom";
import {
  CakeIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  GlobeIcon,
  HeartIcon,
  PhotographIcon
} from "@heroicons/react/outline";

export default function FeaturedCategories() {
    const categories = [
        {
            id: 1,
            bgcolor: 'bg-purple-200',
            icon: <PhotographIcon className='w-14 h-14 stroke-1 text-purple-500'/>,
            title: 'Arts & Photography',
            link: '#'
        },
        {
            id: 2,
            bgcolor: 'bg-orange-200',
            icon: <CakeIcon className="w-14 h-14 stroke-1 text-orange-500"/>,
            title: 'Food & Drink',
            link: '#'
        },
        {
            id: 3,
            bgcolor: 'bg-rose-200',
            icon: <HeartIcon className="w-14 h-14 stroke-1 text-rose-500"/>,
            title: 'Romance',
            link: '#'
        },
        {
            id: 4,
            bgcolor: 'bg-blue-200',
            icon: <GlobeIcon className="w-14 h-14 stroke-1 text-blue-500"/>,
            title: 'Health',
            link: '#'
        },
        {
            id: 5,
            bgcolor: 'bg-pink-200',
            icon: <DocumentTextIcon className="w-14 h-14 stroke-1 text-pink-500"/>,
            title: 'Biography',
            link: '#'
        }
    ];

    return (
        <>
            <section className="pb-24">
                <div className="container px-[15px] pb-[15px] m-auto max-w-[1430px]">
                    <header className="mb-8 flex justify-between items-center">
                        <h2 className="text-[1.875rem]">Featured Categories</h2>
                        <Link to="#" className="text-base text-gray-700 flex items-center group hover:text-red-500">
                            All Categories
                            <ChevronRightIcon className="w-5 h-5 text-gray-700 group-hover:text-red-500"/>
                        </Link>
                    </header>
                    <ul className="flex flex-wrap -mx-[15px]">
                        {
                            categories.map((item) => {
                                    return (
                                        <>
                                            <li key={item.id}
                                                className="product-category hover:cursor-pointer px-[15px] list-item grow-0 shrink-0 basis-1/5 max-w-[20%]">
                                                <Link to={`${item.link}`}
                                                      className="group-hover:pointer-events-auto text-dark">
                                                    <div
                                                        className={`product-category-inner block box-border rounded-xl px-10 py-8 ${item.bgcolor} hover:bg-amber-100`}>
                                                        <div className="product-category-icon block leading-normal">
                                                            {item.icon}
                                                        </div>
                                                        <div className="product-category-body block leading-normal">
                                                            <h3 className="overflow-hidden text-ellipsis whitespace-nowrap mt-5 mb-2 font-medium text-[1rem]">{item.title}</h3>
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}