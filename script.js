const dwnld = document.querySelector(".ytdwnld"),
  preveal = document.querySelector(".ytpreveal-img"),
  jpga = document.createElement("a"),
  span = document.createElement("span"),
  img = document.createElement("img");
let newSrc, tmp;

document.querySelector(".button").addEventListener("click", function() {
  const input = document.getElementById("ytinput").value,
    canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");
  (input !== "" && tmp !== 1) && (
    tmp = 1,
    newSrc = `https://i.ytimg.com/vi/${input.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?/g, "")}/original.jpg`,
    dwnld.innerHTML = "",
    preveal.innerHTML = "",
    document.getElementById("result-wrapper").style.display = "block",
    span.classList.add("download"),
    jpga.href = newSrc,
    jpga.download = "thumbnail.jpg",
    jpga.innerText = "Download",
    span.append(jpga),
    dwnld.append(span),
    img.src = newSrc,
    canvas.width = 1280,
    canvas.height = 720,
    img.addEventListener("load", function() {
      context.drawImage(img, 0, 0),
      tmp = 0
    }),
    preveal.append(canvas)
  )
})
