import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDimensions } from "../components/use-dimensions";
import { useRouter } from "next/router";

function Menu() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const [url, setUrl] = useState("");
    const router = useRouter();

    useEffect(() => {
        let el = document.getElementById("big-name");
        setDivHeight(el.getBoundingClientRect().height);
    }, []);

    useEffect(() => {
        setUrl(router.asPath);
    }, [router.asPath]);

    const menuVariants = {
        opened: (divHeight) => ({
            height: `calc(100vh - ${divHeight}px)`,
            display: "block",
            transition: {
                type: "spring",
                delay: 0
            }
        }),
        closed: {
            height: 0,
            transition: {
                type: "spring",
                delay: 0
            }
        }
    }

    useEffect(() => {
        console.log(`calc(100vh-${divHeight}px)`)
    }, [divHeight]);

    return (
        <div className="relative bg-cap-grey">
            <div className="relative bg-cap-grey">

                <motion.div className="menu pt-1 px-4 bg-cap-acid" initial={false} variants={menuVariants} custom={divHeight} animate={open ? "opened" : "closed"} >
                    {open && <p className="mr-2 text-right text-3xl underline font-thunder-medium" onClick={() => setOpen(prev => !prev)}>HOME</p>}

                    {open &&
                        <div>
                            <p className="mt-4 text-3xl font-thunder-medium">
                                I am a graphic designer and creative director.
                            </p>

                            <p className="mt-4 text-3xl font-thunder-medium">
                                I work on projects from the starting idea to the final product, working with developers team through the process. I cooperate with the marketing team to study the most suitable communication and promotion for the products created.
                            </p>

                            <a className="block mt-4 text-2xl text-gray-400 font-thunder-medium underline" href="assets/andrea_cappellari_cv.pdf" target="_blank">Download CV</a>
                        </div>}
                </motion.div>

                <div id="big-name" className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 11.93" className="w-full fill-cap-acid"><g id="Livello_1-2"><path className="cls-1" d="M0,.08C32.07,7.82,65.55,11.93,100,11.93S167.93,7.82,200,.08v-.08H0V.08Z" /></g></svg>

                    <p className={clsx("float-right mt-2 mr-4 text-3xl font-thunder-medium text-cap-blue underline", { "hidden": open })} onClick={() => setOpen(prev => !prev)}>ABOUT ME</p>

                    <div className="mt-4 px-4">
                        <div className="leading-[5rem] text-[6.5rem]">
                            <p className={clsx("font-thunder ", { "pt-8": open })}>ANDREA</p>
                            <p className="font-thunder">CAPPELLARI</p>
                        </div>

                    </div>
                    {open &&
                        <p id="copy-right" className="text-center font-thunder-medium text-xl">Developed with care by <a className="underline">Michele Clerici</a></p>
                    }
                </div>

                {!open && <p className="p-4 text-[#00000080] text-3xl font-thunder-medium">UI/UX DESIGN · CREATIVE DIRECTION</p>}

                <div className={clsx("p-4", { "hidden": open == 1 })}>
                    <a className="block w-3/6 pt-3 py-2 rounded-full text-3xl font-thunder-medium bg-cap-acid text-center" href="mailto:andrea.cappellari15@gmail.com">EMAIL ME</a>
                </div>
            </div>

            <div className={clsx("pt-8 px-4", { "hidden": open == 1 })}>
                <p className="text-3xl text-cap-darkGrey border-b border-cap-darkGrey font-thunder-medium">PROJECTS</p>
                <ul>
                    <Link href="healthyfood"><a className={clsx({ "bg-cap-acid": url.match("healthyfood") }, "block py-4 font-thunder-medium text-4xl border-b border-cap-darkGrey")}>Healthyfood</a></Link>
                    <Link href="redbull"><a className={clsx({ "bg-cap-acid": url.match("redbull") }, "block py-4 font-thunder-medium text-4xl border-b border-cap-darkGrey")}>Redbull</a></Link>
                    <Link href="nhood"><a className={clsx({ "bg-cap-acid": url.match("nhood") }, "block py-4 font-thunder-medium text-4xl border-b border-cap-darkGrey")}>NHOOD</a></Link>
                    <Link href="voiello"><a className={clsx({ "bg-cap-acid": url.match("voiello") }, "block py-4 font-thunder-medium text-4xl border-b border-cap-darkGrey")}>Voiello</a></Link>
                    <Link href="logofolio"><a className={clsx({ "bg-cap-acid": url.match("logofolio") }, "block py-4 font-thunder-medium text-4xl")} href="/logofolio">Logofolio</a></Link>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
