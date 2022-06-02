import React, {useState} from 'react'
import {MenuIcon} from "@heroicons/react/outline";
import SideBar from "./SideBar";

export default function MenuSideBar() {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
        <div className="offcanvas-toggler mr-14 p-2">
            <button onClick={() => setShowSidebar(!showSidebar)}>
                <MenuIcon class="h-8 w-8 text-black" />
            </button>
        </div>
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </>
  )
}