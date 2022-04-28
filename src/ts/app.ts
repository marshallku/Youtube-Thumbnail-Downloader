import {
    getIdFromUri,
    getThumbnailsFromId,
    THUMBNAIL_SIZES,
} from "./utils/youtube";
import "../css/style.css";

(function () {
    const result = document.querySelector(".result") as HTMLElement;
    const thumbnailContainer = document.querySelector(
        ".result__thumbnail"
    ) as HTMLElement;

    const renderThumbnails = (id: string) => {
        const fragment = document.createDocumentFragment();
        const thumbnails = getThumbnailsFromId(id);

        thumbnails.forEach((thumbnail, i) => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const figcaption = document.createElement("figcaption");

            img.src = thumbnail;
            figcaption.innerText = `${THUMBNAIL_SIZES[i]}.jpg`;

            figure.append(img, figcaption);
            fragment.append(figure);
        });

        if (result.style.display !== "block") {
            result.style.display = "block";
        }

        thumbnailContainer.innerHTML = "";
        thumbnailContainer.append(fragment);
    };

    document.querySelector(".form")!.addEventListener("submit", (event) => {
        event.preventDefault();
        const uri = new FormData(event.target as HTMLFormElement).get("uri");

        if (!uri) {
            return;
        }

        renderThumbnails(getIdFromUri(uri.toString()));
    });
})();
