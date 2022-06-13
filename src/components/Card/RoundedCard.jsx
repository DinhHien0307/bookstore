import React from 'react'

export default function RoundedCard({item}) {
  return (
      <li key={item.id} className="author w-[280px] list-none" data-slick-index="3" aria-hidden="false" tabIndex="0">
        <a href="#" className="text-reset" tabIndex="0">
            <img alt="author" className="mx-auto max-w-[100%] h-auto z-0 mb-8 rounded-full"
                 src={require(`../../assets/author/${item.image}.jpg`)}/>
            <div className="author-body text-center">
              <h2 className="author-name h6 mb-0">{item.name}</h2>
              <div className="text-gray-700 font-size-2">{item.publishedbook} Published Books</div>
            </div>
        </a>
      </li>
  )
}