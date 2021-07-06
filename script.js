!(function () {
    const download = document.querySelector(".ytdwnld");
    const preveal = document.querySelector(".ytpreveal-img");
    const anchor = document.createElement("a");
    const span = document.createElement("span");
    const img = document.createElement("img");

    const getThumbnail = (src) => {
        return `https://i.ytimg.com/vi/${src.replace(
            /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/g,
            "$1"
        )}/original.jpg`;
    };

    const renderThumbnail = (src) => {
        const resultWrapper = document.getElementById("result-wrapper");
        const handleError = () => {
            renderThumbnail(src.replace("original.jpg", "maxresdefault.jpg"));
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

        if (resultWrapper.style.display !== "block") {
            document.getElementById("result-wrapper").style.display = "block";

            span.classList.add("download");
            span.append(anchor);
            download.append(span);
            img.style.marginBottom = "10px";
            preveal.append(img);
        }
    };

    document.querySelector(".button").addEventListener("click", () => {
        const { value } = document.getElementById("ytinput");

        if (value === "") return;

        renderThumbnail(getThumbnail(value));
    });
})();
