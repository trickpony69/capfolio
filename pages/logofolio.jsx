import Tag from "../components/Tag";
import Image from "next/image";
import NextProject from "../components/NextProject";
import Link from "next/link";
import Footer from "../components/Footer";

function Tags() {
    const logos = [{
        name: "clap",
        source: "clap.png",
        width: 124,
        height: 165,
    },
    {
        name: "cdc",
        source: "degusteremo.png",
        width: 330,
        height: 90,
    },
    {
        name: "recordz",
        source: "recordz.png",
        width: 125,
        height: 113,
    },
    {
        name: "agp",
        source: "agp.png",
        width: 290,
        height: 105,
    },
    {
        name: "fso",
        source: "fso.png",
        width: 290,
        height: 105,
    },
    {
        name: "metalica",
        source: "metalica.png",
        width: 160,
        height: 110,
    },
    {
        name: "riff",
        source: "riff.png",
        width: 176,
        height: 74,
    }]

    return (
        <div className="m-6 space-y-6">
            {logos.map((logo, i) =>
                <div className="max-w-96 h-96 flex items-center justify-center text-center border-2 border-[#AFAFAF] rounded-lg" key={i}>
                    <Image src={`/assets/logofolio/${logo.source}`} width={logo.width} height={logo.height} />
                </div>
            )}
        </div>
    );
}

function logofolio() {
    return (
        <div id="page" className="bg-cap-grey">
            <div className="pt-6 px-6">
                <Link href="/home"><Image className="animate-[spin_4s_infinite]" src="/icons/menu.svg" width="56" height="56" /></Link>
            </div>

            <div id="big-name" className="px-6">
                <p className="font-thunder text-[7rem] uppercase">logofolio</p>
            </div>

            <Tags />

            <NextProject prev="/voiello" />

            <Footer />
        </div>
    );
}

export default logofolio;
