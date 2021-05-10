function findVideos() {
  // получаем все блоки с видео
  let videos = document.querySelectorAll(".video");

  // проходим цыклом и вешаем событие setupVideo
  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let videoLink = video.querySelector(".video__link"); // получаем ссылку блока
  let button = video.querySelector(".video__button"); // получаем кнопку блока

  video.addEventListener("click", () => {
    event.preventDefault(); // отмена работы ссылки по умолчанию.
    let iframe = createIframe(videoLink); // по клику формируется iframe и передается ссылка в createIframe

    videoLink.remove(); // удаляем ссыку из блока
    button.remove(); // удаляем кнопку из блока
    video.appendChild(iframe); // добавляем сам iframe в блок
  });

  video.classList.add("video--enabled"); // добавляется класс к блоку, если скрипт загружен. Если нет, то останется ссылка на видео.
}

function createIframe(videoLink) {
  // получаем значение атрибута href ссылки блока
  let srcVideo = videoLink.getAttribute("href");

  // формируем iframe
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
