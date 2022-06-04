function healthyfood() {

    return (
        <div className="bg-cap-grey">
            <div id="big-name" className="relative px-4">
                <div className="flex justify-between">
                    <p className="font-magilio-regular text-[6.5rem]">HEALTHY</p>
                    <a className="block text-3xl font-thunder-medium text-cap-blue pt-8 pl-4 underline" href="/">HOME</a>
                </div>
                <p className="font-magilio-regular -mt-[4.5rem] text-[6.5rem]">FOOD</p>
            </div>

            <div className="px-4 space-y-4">
                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        CREATIVE DIRECTION
                    </div>
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        UI/UX DESIGN
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        WEB DESIGN
                    </div>
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        APP DESIGN
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        PROTOTYPING
                    </div>
                    <div className="px-4 py-2 rounded-full border border-gray-400 text-gray-600">
                        BRAND DESIGN
                    </div>
                </div>
            </div>

            <p className="mr-8 p-4 py-6 text-4xl font-thunder-medium">I’m currently working as creative director, leading company’s main projects.</p>

            <span className="flex w-[94%] m-auto py-6 px-2 border-t-2 border-gray-500"></span>

            <p className="px-4 text-5xl font-thunder text-gray-500">MyCIA (App & Website)</p>

            <p id="copy-right" className="text-center py-2 border-t-2 border-black">Developed with care by <a className="underline">Michele Clerici</a></p>
        </div>
    )
}

export default healthyfood;
