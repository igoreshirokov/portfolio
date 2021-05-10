import Image from 'next/image'
import Lang from '../Lang/Lang'

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-image">
                <Image src="/images/profile.jpg" layout="fill" objectFit="cover" alt={Lang().profileName} />
            </div>
            <h4>{Lang().profileName}</h4>
            <span>{Lang().profilePosition}</span>
            <div className="social-links">
                <a href="https://wa.me/79629996842" target="_blank">
                    <i className="whatsapp"></i>
                </a>
                <a href="https://t.me/qusteek" target="_blank">
                    <i className="telegram"></i>
                </a>
                <a href="https://vk.com/igorqusty" target="_blank">
                    <i className="vk"></i>
                </a>
                <a href="https://github.com/igoreshirokov" target="_blank">
                    <i className="github"></i>
                </a>
            </div>
        </div>
    )
}