import Image from 'next/image'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Lang from '../Lang/Lang'
import { useRouter } from 'next/router'
SwiperCore.use([Autoplay])

export default function Works() {
    const router = useRouter()
    function hundlerWorkClick(event) {
        const dataName = event.clickedSlide.dataset.name;
        router.push(`/works/${dataName}`)
        
        console.log(event.clickedSlide.dataset)
    }

    return (
        <div className="section works">
            <div className="page-headline">
                <h1>{Lang().worksTitle}</h1>
            </div>
            <div className="works-list">

                <Swiper
                    onClick={hundlerWorkClick}
                    wrapperTag="ul"
                    slidesPerView="1"
                    autoplay={{
                        delay: 2000
                    }}
                    loop={true}
                    breakpoints={{
                        996: {
                            slidesPerView: "3"
                        }
                    }}
                    className="works-swiper"
                >
                    <SwiperSlide data-name="uggshop">
                        <li>
                            <Image src="/images/works/uggshop/uggshop-main.jpg" alt="Интернет-магазин обуви" layout="fill" />
                            <h4>{Lang().worksWork1}</h4>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide data-name="vkshop">
                        <li>
                            <Image src="/images/works/vkshop/vkshop-main.jpg" alt="Интернет-магазин обуви" layout="fill" />
                            <h4>{Lang().worksWork2}</h4>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide data-name="mssh">
                        <li>
                            <Image src="/images/works/mssh/mssh-0.jpg" alt="Сайт ателье" layout="fill" />
                            <h4>{Lang().worksWork3}</h4>
                        </li>
                    </SwiperSlide>
                    <SwiperSlide data-name="oldportfolio">
                        <li>
                            <Image src="/images/works/oldportfolio/oldportfolio-2.jpg" alt="Верстка сайта портфолио" layout="fill" />
                            <h4>{Lang().worksWork4}</h4>
                        </li>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

    )
}