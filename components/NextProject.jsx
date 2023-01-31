import Link from "next/link";

function NextProject(props) {
    const { prev, next } = props;

    const onClickHandler = () => {
        // window.scroll({
        //     top: 0,
        //     behavior: "smooth"
        // });
        document.getElementById("page").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="p-6">
            <span className="block py-8 border-t-2 border-black"></span>

            <div className="font-thunder leading-[5rem]">
                <p className="text-[6rem] font-extrabold uppercase">next</p>
                <p className="text-[6rem] font-extrabold uppercase">project?</p>
            </div>


            <div className="flex justify-between py-10">
                <a className="block w-3/6 pt-4 rounded-full text-3xl font-thunder-medium bg-cap-acid text-center" href="mailto:">EMAIL ME</a>
                <button className="w-10 text-center" onClick={onClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M176 249.38 256 170l80 79.38m-80-68.35V342" /><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" /></svg>
                    <span className="font-bold font-thunder-medium">TOP</span>
                </button>
            </div>

            <div className="flex justify-between py-4 font-thunder-medium text-3xl">
                {prev ?
                    <Link href={prev}><span className="block text-[#28536B] underline">PREVIOUS PROJECT</span></Link>
                    : <p className="block text-[#28536B80] underline">PREVIOUS PROJECT</p>}

                {next ?
                    <Link href={next}><span className="block text-[#28536B] underline">NEXT PROJECT</span></Link>
                    : <p className="block text-[#28536B80] underline">NEXT PROJECT</p>}
            </div>
        </div>
    );
}

export default NextProject;
