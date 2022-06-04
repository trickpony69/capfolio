function cdc() {

    return (
        <div className="bg-cap-grey">
            <div id="big-name" className="relative px-4">
                <div className="flex justify-between">
                    <p className="font-magilio-regular text-[6.5rem]">CDC</p>
                    <a className="block text-3xl font-thunder-medium text-cap-blue pt-8 pl-4 underline" href="/">HOME</a>
                </div>
            </div>

            <div className="px-4 space-y-4">
                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        LOGO DESIGN
                    </div>
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        POSTER DESIGN
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        MOTION DESIGN
                    </div>
                </div>
            </div>

            <img className="p-4 py-6" src="/assets/cdc.png" />

            <div className="mx-4 my-6">
                <iframe className="rounded-xl" src="https://open.spotify.com/embed/artist/0K2TNJbZkgw9Vh29HQicJu?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>

            <p className="mr-8 p-4 py-6 text-4xl font-thunder-medium">Watch visual album</p>

            <span className="flex w-[94%] m-auto py-6 px-2 border-t-2 border-gray-500"></span>

            <p id="copy-right" className="text-center py-2 border-t-2 border-black">Developed with care by <a className="underline">Michele Clerici</a></p>
        </div>
    )
}

export default cdc;
