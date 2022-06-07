import React from 'react'
import ListItem from "./ListItem";

export default function ListNavigation() {
  return (
      <div className="site-navigation block mr-auto ">
          <ul className="nav-item flex flex-wrap">
              <ListItem title={'Home'} link={'/'} />
              <ListItem title={'Shop'} link={'/shop'} />
              <ListItem title={'About Us'} link={'/aboutus'} />
          </ul>
      </div>
  )
}