
import Profile from '../Profile/Profile'

export default function Contacts() {
    return (
        <div className="container">
            <div className="content contacts">
                <div className="welcome">
                    <h1>Привет, Мир!</h1>
                    <p>
                        Меня зовут Игорь. Я разработчик из России. Занимаюсь разработкой интерфейсов, веб-сайтов, сбором информации.
                        Я всегда доступен для предложений о сотрудничестве.
            </p>
                    <a href="#brief"><button className="brief-button">Заполнить бриф и узнать стоимость</button></a>
                </div>
                <div className="profile-wrapper">
                    <Profile />
                </div>
            </div>
        </div>
    )
}