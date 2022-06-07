import React from 'react'

export default function Sale() {
  return (
      <section className="pb-24">
        <div className="bg-gray-200 space-2 space-lg-0 bg-img-hero bg-homebg-img1">
          <div className="container m-auto max-w-[1430px]">
              <div
                  id="carouselDarkVariant"
                  className="carousel slide carousel-fade carousel-dark relative py-4"
                  data-bs-ride="carousel"
              >
                  {/*Indicators*/}
                  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                      <button
                          data-bs-target="#carouselDarkVariant"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                      ></button>
                      <button
                          data-bs-target="#carouselDarkVariant"
                          data-bs-slide-to="1"
                          aria-label="Slide 1"
                      ></button>
                      <button
                          data-bs-target="#carouselDarkVariant"
                          data-bs-slide-to="2"
                          aria-label="Slide 1"
                      ></button>
                  </div>

                  {/*Inner*/}
                  <div className="carousel-inner relative w-full overflow-hidden">
                      {/*Single item*/}
                      <div className="carousel-item active relative float-left w-full">
                          <img
                              src={require('../../assets/sale/bigsale-062022resize_840.jpg')}
                              className="block w-full"
                              alt="Motorbike Smoke"
                          />
                      </div>

                      <div className="carousel-item relative float-left w-full">
                          <img
                              src={require('../../assets/sale/disney-resize-t6.jpg')}
                              className="block w-full"
                              alt="Mountaintop"
                          />
                      </div>

                      <div className="carousel-item relative float-left w-full">
                          <img
                              src={require('../../assets/sale/quoctethieunhi_1.2_840x320.jpg')}
                              className="block w-full"
                              alt="Woman Reading a Book"
                          />
                      </div>
                  </div>

                  {/*Controls*/}
                  <button
                      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                      type="button"
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide="prev"
                  >
                      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                      type="button"
                      data-bs-target="#carouselDarkVariant"
                      data-bs-slide="next"
                  >
                      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
        </div>
      </section>
  )
}