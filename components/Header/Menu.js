import Lang from '../Lang/Lang'



const Menu = () => {
    function menuHundler(e) {
        document.querySelector("#menu__toggle").checked = false
        
    }
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <div onClick={(e) => menuHundler(e)} className="shadow-bg"></div>
            <ul onClick={(e) => menuHundler(e)} className="menu__box">
                <li><a className="menu__item" htmlFor="menu__toggle" href="#contacts">{Lang().menuContacts}</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#services">{Lang().menuServices}</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#portfolio">{Lang().menuWorks}</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#resume">{Lang().menuResume}</a></li>
            </ul>
        </div>
    )
}

export default Menu