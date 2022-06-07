import React from 'react'
import {Link} from "react-router-dom";

export default function ListItem({title , link}) {
  return (
      <li className="nav-item relative list-item">
        <Link className="font-medium mx-6 py-8 flex text-[18px]" to={link}>{title}</Link>
      </li>
  )
}