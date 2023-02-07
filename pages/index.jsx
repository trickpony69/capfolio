import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Splash() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
        setIsMobile(mobile);

        setTimeout(() => {
            mobile && router.push("/home");
        }, 3000);
    }, []);

    return (
        (isMobile ?
            <div id="page" className="h-screen bg-cap-grey">
                <div className="h-[68%] flex justify-center items-center bg-cap-acid">
                    <img className="w-26 animate-[spin_4s_infinite]" src="/icons/menu.svg" />
                </div>
                <img src="/assets/mezzaluna.png" />

                <div className="px-4 leading-[5rem] text-[6.5rem] font-thunder bg-cap-grey ">
                    <p>ANDREA</p>
                    <p>CAPPELLARI</p>
                </div>
            </div> :
            <img className="mx-auto h-screen w-44 animate-[spin_4s_infinite]" src="/icons/menu.svg" />
        )
    );
}

export default Splash;
