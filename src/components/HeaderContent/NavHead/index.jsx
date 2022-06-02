import React from 'react'
import MenuSideBar from "../MenuSideBar";

export default function NavHead() {
  return (
      <>
        <div className="masthead block border-b border-gray-500 relative">
          <div className="container-fluid px-14">
            <div className="items-center relative flex flex-wrap">
              <MenuSideBar />
              {/*<div className="site-branding pr-md-4">*/}
              {/*  <a href="index.html" className="d-block mb-1">*/}
              {/*  </a>*/}
              {/*</div>*/}
              {/*<div className="site-navigation mr-auto d-none d-xl-block">*/}
              {/*  <ul className="nav">*/}
              {/*    <li className="nav-item dropdown">*/}
              {/*      <a id="homeDropdownInvoker" href="#"*/}
              {/*         className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"*/}
              {/*         aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"*/}
              {/*         data-unfold-target="#homeDropdownMenu" data-unfold-type="css-animation"*/}
              {/*         data-unfold-duration="200" data-unfold-delay="50" data-unfold-hide-on-scroll="true"*/}
              {/*         data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">*/}
              {/*        Home*/}
              {/*      </a>*/}
              {/*      <ul id="homeDropdownMenu"*/}
              {/*          className="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900 u-unfold--css-animation u-unfold--reverse-y u-unfold--hidden"*/}
              {/*          aria-labelledby="homeDropdownInvoker" style="animation-duration: 200ms; left: 0px;">*/}
              {/*        <li><a href="../home/index.html" className="dropdown-item link-black-100">Home v1</a></li>*/}
              {/*        <li><a href="../home/home-v2.html" className="dropdown-item link-black-100">Home v2</a></li>*/}
              {/*        <li><a href="../home/home-v3.html" className="dropdown-item link-black-100">Home v3</a></li>*/}
              {/*        <li><a href="../home/home-v4.html" className="dropdown-item link-black-100">Home v4</a></li>*/}
              {/*        <li><a href="../home/home-v5.html" className="dropdown-item link-black-100">Home v5</a></li>*/}
              {/*        <li><a href="../home/home-v6.html" className="dropdown-item link-black-100">Home v6</a></li>*/}
              {/*        <li><a href="../home/home-v7.html" className="dropdown-item link-black-100">Home v7</a></li>*/}
              {/*        <li><a href="../home/home-v8.html" className="dropdown-item link-black-100">Home v8</a></li>*/}
              {/*        <li><a href="../home/home-v9.html" className="dropdown-item link-black-100">Home v9</a></li>*/}
              {/*        <li><a href="../home/home-v10.html" className="dropdown-item link-black-100">Home v10</a></li>*/}
              {/*        <li><a href="../home/home-v11.html" className="dropdown-item link-black-100">Home v11</a></li>*/}
              {/*        <li><a href="../home/home-v12.html" className="dropdown-item link-black-100">Home v12</a></li>*/}
              {/*        <li><a href="../home/home-v13.html" className="dropdown-item link-black-100">Home v13</a></li>*/}
              {/*      </ul>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item"><a href="#"*/}
              {/*                                className="nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium active border-bottom border-primary border-width-2">Categories</a>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item dropdown">*/}
              {/*      <a id="shopDropdownInvoker" href="#"*/}
              {/*         className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center target-of-invoker-has-unfolds"*/}
              {/*         aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"*/}
              {/*         data-unfold-target="#shopDropdownMenu" data-unfold-type="css-animation"*/}
              {/*         data-unfold-duration="200" data-unfold-delay="50" data-unfold-hide-on-scroll="true"*/}
              {/*         data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">*/}
              {/*        Shop*/}
              {/*      </a>*/}
              {/*      <ul id="shopDropdownMenu"*/}
              {/*          className="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900 u-unfold--css-animation u-unfold--hidden u-unfold--reverse-y"*/}
              {/*          aria-labelledby="shopDropdownInvoker" style="animation-duration: 200ms; left: 0px;">*/}
              {/*        <li className="position-relative">*/}
              {/*          <a id="shopDropdownsubmenuoneInvoker" href="#"*/}
              {/*             className="dropdown-toggle dropdown-item dropdown-item__sub-menu link-black-100 d-flex align-items-center justify-content-between"*/}
              {/*             aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"*/}
              {/*             data-unfold-target="#shopDropdownsubMenuone" data-unfold-type="css-animation"*/}
              {/*             data-unfold-duration="200" data-unfold-delay="100" data-unfold-hide-on-scroll="true"*/}
              {/*             data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">Shop List*/}
              {/*          </a>*/}
              {/*          <ul id="shopDropdownsubMenuone"*/}
              {/*              className="dropdown-unfold dropdown-menu dropdown-sub-menu font-size-2 rounded-0 border-gray-900 u-unfold--css-animation u-unfold--hidden fadeOut"*/}
              {/*              aria-labelledby="shopDropdownsubmenuoneInvoker" style="animation-duration: 200ms;">*/}
              {/*            <li><a href="../shop/v1.html" className="dropdown-item link-black-100">Shop List v1</a></li>*/}
              {/*            <li><a href="../shop/v2.html" className="dropdown-item link-black-100">Shop List v2</a></li>*/}
              {/*            <li><a href="../shop/v3.html" className="dropdown-item link-black-100">Shop List v3</a></li>*/}
              {/*            <li><a href="../shop/v4.html" className="dropdown-item link-black-100">Shop List v4</a></li>*/}
              {/*            <li><a href="../shop/v5.html" className="dropdown-item link-black-100">Shop List v5</a></li>*/}
              {/*            <li><a href="../shop/v6.html" className="dropdown-item link-black-100">Shop List v6</a></li>*/}
              {/*            <li><a href="../shop/v7.html" className="dropdown-item link-black-100">Shop List v7</a></li>*/}
              {/*            <li><a href="../shop/v8.html" className="dropdown-item link-black-100">Shop List v8</a></li>*/}
              {/*            <li><a href="../shop/v9.html" className="dropdown-item link-black-100">Shop List v9</a></li>*/}
              {/*          </ul>*/}
              {/*        </li>*/}
              {/*        <li className="position-relative">*/}
              {/*          <a id="shopDropdownsubmenutwoInvoker" href="#"*/}
              {/*             className="dropdown-toggle dropdown-item dropdown-item__sub-menu link-black-100 d-flex align-items-center justify-content-between"*/}
              {/*             aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"*/}
              {/*             data-unfold-target="#shopDropdownsubMenutwo" data-unfold-type="css-animation"*/}
              {/*             data-unfold-duration="200" data-unfold-delay="100" data-unfold-hide-on-scroll="true"*/}
              {/*             data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">Single Product*/}
              {/*          </a>*/}
              {/*          <ul id="shopDropdownsubMenutwo"*/}
              {/*              className="dropdown-unfold dropdown-menu dropdown-sub-menu font-size-2 rounded-0 border-gray-900 u-unfold--css-animation u-unfold--hidden fadeOut"*/}
              {/*              aria-labelledby="shopDropdownsubmenutwoInvoker" style="animation-duration: 200ms;">*/}
              {/*            <li><a href="../shop/single-product-v1.html" className="dropdown-item link-black-100">Shop*/}
              {/*              Single v1</a></li>*/}
              {/*            <li><a href="../shop/single-product-v2.html" className="dropdown-item link-black-100">Shop*/}
              {/*              Single v2</a></li>*/}
              {/*            <li><a href="../shop/single-product-v3.html" className="dropdown-item link-black-100">Shop*/}
              {/*              Single v3</a></li>*/}
              {/*            <li><a href="../shop/single-product-v4.html" className="dropdown-item link-black-100">Shop*/}
              {/*              Single v4</a></li>*/}
              {/*            <li><a href="../shop/single-product-v5.html" className="dropdown-item link-black-100">Shop*/}
              {/*              Single v5</a></li>*/}
              {/*            <li><a href="../shop/single-product-v6.html" className="dropdown-item link-black-100">Shop*/}
              {/*              Single v6</a></li>*/}
              {/*            <li><a href="../shop/single-product-v7.html" className="dropdown-item link-black-100">Shop*/}
              {/*              Single v7</a></li>*/}
              {/*          </ul>*/}
              {/*        </li>*/}
              {/*        <li><a href="../shop/cart.html" className="dropdown-item link-black-100">Shop cart</a></li>*/}
              {/*        <li><a href="../shop/checkout.html" className="dropdown-item link-black-100">Shop checkout</a>*/}
              {/*        </li>*/}
              {/*        <li><a href="../shop/my-account.html" className="dropdown-item link-black-100">Shop My Account</a>*/}
              {/*        </li>*/}
              {/*        <li><a href="../shop/order-received.html" className="dropdown-item link-black-100">Shop Order*/}
              {/*          Received</a></li>*/}
              {/*        <li><a href="../shop/order-tracking.html" className="dropdown-item link-black-100">Shop Order*/}
              {/*          Tracking</a></li>*/}
              {/*        <li><a href="../shop/store-location.html" className="dropdown-item link-black-100">Shop Store*/}
              {/*          Location</a></li>*/}
              {/*      </ul>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item">*/}
              {/*      <a id="featuresDropdownInvoker" href="#"*/}
              {/*         className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"*/}
              {/*         aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"*/}
              {/*         data-unfold-target="#featuresDropdownMenu" data-unfold-type="css-animation"*/}
              {/*         data-unfold-duration="200" data-unfold-delay="50" data-unfold-hide-on-scroll="true"*/}
              {/*         data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">*/}
              {/*        Pages*/}
              {/*      </a>*/}
              {/*      <div id="featuresDropdownMenu"*/}
              {/*           className="p-0 dropdown-unfold dropdown-menu megamenu font-size-2 rounded-0 border-gray-900 u-unfold--css-animation u-unfold--reverse-y u-unfold--hidden"*/}
              {/*           aria-labelledby="featuresDropdownInvoker"*/}
              {/*           style="width: 1100px; animation-duration: 200ms; right: 0px;">*/}
              {/*        <div className="row no-gutters">*/}
              {/*          <div className="col-8 px-1">*/}
              {/*            <div className="px-5 py-2 pb-5">*/}
              {/*              <div className="row">*/}
              {/*                <div className="col-3">*/}
              {/*                  <ul className="menu list-unstyled">*/}
              {/*                    <li><span*/}
              {/*                        className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Home</span>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/index.html" className="d-block link-black-100 py-1">Home v1</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v2.html" className="d-block link-black-100 py-1">Home v2</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v3.html" className="d-block link-black-100 py-1">Home v3</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v4.html" className="d-block link-black-100 py-1">Home v4</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v5.html" className="d-block link-black-100 py-1">Home v5</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v6.html" className="d-block link-black-100 py-1">Home v6</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v7.html" className="d-block link-black-100 py-1">Home v7</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v8.html" className="d-block link-black-100 py-1">Home v8</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v9.html" className="d-block link-black-100 py-1">Home v9</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../home/home-v10.html" className="d-block link-black-100 py-1">Home*/}
              {/*                      v10</a></li>*/}
              {/*                    <li><a href="../home/home-v11.html" className="d-block link-black-100 py-1">Home*/}
              {/*                      v11</a></li>*/}
              {/*                    <li><a href="../home/home-v12.html" className="d-block link-black-100 py-1">Home*/}
              {/*                      v12</a></li>*/}
              {/*                    <li><a href="../home/home-v13.html" className="d-block link-black-100 py-1">Home*/}
              {/*                      v13</a></li>*/}
              {/*                  </ul>*/}
              {/*                </div>*/}
              {/*                <div className="col-3">*/}
              {/*                  <ul className="menu list-unstyled">*/}
              {/*                    <li><span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Single Product</span>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/single-product-v1.html" className="d-block link-black-100 py-1">Single*/}
              {/*                      Product v1</a></li>*/}
              {/*                    <li><a href="../shop/single-product-v2.html" className="d-block link-black-100 py-1">Single*/}
              {/*                      Product v2</a></li>*/}
              {/*                    <li><a href="../shop/single-product-v3.html" className="d-block link-black-100 py-1">Single*/}
              {/*                      Product v3</a></li>*/}
              {/*                    <li><a href="../shop/single-product-v4.html" className="d-block link-black-100 py-1">Single*/}
              {/*                      Product v4</a></li>*/}
              {/*                    <li><a href="../shop/single-product-v5.html" className="d-block link-black-100 py-1">Single*/}
              {/*                      Product v5</a></li>*/}
              {/*                    <li><a href="../shop/single-product-v6.html" className="d-block link-black-100 py-1">Single*/}
              {/*                      Product v6</a></li>*/}
              {/*                    <li><a href="../shop/single-product-v7.html" className="d-block link-black-100 py-1">Single*/}
              {/*                      Product v7</a></li>*/}
              {/*                    <li><span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Shop Pages</span>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/cart.html" className="d-block link-black-100 py-1">Shop cart</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/checkout.html" className="d-block link-black-100 py-1">Shop*/}
              {/*                      checkout</a></li>*/}
              {/*                    <li><a href="../shop/my-account.html" className="d-block link-black-100 py-1">Shop My*/}
              {/*                      Account</a></li>*/}
              {/*                    <li><a href="../shop/order-received.html" className="d-block link-black-100 py-1">Shop*/}
              {/*                      Order Received</a></li>*/}
              {/*                    <li><a href="../shop/order-tracking.html" className="d-block link-black-100 py-1">Shop*/}
              {/*                      Order Tracking</a></li>*/}
              {/*                    <li><a href="../shop/store-location.html" className="d-block link-black-100 py-1">Shop*/}
              {/*                      Store Location</a></li>*/}
              {/*                  </ul>*/}
              {/*                </div>*/}
              {/*                <div className="col-3">*/}
              {/*                  <ul className="menu list-unstyled">*/}
              {/*                    <li><span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Shop List</span>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v1.html" className="d-block link-black-100 py-1">Shop List v1</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v2.html" className="d-block link-black-100 py-1">Shop List v2</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v3.html" className="d-block link-black-100 py-1">Shop List v3</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v4.html" className="d-block link-black-100 py-1">Shop List v4</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v5.html" className="d-block link-black-100 py-1">Shop List v5</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v6.html" className="d-block link-black-100 py-1">Shop List v6</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v7.html" className="d-block link-black-100 py-1">Shop List v7</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v8.html" className="d-block link-black-100 py-1">Shop List v8</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../shop/v9.html" className="d-block link-black-100 py-1">Shop List v9</a>*/}
              {/*                    </li>*/}
              {/*                    <li><span*/}
              {/*                        className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Blog</span>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../blog/blog-v1.html" className="d-block link-black-100 py-1">Blog v1</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../blog/blog-v2.html" className="d-block link-black-100 py-1">Blog v2</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../blog/blog-v3.html" className="d-block link-black-100 py-1">Blog v3</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../blog/blog-single.html" className="d-block link-black-100 py-1">Blog*/}
              {/*                      Single</a></li>*/}
              {/*                  </ul>*/}
              {/*                </div>*/}
              {/*                <div className="col-3">*/}
              {/*                  <ul className="menu list-unstyled">*/}
              {/*                    <li><span*/}
              {/*                        className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">Others</span>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../others/404.html" className="d-block link-black-100 py-1">404</a></li>*/}
              {/*                    <li><a href="../others/about.html" className="d-block link-black-100 py-1">About*/}
              {/*                      Us</a></li>*/}
              {/*                    <li><a href="../others/authors-list.html" className="d-block link-black-100 py-1">Authors*/}
              {/*                      List</a></li>*/}
              {/*                    <li><a href="../others/authors-single.html" className="d-block link-black-100 py-1">Authors*/}
              {/*                      Single</a></li>*/}
              {/*                    <li><a href="../others/coming-soon.html" className="d-block link-black-100 py-1">Coming*/}
              {/*                      Soon</a></li>*/}
              {/*                    <li><a href="../others/contact.html" className="d-block link-black-100 py-1">Contact*/}
              {/*                      Us</a></li>*/}
              {/*                    <li><a href="../others/faq.html" className="d-block link-black-100 py-1">FAQ</a></li>*/}
              {/*                    <li><a href="../others/pricing-table.html" className="d-block link-black-100 py-1">Pricing*/}
              {/*                      Table</a></li>*/}
              {/*                    <li><a href="../others/terms-conditions.html" className="d-block link-black-100 py-1">Terms*/}
              {/*                      Conditions</a></li>*/}
              {/*                    <li><a href="../../documentation/index.html"*/}
              {/*                           className="btn btn-primary mb-3 mb-md-0 mb-xl-3 mt-4 font-size-2 btn-block">Documentation</a>*/}
              {/*                    </li>*/}
              {/*                    <li><a href="../../starter/index.html"*/}
              {/*                           className="btn btn-secondary font-size-2 btn-block mb-2">Starter</a></li>*/}
              {/*                  </ul>*/}
              {/*                </div>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*          <div className="col-4 bg-gray-200">*/}
              {/*            <div className="banner px-8 py-5">*/}
              {/*              <div className="banner__body">*/}
              {/*                <h3 className="banner_text m-0">*/}
              {/*                  <span className="d-block mb-1 font-size-7 font-weight-regular">Deals in </span>*/}
              {/*                  <span className="d-block mb-2 font-size-10 text-primary font-weight-bold">Books</span>*/}
              {/*                </h3>*/}
              {/*                <a href="#" className="d-block link-black-100 mb-6">Shop Now</a>*/}
              {/*                <div className="banner__image">*/}
              {/*                </div>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item dropdown">*/}
              {/*      <a id="blogDropdownInvoker" href="#"*/}
              {/*         className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"*/}
              {/*         aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"*/}
              {/*         data-unfold-target="#blogDropdownMenu" data-unfold-type="css-animation"*/}
              {/*         data-unfold-duration="200" data-unfold-delay="50" data-unfold-hide-on-scroll="true"*/}
              {/*         data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">*/}
              {/*        Blog*/}
              {/*      </a>*/}
              {/*      <ul id="blogDropdownMenu"*/}
              {/*          className="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900 u-unfold--css-animation u-unfold--hidden"*/}
              {/*          aria-labelledby="blogDropdownInvoker" style="animation-duration: 200ms; left: 0px;">*/}
              {/*        <li><a href="../blog/blog-v1.html" className="dropdown-item link-black-100">Blog v1</a></li>*/}
              {/*        <li><a href="../blog/blog-v2.html" className="dropdown-item link-black-100">Blog v2</a></li>*/}
              {/*        <li><a href="../blog/blog-v3.html" className="dropdown-item link-black-100">Blog v3</a></li>*/}
              {/*        <li><a href="../blog/blog-single.html" className="dropdown-item link-black-100">Blog Single</a>*/}
              {/*        </li>*/}
              {/*      </ul>*/}
              {/*    </li>*/}
              {/*    <li className="nav-item dropdown">*/}
              {/*      <a id="pagesDropdownInvoker" href="#"*/}
              {/*         className="dropdown-toggle nav-link link-black-100 mx-4 px-0 py-5 font-weight-medium d-flex align-items-center"*/}
              {/*         aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"*/}
              {/*         data-unfold-target="#pagesDropdownMenu" data-unfold-type="css-animation"*/}
              {/*         data-unfold-duration="200" data-unfold-delay="50" data-unfold-hide-on-scroll="true"*/}
              {/*         data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">*/}
              {/*        Others*/}
              {/*      </a>*/}
              {/*      <ul id="pagesDropdownMenu"*/}
              {/*          className="dropdown-unfold dropdown-menu font-size-2 rounded-0 border-gray-900 u-unfold--css-animation u-unfold--reverse-y u-unfold--hidden"*/}
              {/*          aria-labelledby="pagesDropdownInvoker" style="animation-duration: 200ms; left: 0px;">*/}
              {/*        <li><a href="../others/404.html" className="dropdown-item link-black-100">404</a></li>*/}
              {/*        <li><a href="../others/about.html" className="dropdown-item link-black-100">About Us</a></li>*/}
              {/*        <li><a href="../others/authors-list.html" className="dropdown-item link-black-100">Authors*/}
              {/*          List</a></li>*/}
              {/*        <li><a href="../others/authors-single.html" className="dropdown-item link-black-100">Authors*/}
              {/*          Single</a></li>*/}
              {/*        <li><a href="../others/coming-soon.html" className="dropdown-item link-black-100">Coming Soon</a>*/}
              {/*        </li>*/}
              {/*        <li><a href="../others/contact.html" className="dropdown-item link-black-100">Contact Us</a></li>*/}
              {/*        <li><a href="../others/faq.html" className="dropdown-item link-black-100">FAQ</a></li>*/}
              {/*        <li><a href="../others/pricing-table.html" className="dropdown-item link-black-100">Pricing*/}
              {/*          Table</a></li>*/}
              {/*        <li><a href="../others/terms-conditions.html" className="dropdown-item link-black-100">Terms*/}
              {/*          Conditions</a></li>*/}
              {/*      </ul>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
              {/*<ul className="d-md-none nav mr-md-n3 ml-auto">*/}
              {/*  <li className="nav-item">*/}

              {/*    <a id="sidebarNavToggler9" href="javascript:;" role="button"*/}
              {/*       className="px-2 nav-link link-black-100 target-of-invoker-has-unfolds"*/}
              {/*       aria-controls="sidebarContent9" aria-haspopup="true" aria-expanded="false"*/}
              {/*       data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent9"*/}
              {/*       data-unfold-type="css-animation" data-unfold-overlay="{*/}
              {/*                      &quot;className&quot;: &quot;u-sidebar-bg-overlay&quot;,*/}
              {/*                      &quot;background&quot;: &quot;rgba(0, 0, 0, .7)&quot;,*/}
              {/*                      &quot;animationSpeed&quot;: 500*/}
              {/*                  }" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight"*/}
              {/*       data-unfold-duration="500">*/}
              {/*      <i className="glph-icon flaticon-user"></i>*/}
              {/*    </a>*/}

              {/*  </li>*/}
              {/*</ul>*/}
              {/*<div className="site-search ml-xl-0 ml-md-auto w-r-100 my-2 my-xl-0">*/}
              {/*  <form className="form-inline">*/}
              {/*    <div className="input-group">*/}
              {/*      <div className="input-group-prepend">*/}
              {/*        <i className="glph-icon flaticon-loupe input-group-text py-2d75 bg-white-100 border-white-100"></i>*/}
              {/*      </div>*/}

              {/*    </div>*/}
              {/*    <button className="btn btn-outline-success my-2 my-sm-0 sr-only" type="submit">Search</button>*/}
              {/*  </form>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </>
  )
}