import React, {useState} from 'react'
import ProductBox from "./ProductBox";

export default function Books({data}) {
  return (
      <>
        {data &&
          <div id="templatemo_content_right">
            {
              data.map((book) => (
                  <>
                    <ProductBox key={book.id} book={book}/>
                  </>

              ))
            }
            <a href="#"><img src={require('../images/templatemo_ads.jpg')} alt="ads"/></a>
          </div>
        }
      </>
  )
}