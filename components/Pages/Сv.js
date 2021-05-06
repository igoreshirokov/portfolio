import Profile from '../Profile/Profile'
import Lang from '../Lang/Lang'

export default function Cv() {
    return (

        <div className="section cv">
            <div className="page-headline">
                <h1>{Lang().resumeTitle}</h1>
            </div>
            <div className="resume">
                <Profile />
                <div className="resume-aboutme">
                    <h5>{Lang().resumeAboutMe}</h5>
                    <p>{Lang().resumeText}</p>
                </div>
                <div className="resume-skills">
                    <div className="resume-speech">
                        <h5>{Lang().resumeLanguages}</h5>
                        <p>Русский - носитель</p>
                        <p>English - intermediate</p>
                    </div>
                    <div className="resume-programming">
                        <h5>{Lang().resumeProgrammingLanguages}</h5>
                        <p>JavaScript, Node.js, PHP, Python</p>
                    </div>
                    <div className="resume-design">
                        <h5>{Lang().resumeDesign}</h5>
                        <p>Figma, Photoshop, Illustrator</p>
                    </div>
                    <div className="resume-cms">
                        <h5>{Lang().resumeCms}</h5>
                        <p>Wordpress, Strapi, Modx, Opencart</p>
                    </div>
                    <div className="resume-frameworks">
                        <h5>{Lang().resumeFrameworks}</h5>
                        <p>React, NEXT.js, Laravel, Prisma.js, SASS, Tilewind.css, Bootstrap, БЭМ, NGinx, Apache, Ubuntu.</p>
                    </div>

                </div>

            </div>
        </div>


    )
}