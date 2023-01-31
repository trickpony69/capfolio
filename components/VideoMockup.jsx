import { useEffect } from "react";

function VideoMockup(props) {
    const { source } = props;

    useEffect(() => {
        window.addEventListener("load", videoScroll);
        window.addEventListener("scroll", videoScroll);

        async function videoScroll() {
            if (document.querySelectorAll("video[autoplay]").length > 0) {
                var windowHeight = window.innerHeight,
                    videoEl = document.querySelectorAll("video[autoplay]");

                for (var i = 0; i < videoEl.length; i++) {
                    console.log({ i })
                    var thisVideoEl = videoEl[i],
                        videoHeight = thisVideoEl.clientHeight,
                        videoClientRect = thisVideoEl.getBoundingClientRect().top;

                    if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                        thisVideoEl.play()
                    } else {
                        thisVideoEl.pause();
                    }
                }
            }
        }
    }, []);

    return (
        <div className="py-10">
            <video className="" loop autoPlay muted="muted" playsInline>
                <source src={source} type="video/mp4" />
                Il tuo broswer non supporta i video
            </video>
        </div>
    );
}

export default VideoMockup;
