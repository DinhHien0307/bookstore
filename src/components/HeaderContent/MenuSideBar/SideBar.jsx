import React from 'react'
import {ChevronRightIcon, XIcon} from "@heroicons/react/outline";
import {MenuSideBarData} from "./MenuSideBarData";
import {Link} from "react-router-dom";

export default function SideBar({showSidebar, setShowSidebar}) {
  return (
      <aside className={`w-[20vw] top-0 left-0 fixed h-full text-black z-1002 ease-in-out duration-300 shadow bg-white
       ${showSidebar ? "-translate-x-full" : "translate-x-0"}
      `}>
        <div className="side-bar-scroller">
          <header className="border-b border-gray-300 py-6 px-8 items-center flex justify-between">
            <h2 className="flex-wrap flex text-lg">SHOP BY CATEGORY</h2>
            <div className="flex-wrap flex">
              <button onClick={() => setShowSidebar(!showSidebar)}>
                <XIcon class="w-5 h-5" />
              </button>
            </div>
          </header>
          <div className="pt-6">
            <ul >
              {
                MenuSideBarData.map((item, index) => {
                      return (
                          <li className="block" key={index}>
                            <Link to={item.path} className="py-4 px-8 flex justify-between text-base hover:bg-pink-50">
                              {item.title}
                              <button className="flex items-center mr-1">
                                <ChevronRightIcon class="w-4 h-4" />
                              </button>
                            </Link>
                          </li>
                      )
                    }
                )
              }
            </ul>
          </div>
        </div>
      </aside>
  )
}