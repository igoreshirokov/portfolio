
import Profile from '../Profile/Profile'
import Lang from "../Lang/Lang"

export default function Contacts() {
    return (
        <div className="container">
            <div className="content contacts">
                <div className="welcome">
                    <h1>{Lang().welcomeTitle}</h1>
                    <p>{Lang().welcomeSubtitle}</p>
                    {/* <a href="#brief"><button className="brief-button">{Lang().welcomeBriefButton}</button></a> */}
                </div>
                <div className="profile-wrapper">
                    <Profile />
                </div>
            </div>
        </div>
    )
}