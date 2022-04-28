import getIdFromUri from "./utils/getIdFromUri";
import "../css/style.css";

(function () {
    const result = document.querySelector(".result") as HTMLElement;
    const thumbnailContainer = document.querySelector(
        ".result__thumbnail"
    ) as HTMLElement;
    const thumbnails = ["original", "maxresdefault", "hqdefault", "mqdefault"];

    const renderThumbnail = (src: string, index: number) => {
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

        img.addEventListener("load", handleLoad, { once: true });
        img.addEventListener("error", handleError, { once: true });

        img.src = src;

        if (result.style.display !== "block") {
            result.style.display = "block";
        }

        thumbnailContainer.innerHTML = "";
        thumbnailContainer.append(img);
    };

    document.querySelector(".form")!.addEventListener("submit", (event) => {
        event.preventDefault();
        const uri = new FormData(event.target as HTMLFormElement).get("uri");

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
