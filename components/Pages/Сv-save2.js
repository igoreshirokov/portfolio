import Image from 'next/image'
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import Profile from '../Profile/Profile'

SwiperCore.use([Scrollbar, Mousewheel])

export default function Cv() {
    return (


        <Swiper
            direction={'vertical'}
            slidesPerView={'1'}
            freeMode={true}
            // scrollbar={{
            //     draggable: true
            // }}
            mousewheel={true}
            spaceBetween="0"
            className="resume-slider"
        >
            <SwiperSlide>
                <div className="section cv">
                    <div className="page-headline">
                        <h1>Резюме</h1>
                    </div>
                    <Profile />

                    <div className="resume-aboutme">
                        <h5>Обо мне</h5>
                        <p>Имею опыт разработки небольших проектов. Занимаюсь частными заказами и своими проектами.
                        Я не работал в команде разработки.
                        Средний навык верстки,  верстки в JSX.
                    Живу в Москве. <br />
                    Открыт к предложениям.</p>
                    </div>


                    <div className="resume-skills">
                        <div className="resume-speech">
                            <h5>Языки</h5>
                            <p>Русский - носитель</p>
                            <p>English - intermediate</p>
                        </div>
                        <div className="resume-programming">
                            <h5>Языки программирования</h5>
                            <p>JavaScript/NODE, PHP, Python</p>
                        </div>
                        <div className="resume-design">
                            <h5>Дизайн</h5>
                            <p>Figma, Photoshop, Illustrator</p>
                        </div>
                        <div className="resume-cms">
                            <h5>CMS</h5>
                            <p>Wordpress, Modx, Opencart, Strapi</p>
                        </div>
                        <div className="resume-frameworks">
                            <h5>Freameworks, библиотеки</h5>
                            <p>React, NEXT.js, Laravel, Wordpress, Prisma.js, SASS, Tilewind.css, Bootstrap, БЭМ, NGinx, Apache, Ubuntu, Swiper.js, phpQuery.</p>
                        </div>
                        <div className="resume-speech">
                            <h5>Языки</h5>
                            <p>Русский - носитель</p>
                            <p>English - intermediate</p>
                        </div>
                        <div className="resume-programming">
                            <h5>Языки программирования</h5>
                            <p>JavaScript/NODE, PHP, Python</p>
                        </div>
                        <div className="resume-design">
                            <h5>Дизайн</h5>
                            <p>Figma, Photoshop, Illustrator</p>
                        </div>
                        <div className="resume-cms">
                            <h5>CMS</h5>
                            <p>Wordpress, Modx, Opencart, Strapi</p>
                        </div>
                        <div className="resume-frameworks">
                            <h5>Freameworks, библиотеки</h5>
                            <p>React, NEXT.js, Laravel, Wordpress, Prisma.js, SASS, Tilewind.css, Bootstrap, БЭМ, NGinx, Apache, Ubuntu, Swiper.js, phpQuery.</p>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
        </Swiper>


    )
}