import React from 'react'
import MenuSideBar from "./MenuSideBar";
import {Link} from "react-router-dom";
import ListNavigation from "./ListNavigation";
import {SearchIcon} from "@heroicons/react/outline";

export default function NavHead() {
    return (
        <>
            <div className="masthead block border-b border-b-gray-300 relative">
                <div className="container-fluid px-14">
                    <div className="items-center relative flex flex-wrap">
                        {/*Menu side bar.*/}
                        <MenuSideBar/>

                        {/*Logo.*/}
                        <div className="site-branding z1 pr-8">
                            <Link to="/">
                                <img alt="logo" className="w-30 h-12 z-0" src={require('../../../assets/logo4.jpg')}/>
                            </Link>
                        </div>

                        {/*List navigation.*/}
                        <ListNavigation />

                        {/*Header search.*/}
                        <div className="site-search w-auto">
                          <form className="form-inline flex flex-row flex-wrap items-center">
                            <div className="input-group flex flex-wrap items-stretch">
                              <div className="input-group-prepend flex">
                                  <SearchIcon className="w-12 h-12 border-[#f6f5f3] bg-[#f6f5f3] px-4 py-3 rounded-tl-2xl rounded-bl-2xl" />
                                  <input className="form-control w-auto border-[#f6f5f3] bg-[#f6f5f3] min-w-[380px] px-4 py-3
                                  align-middle rounded-tr-2xl rounded-br-2xl focus:outline-0 text-sm"
                                      type="search" placeholder="Search for Books by Keyword ..." aria-label="Search">
                                  </input>
                              </div>

                            </div>
                            <button className="btn btn-outline-success my-2 my-sm-0 sr-only" type="submit">Search</button>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}