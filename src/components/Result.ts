import crtElt from "crtelt";
import { useId } from "../store";
import { getThumbnailsFromId, THUMBNAIL_SIZES } from "../utils/youtube";

function Thumbnails() {
    const Thumbnails = crtElt("div", { className: "result__thumbnail" });

    useId.addEventListener("update", () => {
        const thumbnails = getThumbnailsFromId(useId.id);

        Thumbnails.innerHTML = "";
        Thumbnails.append(
            crtElt(
                "fragment",
                {},
                ...thumbnails.map((thumbnail, i) =>
                    crtElt(
                        "figure",
                        {},
                        crtElt("img", { src: thumbnail }),
                        crtElt("figcaption", {}, `${THUMBNAIL_SIZES[i]}.jpg`)
                    )
                )
            )
        );
    });

    return Thumbnails;
}

export default function Result() {
    const Container = crtElt(
        "div",
        { className: "result", style: { display: "none" } },
        crtElt("div", { className: "result__title" }, "Thumbnails"),
        Thumbnails()
    );

    useId.addEventListener(
        "update",
        () => {
            Container.removeAttribute("style");
        },
        { once: true }
    );

    return Container;
}
