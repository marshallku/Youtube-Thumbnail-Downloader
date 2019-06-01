const dwnld = document.querySelector(".ytdwnld"),
  preveal = document.querySelector(".ytpreveal-img"),
  a = document.createElement("a"),
  span = document.createElement("span"),
  img = document.createElement("img");
let newSrc;
document.querySelector(".button").addEventListener("click", function() {
  const input = document.getElementById("ytinput").value;
  input !== "" && (
    newSrc = `https://i.ytimg.com/vi/${input.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?/g, "")}/original.jpg`,
    dwnld.innerHTML = "",
    preveal.innerHTML = "",
    document.getElementById("result-wrapper").style.display = "block",
    span.classList.add("download"),
    a.href = newSrc,
    a.target = "_blank",
    a.download = "thumbnail.jpg",
    a.innerText = "download",
    span.append(a),
    dwnld.append(span),
    img.src = newSrc,
    preveal.append(img)
  )
})
