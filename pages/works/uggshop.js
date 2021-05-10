import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function uggshop() {
    const images = [
        "uggshop/uggshop-main.jpg",
        "uggshop/uggshop-catalog.jpg",
        "uggshop/uggshop-product.jpg",
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
                        autoplay={true}
                    >
                        {images.map(image => {
                            return (
                                <SwiperSlide className="work-preview_slide">
                                    <img src={`/images/works/${image}`} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="work-preview_description">
                    <h1>Магазин UGG</h1>
                    <div className="work-preview_description-summary">
                        <span>Backend: <b>Laravel</b></span>
                        <span>Frontend: <b>Next.js</b></span>
                        <span>Url: <b><a href="http://81.177.48.218:9996/">http://81.177.48.218:9996/</a></b></span>
                    </div>
                    <p>Проект состоял из нескольких этапов: сбор данных, прототипирование, дизайн, разработка.</p>
                </div>
            </div>
        </>
    )
}