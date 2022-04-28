import getIdFromUri from "./utils/getIdFromUri";
import "../css/style.css";

(function () {
    const download = document.querySelector(".ytdwnld");
    const preveal = document.querySelector(".ytpreveal-img");
    const anchor = document.createElement("a");
    const span = document.createElement("span");
    const thumbnails = ["original", "maxresdefault", "hqdefault", "mqdefault"];

    const renderThumbnail = (src: string, index: number) => {
        const resultWrapper = document.getElementById("result-wrapper");
        const img = document.createElement("img");
        const handleError = () => {
            if (index > 3) return;

            renderThumbnail(
                src.replace(thumbnails[index], thumbnails[index + 1]),
                index + 1
            );
        };
        const handleLoad = () => {
            if (img.naturalWidth === 120) handleError();
            img.removeEventListener("error", handleError);
        };

        anchor.href = src;
        anchor.download = "thumbnail.jpg";
        anchor.innerText = "Download";
        anchor.target = "_blank";

        img.addEventListener("load", handleLoad, { once: true });
        img.addEventListener("error", handleError, { once: true });

        img.src = src;

        if (resultWrapper!.style.display !== "block") {
            document.getElementById("result-wrapper")!.style.display = "block";

            span.classList.add("download");
            span.append(anchor);
            download!.append(span);
            preveal!.append(img);
        }
    };

    document
        .getElementById("input-wrapper")!
        .addEventListener("submit", (event) => {
            event.preventDefault();
            const uri = new FormData(event.target as HTMLFormElement).get(
                "uri"
            );

            if (!uri) {
                return;
            }

            renderThumbnail(
                `https://i.ytimg.com/vi/${getIdFromUri(uri.toString())}/${
                    thumbnails[0]
                }.jpg`,
                0
            );
        });
})();
