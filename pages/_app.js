import useDeviceDetect from '../hooks/useDeviceDetect';
import Menu from '../components/Menu';
import { Fragment } from 'react';
import '../styles/globals.css'
import "../styles/mat.css";

function MyApp({ Component, pageProps }) {
  const { isMobile } = useDeviceDetect()

  return (
    <Fragment>
      <div className="block md:hidden">
        <Component {...pageProps} />
      </div>
      <div className="hidden md:flex bg-cap-grey">
        <div className="w-1/3 border-r border-cap-darkGrey">
          <Menu />
        </div>
        <div className="h-screen overflow-y-scroll max-w-lg mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </Fragment>
  );
}

export default MyApp
