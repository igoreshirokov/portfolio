import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'


export default function Works() {
    return (

        <div className="section works">
            <div className="page-headline">
                <h1>Работы</h1>
            </div>
            <div className="content works-list">
                <ul>
                    <li>
                        <Image src="/images/works/work1.png" alt="Интернет-магазин обуви" layout="fill" />
                        <h4>Интернет-магазин обуви</h4>
                    </li>
                    <li>
                        <Image src="/images/works/work2.png" alt="Интернет-магазин обуви" layout="fill" />
                        <h4>Интернет-магазин обуви</h4>
                    </li>
                    <li>
                        <Image src="/images/works/work3.png" alt="Интернет-магазин обуви" layout="fill" />
                        <h4>Интернет-магазин обуви</h4>
                    </li>
                    <li>
                        <Image src="/images/works/work4.png" alt="Интернет-магазин обуви" layout="fill" />
                        <h4>Интернет-магазин обуви</h4>
                    </li>
                    <li>
                        <Image src="/images/works/work5.png" alt="Интернет-магазин обуви" layout="fill" />
                        <h4>Интернет-магазин обуви</h4>
                    </li>
                    <li>
                        <Image src="/images/works/work6.png" alt="Интернет-магазин обуви" layout="fill" />
                        <h4>Интернет-магазин обуви</h4>
                    </li>
                    <li>
                        <Image src="/images/works/work7.png" alt="Интернет-магазин обуви" layout="fill" />
                        <h4>Интернет-магазин обуви и кепок</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}