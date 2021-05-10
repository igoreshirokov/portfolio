import Image from 'next/image'
import Link from 'next/link'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay])

export default function oldportfolio() {
    const images = [
        "oldportfolio/oldportfolio-2.jpg",
        "oldportfolio/oldportfolio-1.jpg",
        "oldportfolio/oldportfolio-3.jpg",
        "oldportfolio/oldportfolio-4.jpg",
        "oldportfolio/oldportfolio-5.jpg",
        "oldportfolio/oldportfolio-6.jpg",
    ]


    return (
        <>
            <div className="special-navigation">
                <Link href="/#portfolio">
                    <a>
                        <button>
                            Назад
                        </button>
                    </a>
                </Link>
            </div>
            <div className="work-preview">
                <div className="work-preview_slider">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 1000
                        }}
                    >
                        {images.map(image => {
                            return (
                                <SwiperSlide className="work-preview_slide">
                                    <img src={`/images/works/${image}`}  />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="work-preview_description">
                    <h1>Верстка сайта портфолио</h1>
                    <div className="work-preview_description-summary">
                        <span>Url: <b><a href="http://81.177.48.218:9998/">http://81.177.48.218:9998/</a></b></span>
                    </div>
                    <p>Верстка сайта</p>
                </div>
            </div>
        </>
    )
}