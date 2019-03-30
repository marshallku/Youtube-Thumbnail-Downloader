$(".button").click(function() {
  $(".ytdwnld, .ytpreveal-img").empty(),
    $("#result-wrapper").show(),
    $(".ytdwnld").append("<span class='download'><a href='https://i.ytimg.com/vi/" + $("#ytinput").val().replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?/g, "") + "/original.jpg' target='_blank'>Download</a></span>"),
    $(".ytpreveal-img").append("<img src='https://i.ytimg.com/vi/" + $("#ytinput").val().replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?/g, "") + "/original.jpg'>")
})
