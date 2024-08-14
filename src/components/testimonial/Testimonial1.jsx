import React from 'react'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation,Pagination,} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Testimonial1() {
  const testimonialSl = {
    slidesPerView: "auto",
  speed: 1200,
  autoplay: true,
  effect: 'fade',
  crossFade: 'true',
  spaceBetween: 25,
  autoplay: 'true',
  loop: true,
  roundLengths: true,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.testi3-prev',
    prevEl: '.testi3-next',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
      280:{
          slidesPerView: 1
        },
    480:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 1
    },
    992:{ 
      slidesPerView: 1
    },
    1200:{
      slidesPerView: 1
    },
  }
  }
  return (
    <>
     <div className="testimonial-section ">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="section-title1 text-center">
          <h2>Testimonials</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row justify-content-center">
      <Swiper {...testimonialSl} className="swiper testi3-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="testi3-single sibling2">
              <div className="image">
                <img src="assets/images/bg/testi31.png" alt="image" />
                <div className="img-content">
                  <h3>Jaon R.</h3>
                  <span>Chicago, IL</span>
                </div>
              </div>
              <div className="content">
                <img src="assets/images/icons/testi-quote.svg" className="testi3-quote" alt="image" />
                <p>I was worried about how I'd make ends meet while my case dragged on, but Diamond Back gave me the financial support I needed. 
                  Their team was compassionate and professional, and the process was surprisingly fast. I couldn't be more grateful! 
                  I received <bold style={{fontWeight: 'bold'}}>$25,000</bold>, which helped me stay afloat during the toughest time.</p>
                <span className="ms-auto">01</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testi3-single sibling2">
              <div className="image">
                <img src="assets/images/bg/testi32.png" alt="image" />
                <div className="img-content">
                  <h3>Michael L.</h3>
                  <span>New York, NY</span>
                </div>
              </div>
              <div className="content">
                <img src="assets/images/icons/testi-quote.svg" className="testi3-quote" alt="image" />
                <p>The team at Diamond Back was incredibly helpful and responsive. I never felt like I was just another client—they truly cared about my situation. 
                  The funding allowed me to focus on my case without worrying about finances.
                  The <bold style={{fontWeight: 'bold'}}>$40,000</bold> they provided allowed me to fight for the justice I deserved.</p>
                <span className="ms-auto">02</span>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="slider-arrows testi3-arrows text-center d-lg-flex d-none flex-row justify-content-center align-items-center gap-5">
        <div className="testi3-prev swiper-prev-arrow style-3" tabIndex={0} role="button" aria-label="Previous slide"> 
          <img src="assets/images/icons/arr-prev.svg" alt="image" />
        </div>
        <div className="testi3-next swiper-next-arrow style-3" tabIndex={0} role="button" aria-label="Next slide"> 
          <img src="assets/images/icons/arr-next.svg" alt="image" />
        </div>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Testimonial1