import Tag from "../components/Tag";
import Image from "next/image";
import NextProject from "../components/NextProject";
import Link from "next/link";
import Footer from "../components/Footer";
import VideoMockup from "../components/VideoMockup";

function Redbull() {
    return (
        <div id="page" className="bg-cap-grey">
            <div className="pt-6 px-4">
                <Link href="/home"><Image className="animate-[spin_4s_infinite]" src="/icons/menu.svg" width="56" height="56" /></Link>
            </div>

            <div id="big-name" className="px-4">
                <p className="font-thunder text-[7rem] uppercase">redbull</p>
            </div>

            <div className="px-4 space-y-4">
                <div className="flex space-x-4">
                    <Tag title="CREATIVE DIRECTION" />
                    <Tag title="UI/UX DESIGN" />
                </div>

                <div className="flex space-x-4">
                    <Tag title="PROTOTYPING" />
                </div>
            </div>

            <p className="mr-8 p-4 py-6 text-4xl font-thunder-medium">Webapp designed for an italian event by Redbull for the launch of their Organics brand.</p>

            <Image src="/assets/redbull_1.png" width="615" height="410" />
            <Image src="/assets/redbull_2.png" width="900" height="3200" />

            <div className="mx-auto w-[75%]">
                <VideoMockup source="/assets/redbull/mockup.mp4" />
            </div>

            <NextProject prev="/nhood" next="/voiello" />

            <Footer />
        </div>
    );
}

export default Redbull;
