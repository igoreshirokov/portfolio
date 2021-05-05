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
                <li><a className="menu__item" htmlFor="menu__toggle" href="#contacts">Контакты</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#services">Услуги</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#portfolio">Работы</a></li>
                <li><a className="menu__item" htmlFor="menu__toggle" href="#resume">Резюме</a></li>
            </ul>
        </div>
    )
}

export default Menu