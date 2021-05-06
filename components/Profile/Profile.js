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
                <i className="whatsapp"></i>
                <i className="telegram"></i>
                <i className="vk"></i>
                <i className="github"></i>
            </div>
        </div>
    )
}