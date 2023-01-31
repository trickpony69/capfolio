import Tag from "../components/tag";
import Image from "next/image";
import NextProject from "../components/NextProject";
import Link from "next/link";
import Footer from "../components/Footer";
import VideoMockup from "../components/VideoMockup";

function nhood() {
    return (
        <div id="page" className="bg-cap-grey">
            <div className="pt-6 px-6">
                <Link href="/home"><Image className="animate-[spin_4s_infinite]" src="/icons/menu.svg" width="56" height="56" /></Link>
            </div>

            <div id="big-name" className="px-6">
                <p className="font-thunder text-[7rem] uppercase">nhood</p>
            </div>

            <div className="px-6 space-y-4">
                <div className="flex space-x-4">
                    <Tag title="CREATIVE DIRECTION" />
                    <Tag title="UI/UX DESIGN" />
                </div>

                <div className="flex space-x-4">
                    <Tag title="PROTOTYPING" />
                </div>
            </div>

            <p className="mr-8 p-6 text-4xl font-thunder-medium">Webapp designed for the food court of upcoming Milan’s Smart District - Merlata Bloom.</p>

            <Image src="/assets/nhood/1.png" width="500" height="650" objectFit="cover" />
            <Image src="/assets/nhood/6.png" width="500" height="1200" objectFit="cover" />
            <Image src="/assets/nhood/3.png" width="650" height="900" objectFit="cover" />

            <div className="m-6">
                <p className="font-thunder-medium text-3xl">Custom icon set.</p>

                <div className="py-4 grid grid-cols-3 gap-10">
                    <div className="flex items-center justify-center w-28 h-28  rounded-2xl bg-[#CEF432]">
                        <Image src="/assets/nhood/icon_1.png" width="64" height="64" />
                    </div>
                    <div className="flex items-center justify-center w-28 h-28 text-center rounded-2xl bg-[#CEF432]">
                        <Image src="/assets/nhood/icon_2.png" width="64" height="64" />
                    </div>
                    <div className="flex items-center justify-center w-28 h-28 text-center rounded-2xl bg-[#CEF432]">
                        <Image src="/assets/nhood/icon_3.png" width="64" height="64" />
                    </div>
                    <div className="flex items-center justify-center w-28 h-28 text-center rounded-2xl bg-[#CEF432]">
                        <Image src="/assets/nhood/icon_4.png" width="64" height="64" />
                    </div>
                    <div className="flex items-center justify-center w-28 h-28 text-center rounded-2xl bg-[#CEF432]">
                        <Image src="/assets/nhood/icon_5.png" width="64" height="64" />
                    </div>
                    <div className="flex items-center justify-center w-28 h-28 text-center rounded-2xl bg-[#CEF432]">
                        <Image src="/assets/nhood/icon_6.png" width="64" height="64" />
                    </div>
                </div>
            </div>

            <Image src="/assets/nhood/4.png" width="500" height="800" objectFit="cover" />
            <Image src="/assets/nhood/5.png" width="500" height="800" objectFit="cover" />

            <div className="mx-auto w-[75%]">
                <VideoMockup source="/assets/nhood/mockup.mp4" />
            </div>

            <NextProject prev="/redbull" next="/voiello" />

            <Footer />
        </div>
    );
}

export default nhood;
