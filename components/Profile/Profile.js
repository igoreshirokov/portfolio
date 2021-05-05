import Image from 'next/image'

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-image">
                <Image src="/images/profile.jpg" layout="fill" objectFit="cover" alt="Татарченко Игорь" />
            </div>
            <h4>Татарченко Игорь</h4>
            <span>(веб-разработчик)</span>
            <div className="social-links">
                <i className="whatsapp"></i>
                <i className="telegram"></i>
                <i className="vk"></i>
                <i className="github"></i>
            </div>
        </div>
    )
}