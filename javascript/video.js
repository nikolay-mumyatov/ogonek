function findVideos() {
  let videos = document.querySelectorAll(".video");

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector(".video__link");
  let button = video.querySelector(".video__button");

  console.log(link);

  video.addEventListener("click", () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  video.classList.add("video--enabled");
}

function createIframe() {
  let srcVideo = document.querySelector(".video__link").getAttribute("href");
  let iframeVideo = document.createElement("iframe");

  iframeVideo.setAttribute("src", srcVideo);
  iframeVideo.setAttribute(
    "style",
    "position:absolute;top:0;left:0;width:100%;height:100%;"
  );
  iframeVideo.setAttribute("frameborder", "0");
  iframeVideo.setAttribute("allow", "autoplay");
  iframeVideo.setAttribute("allowfullscreen", "");
  iframeVideo.classList.add("video__media");

  return iframeVideo;
}

findVideos();
