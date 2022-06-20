import React from 'react'
import {Link} from "react-router-dom";
import {HeartIcon} from "@heroicons/react/outline";

export default function Card({item}) {
    return (
        <div className="card-inner overflow-hidden p-8">
            <div className="block relative box-border">
                <div className="card-thumbnail">
                    <img alt="book" className="mx-auto max-w-[100%] h-auto z-0"
                         src={require(`../../assets/book/${item.image}.jpg`)} />
                    <Link to="#" className="block" tabIndex="0"/>
                </div>
                <div className="card-body pt-4 bg-white group-hover:-translate-y-[44px] duration-200 ease-in-out">
                    <div className="uppercase mb-1">
                        <Link to="#" className="text-[12px] text-red-400 px-1" tabIndex="0">{item.type}</Link>
                    </div>
                    <h2 className="card-title h-12 text-base mb-1 overflow-hidden text-ellipsis crop-text-2 h-dark">
                        <Link to="#" className="px-1 flex text-left" tabIndex="0">{item.title}</Link></h2>
                    <div className="card-author text-sm mb-1">
                        <Link to="#" className="text-gray-500 hover:text-red-500 px-1 z-2">{item.author}</Link>
                    </div>
                    <div className="card-price flex items-center font-medium text-base">
                  <span className="card-amount px-1">${item.price}</span>
                    </div>
                </div>
                <div className="card-hover group-hover:opacity-100 absolute right-0 left-0 bottom-0 opacity-0 duration-200 ease-in-out flex justify-between items-center">
                    <Link to="#" className="inline-block px-2 py-2 border border-gray-500 text-gray-500 font-medium text-xs leading-tight uppercase rounded-full
                    hover:bg-pink-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" tabIndex="0">
                        <span className="add-to-cart px-1">ADD TO CART</span>
                    </Link>
                    <Link to="#" className="btn heart-button border-0 p-1 rounded-full hover:bg-red-400"
                       tabIndex="0">
                        <HeartIcon className="w-6 h-6 stroke-1 text-gray-500"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}