import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function uggshop() {
    const images = [
        "vkshop/vkshop-main.jpg",
        "vkshop/vkshop-mobile.jpg",
        "vkshop/vkshop-product.jpg",
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
                    <h1>Магазин обуви</h1>
                    <div className="work-preview_description-summary">
                        <span>Backend: <b>Wordpress</b></span>
                        <span>Frontend: <b>Next.js</b></span>
                    </div>
                    <p>Проект состоял из нескольких этапов: сбор данных, прототипирование, дизайн, разработка. Фотографии парсил скриптом из социальной сети.</p>
                </div>
            </div>
        </>
    )
}