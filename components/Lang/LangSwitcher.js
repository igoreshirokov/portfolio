import { useCookies } from "react-cookie"
import { useEffect, useRef } from "react"

export default function LangSwitcher() {
    const [current, setCurrent] = useCookies(["locale"])
    const buttonRu = useRef(null)        
    const buttonEn = useRef(null)        
    function langSwitch(event) {
        let lang = event.target.dataset.lang.toUpperCase()
        setCurrent('locale', lang, { path: '/' })
    }
    useEffect(() => {
        if (current.locale === "RU") {
            buttonRu.current.className = "active-lang"
            buttonEn.current.className = ""
        } else if (current.locale === "EN") {
            buttonEn.current.className = "active-lang"
            buttonRu.current.className = ""
        }
    }, [current])


    // if (current.locale === "RU") {
    //     buttonRu.current.className="active-lang"
    // } else if (current.locale === "EN") {
    //     buttonEn.current.className="active-lang"
    // } else {
    //     buttonRu.current.className="active-lang"
    // }


    return (
        <div className="lang-switcher">
            <button ref={buttonRu} data-lang="ru" onClick={langSwitch}>RU</button>
            <button ref={buttonEn} data-lang="en" onClick={langSwitch}>EN</button>
        </div>
    )
}