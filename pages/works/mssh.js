import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function mssh() {
    const images = [
        "mssh/mssh-0.jpg",
        "mssh/mssh-1.jpg",
        "mssh/mssh-2.jpg",
        "mssh/mssh-3.jpg",
        "mssh/mssh-4.jpg",
        "mssh/mssh-5.jpg",
        "mssh/mssh-6.jpg",
        "mssh/mssh-7.jpg",
        "mssh/mssh-8.jpg",
        "mssh/mssh-9.jpg",
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
                                    <img src={`/images/works/${image}`}  />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="work-preview_description">
                    <h1>Ателье по декорированию одежды</h1>
                    <div className="work-preview_description-summary">
                        <span>Backend: <b>Wordpress</b></span>
                        <span>Frontend: <b>Theme with React</b></span>
                        <span>Url: <b><a href="http://81.177.48.218:9999/">http://81.177.48.218:9999/</a></b></span>
                    </div>
                    <p>Самостоятельный проект. Контент в каталог добавляется при помощи специальной таксономии Wordpress. </p>
                </div>
            </div>
        </>
    )
}