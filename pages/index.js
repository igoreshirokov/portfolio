import Head from 'next/head'
import Header from '../components/Header/Header'
import Contacts from '../components/Pages/Contacts'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { HashNavigation } from 'swiper'
import Services from '../components/Pages/Services'
import Works from '../components/Pages/Works'
import Cv from '../components/Pages/Сv'
import { useState } from 'react'
import BriefForm from '../components/forms/BriefForm'
import Lang from '../components/Lang/Lang'

SwiperCore.use([HashNavigation]);

export default function Home() {
  const [pageSwiper, setPageSwiper] = useState(null)
  console.log(Lang().languages)
  return (
    <>
      <Head>
        <title>{Lang().headTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"  />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Swiper
        className="page-slider"
        slidesPerView="1"
        direction="vertical"
        allowTouchMove={false}
        onSwiper={setPageSwiper}
        hashNavigation={{
          watchState: true
        }}
      >
        <SwiperSlide
          className="page-slide"
          data-hash="contacts"
        >
          <Contacts />
        </SwiperSlide>
        <SwiperSlide
          className="page-slide"
          data-hash="services"
        >
          <Services />
        </SwiperSlide>
        <SwiperSlide
          className="page-slide"
          data-hash="portfolio"
        >
          <Works />
        </SwiperSlide>
        <SwiperSlide
          className="page-slide"
          data-hash="resume"
        >
          <Cv />
        </SwiperSlide>
        <SwiperSlide
          className="page-slide"
          data-hash="brief"
        >
          <BriefForm />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
