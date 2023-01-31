import Tag from "../components/Tag";
import Image from "next/image";
import NextProject from "../components/NextProject";
import Link from "next/link";
import Footer from "../components/Footer";
import { useEffect } from "react";
import VideoMockup from "../components/VideoMockup";

function voiello() {
    return (
        <div id="page" className="bg-cap-grey">
            <div className="pt-6 px-4">
                <Link href="/home"><Image className="animate-[spin_4s_infinite]" src="/icons/menu.svg" width="56" height="56" /></Link>
            </div>

            <div id="big-name" className="px-4">
                <p className="font-thunder text-[7rem] uppercase">voiello</p>
            </div>

            <div className="px-4 space-y-4">
                <div className="flex space-x-4">
                    <Tag title="APP DESIGN" />
                    <Tag title="UI/UX DESIGN" />
                </div>
            </div>

            <p className="mr-8 p-4 py-6 text-4xl font-thunder-medium">Webapp designed for Voiello, main sponsor of Procida, italian capital of culture in 2022, to promote the local tourism and the culinary tradition through Voiello products.</p>

            <Image src="/assets/voiello/1.png" width="500" height="650" objectFit="cover" />

            <p className="p-4 text-4xl font-thunder-medium">Illustration: Marimo©</p>

            <Image src="/assets/voiello/2.png" width="900" height="600" objectFit="cover" />
            <Image src="/assets/voiello/3.png" width="800" height="900" objectFit="cover" />

            <div className="mx-auto w-[75%]">
                <VideoMockup source="/assets/voiello/mockup.mp4" />
            </div>

            <NextProject prev="/redbull" />

            <Footer />
        </div>
    );
}

export default voiello;
