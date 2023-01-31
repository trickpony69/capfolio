import useDeviceDetect from '../hooks/useDeviceDetect';
import Menu from '../components/Menu';
import '../styles/globals.css'
import "../styles/mat.css";

function MyApp({ Component, pageProps }) {
  const { isMobile } = useDeviceDetect()

  return (
    (isMobile ?
      <Component {...pageProps} /> :
      <div className="flex bg-cap-grey">
        <div className="w-1/3 border-r border-cap-darkGrey">
          <Menu />
        </div>
        <div className="h-screen overflow-y-scroll max-w-lg mx-auto">
          <Component {...pageProps} />
        </div>
      </div>)
  );
}

export default MyApp
