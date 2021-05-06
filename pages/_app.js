import '../styles/globals.sass'
import '../styles/burgermenu.css'
import 'swiper/swiper.scss'
import '../styles/page-slider.sass'
import 'swiper/components/scrollbar/scrollbar.min.css'
import { CookiesProvider } from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  ) 
  
}

export default MyApp
