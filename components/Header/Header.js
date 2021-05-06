import LangSwitcher from '../Lang/LangSwitcher'
import Menu from './Menu'
const Header = () => {
    return (
        <div className="top-panel">
            <div className="logo">
                T
            </div>
            <LangSwitcher />
            <Menu />

        </div>
    )
}
export default Header