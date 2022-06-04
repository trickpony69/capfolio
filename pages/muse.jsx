function muse() {

    return (
        <div className="bg-cap-grey">
            <div id="big-name" className="relative px-4">
                <div className="flex justify-between">
                    <p className="font-magilio-regular text-[6.5rem]">MUSE</p>
                    <a className="block text-3xl font-thunder-medium text-cap-blue pt-8 pl-4 underline" href="/">HOME</a>
                </div>
            </div>

            <div className="px-4 space-y-4">
                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        UI/UX DESIGN
                    </div>
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        PROTOTYPING
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        PROTOTYPING
                    </div>
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        WEB DESIGN
                    </div>
                </div>


            </div>

            <p className="mr-8 p-4 py-6 text-4xl font-thunder-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <span className="flex w-[94%] m-auto py-6 px-2 border-t-2 border-gray-500"></span>

            <p id="copy-right" className="text-center py-2 border-t-2 border-black">Developed with care by <a className="underline">Michele Clerici</a></p>
        </div>
    )
}

export default muse;
