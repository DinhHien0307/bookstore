import React from 'react'

export default function ProductContainer() {
  return (
    <div className="lg:max-w-[1430px] mx-auto">
      <div className="flex flex-wrap -mx-[15px]">
        <div className="product-gallery relative w-full px-15px box-border md:max-w-5/12 md:basic-5/12">
          <figure className="pt-14 box-border">
            <div className="w-[566px] h-auto ">
              <img className="mx-auto" src={require(`../../assets/book/300x452/book1.jpg`)} alt="book1" />
            </div>
          </figure>
        </div>
        <div className="product-summary relative w-full border-l border-l-[#eae8e4] md:max-w-7/12 md:basic-7/12">
          <div className="pt-16 lg:px-12 pb-8">
            <h1 className="text-[30px] mb-4">Product title</h1>
            <div className="text-base mb-8">
              <span className="product-amount">(3,714)</span>
              <span className="ml-3 font-weight-medium">By (author)</span>
              <span className="ml-2 text-gray-600">Anna Banks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}