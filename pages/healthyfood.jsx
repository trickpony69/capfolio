import Image from "next/image";
import Link from "next/link";
import NextProject from "../components/NextProject";
import Tag from "../components/Tag";
import VideoMockup from "../components/VideoMockup";

function healthyfood() {
    return (
        <div id="page" className="bg-cap-grey">
            <div className="pt-6 px-6">
                <Link href="/home"><Image className="animate-[spin_4s_infinite]" src="/icons/menu.svg" width="56" height="56" /></Link>
            </div>

            <div id="big-name" className="p-6 leading-[5.5rem]">
                <p className="font-thunder text-[7rem] uppercase">healthy</p>
                <p className="font-thunder text-[7rem] uppercase">food</p>
            </div>

            <div className="px-6 space-y-4">
                <div className="flex space-x-4">
                    <Tag title="CREATIVE DIRECTION" />
                    <Tag title="UI/UX DESIGN" />
                </div>

                <div className="flex space-x-4">
                    <Tag title="WEB DESIGN" />
                    <Tag title="APP DESIGN" />
                </div>

                <div className="flex space-x-4">
                    <Tag title="PROTOTYPING" />
                    <Tag title="BRAND DESIGN" />
                </div>
            </div>

            <p className="mr-8 p-6 text-4xl font-thunder-medium">I've lead the growth of HF design system, an italian startup founded in 2018 where I’m currently working as creative director, leading company’s main projects.</p>

            <Image src="/assets/healthyfood/1.png" width="461" height="399" objectFit="cover" />

            <p className="p-6 text-5xl font-thunder-medium">MyCIA - App</p>
            <Image src="/assets/healthyfood/2.png" width="461" height="638" objectFit="cover" />
            <Image src="/assets/healthyfood/3.png" width="461" height="930" objectFit="cover" />
            <div className="text-center">
                <p className="uppercase text-3xl font-thunder-medium text-[#86827E]">app download</p>
                <p className="uppercase text-8xl font-thunder text-[#28536B]">200k</p>
                <span className="block m-6 py-8 border-t-2 border-black"></span>
            </div>

            <p className="p-6 text-5xl font-thunder-medium">MyCIA - Website</p>

            <VideoMockup source="assets/healthyfood//mockup.mp4" />

            <div className="text-center">
                <p className="uppercase text-3xl font-thunder-medium text-[#86827E]">monthly users</p>
                <p className="uppercase text-8xl font-thunder text-[#28536B]">110k</p>
            </div>

            <NextProject next="/redbull" />

            <p id="copy-right" className="text-center py-2 border-t-2 border-black">Developed with care by <a className="underline">Michele Clerici</a></p>
        </div>
    );
}

export default healthyfood;
