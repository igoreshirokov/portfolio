import { useCookies } from "react-cookie"
import Ru from './Ru'
import En from './En'
const Lang = () => { 
    const [current, setCurrent] = useCookies(["locale"])

    if (current.locale === "RU") {
        return {...Ru}
    }
    if (current.locale === "EN") {
        return {...En}
    }

    return {...Ru}
}

export default Lang