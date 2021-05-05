import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function Services() {
    return (

        <div className="section services">
            <div className="page-headline">
                <h1>Услуги</h1>
            </div>
            <div className="content services-list">
                <Swiper
                    className="services-swiper"
                    slidesPerView="auto"
                    spaceBetween="30"
                    centeredSlides={true}
                >
                    <SwiperSlide
                        className="services-slide"
                    >
                        <div className="service-card">
                            <i className="service-card-icon consult">
                                {/* <Image src="/images/services/counsult.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>Консультации онлайн</h4>
                            <p>Подделюсь опытом в сфере разработки веб-приложений. Помогу разобраться новичкам изучающим программирование</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="services-slide"
                    >
                        <div className="service-card">
                            <i className="service-card-icon turnkey">
                                {/* <Image src="/images/services/turnkey.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>Консультации онлайн</h4>
                            <p>Подделюсь опытом в сфере разработки веб-приложений. Помогу разобраться новичкам изучающим программирование</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="services-slide"
                    >
                        <div className="service-card">
                            <i className="service-card-icon develop">
                                {/* <Image src="/images/services/develop.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>Консультации онлайн</h4>
                            <p>Подделюсь опытом в сфере разработки веб-приложений. Помогу разобраться новичкам изучающим программирование</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="services-slide"
                    >
                        <div className="service-card">
                            <i className="service-card-icon parsing">
                                {/* <Image src="/images/services/parsing.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>Консультации онлайн</h4>
                            <p>Подделюсь опытом в сфере разработки веб-приложений. Помогу разобраться новичкам изучающим программирование</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className="services-slide"
                    >
                        <div className="service-card">
                            <i className="service-card-icon design">
                                {/* <Image src="/images/services/design.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>Консультации онлайн</h4>
                            <p>Подделюсь опытом в сфере разработки веб-приложений. Помогу разобраться новичкам изучающим программирование</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}