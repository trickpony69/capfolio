import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useDimensions } from "../components/use-dimensions";

export default function Home() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);
    const [divHeight, setDivHeight] = useState(0);
    const [divHeight1, setDivHeight1] = useState(0);


    useEffect(() => {
        let el = document.getElementById("big-name");
        // let el1 = document.getElementById("copy-right");

        setDivHeight(el.getBoundingClientRect().height)
        // setDivHeight1(el1.getBoundingClientRect().height)

        // open == 1 && document.documentElement.style.setProperty('--title', el.getBoundingClientRect().height + "px");
    }, [])

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
    }, [divHeight])

    return (
        <div className="relative bg-cap-grey">
            <div className="relative bg-cap-grey">

                <motion.div className="menu pt-1 px-4 bg-cap-acid" initial={false} variants={menuVariants} custom={divHeight} animate={open ? "opened" : "closed"} >
                    {open && <p className="mr-2 text-right text-3xl underline font-thunder-medium" onClick={() => setOpen(prev => !prev)}>HOME</p>}

                    {open && <p className="mt-4 text-3xl font-thunder-medium">I’m a graphic designer based in Vicenza, Italy.</p>}

                    {open && <a className="block mt-20 text-3xl text-gray-400 font-thunder-medium" href="mailto:andrea.cappellari15@gmail.com">andrea.cappellari15@gmail.com</a>}
                </motion.div>

                <div id="big-name" className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 11.93" className="w-full fill-cap-acid"><g id="Livello_1-2"><path className="cls-1" d="M0,.08C32.07,7.82,65.55,11.93,100,11.93S167.93,7.82,200,.08v-.08H0V.08Z" /></g></svg>

                    <div className="mt-4 px-4">
                        <p className={clsx("text-right text-3xl font-thunder-medium text-cap-blue pt-2 underline", { "hidden": open })} onClick={() => setOpen(prev => !prev)}>ABOUT ME</p>
                        <p className={clsx("font-thunder text-[6.5rem] leading-10", { "pt-8": open })}>ANDREA</p>
                        <p className="font-thunder text-[6.5rem]">CAPPELLARI</p>
                    </div>
                    <p id="copy-right" className={clsx("text-center py-2 border-t-2 border-black", { hidden: !open })}>Developed with care by <a className="underline">Michele Clerici</a></p>
                </div>

                <div className={clsx("p-4", { "hidden": open == 1 })}>
                    <a className="block w-3/6 pt-3 py-2 rounded-full text-3xl font-thunder-medium bg-cap-acid text-center" href="mailto:">EMAIL ME</a>
                </div>
            </div>

            <div className={clsx("pt-8 px-4", { "hidden": open == 1 })}>
                <p className="text-3xl text-cap-darkGrey border-b border-cap-darkGrey font-thunder-medium">PROJECTS</p>
                <ul className="">
                    <a className="block py-4 font-magilio-regular text-4xl border-b border-cap-darkGrey" href="/healthyfood.html">Healthyfood</a>
                    <a className="block py-4 font-magilio-regular text-4xl border-b border-cap-darkGrey" href="/muse">Muse</a>
                    <a className="block py-4 font-magilio-regular text-4xl border-b border-cap-darkGrey">Agp</a>
                    <a className="block py-4 font-magilio-regular text-4xl border-b border-cap-darkGrey">Emergency</a>
                    <a className="block py-4 font-magilio-regular text-4xl border-b border-cap-darkGrey" href="/cdc">cdc</a>
                    <a className="block py-4 font-magilio-regular text-4xl">Clap</a>
                </ul>
            </div>
        </div>
    )
}
