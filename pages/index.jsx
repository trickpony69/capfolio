import { useRouter } from "next/router";
import { useEffect } from "react";

function Splash() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/home");
        }, 3000);
    }, []);

    return (
        <div id="page" className="h-screen bg-cap-grey">
            <div className="h-[68%] flex justify-center items-center bg-cap-acid">
                <img className="w-26 animate-[spin_4s_infinite]" src="/icons/menu.svg" />
            </div>
            <img src="/assets/mezzaluna.png" />

            <div className="px-4 leading-[5rem] text-[6.5rem] font-thunder bg-cap-grey ">
                <p>ANDREA</p>
                <p>CAPPELLARI</p>
            </div>
        </div>
    );
}

export default Splash;
