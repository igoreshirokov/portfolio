import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import Lang from '../Lang/Lang'

export default function Services() {
    return (

        <div className="section services">
            <div className="page-headline">
                <h1>{Lang().servicesTitle}</h1>
            </div>
            <div className="content services-list">
                <Swiper
                    className="services-swiper"
                    slidesPerView={2}
                    spaceBetween={20}
                    centeredSlides={true}
                    breakpoints={{
                        768: {
                            centeredSlides: false,
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                // loop={true}
                >
                    <SwiperSlide>
                        <div className="service-card">
                            <i className="service-card-icon consult">
                                {/* <Image src="/images/services/counsult.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>{Lang().servicesSlide1Title}</h4>
                            <p>{Lang().servicesSlide1Desc}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide

                    >
                        <div className="service-card">
                            <i className="service-card-icon turnkey">
                                {/* <Image src="/images/services/turnkey.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>{Lang().servicesSlide2Title}</h4>
                            <p>{Lang().servicesSlide2Desc}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide

                    >
                        <div className="service-card">
                            <i className="service-card-icon develop">
                                {/* <Image src="/images/services/develop.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>{Lang().servicesSlide3Title}</h4>
                            <p>{Lang().servicesSlide3Desc}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide

                    >
                        <div className="service-card">
                            <i className="service-card-icon parsing">
                                {/* <Image src="/images/services/parsing.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>{Lang().servicesSlide4Title}</h4>
                            <p>{Lang().servicesSlide4Desc}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide

                    >
                        <div className="service-card">
                            <i className="service-card-icon design">
                                {/* <Image src="/images/services/design.svg" layout="fill" objectFit="contain" alt="Консультации" /> */}
                            </i>
                            <h4>{Lang().servicesSlide5Title}</h4>
                            <p>{Lang().servicesSlide5Desc}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}