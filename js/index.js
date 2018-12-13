const fallbackColor = "#1382ba";
const fallbackImage = "./assets/channel-logo.png";

window.onload = () => {
  const player = new Clappr.Player({
    source: "http://192.168.37.2:1935/bein1/1_adaptive.m3u8",
    mute: false,
    autoPlay: true,
    parentId: "#video",
    width: "100%",
    height: "100%",
    autoPlay: true,
    plugins: [LevelSelector],
    levelSelectorConfig: {
      title: "Quality",
      labels: {
        2: "Very High ", // 500kbps
        1: "High ", // 240kbps
        0: "Med " // 120kbps
      },
      labelCallback: function(playbackLevel, customLabel) {
        return customLabel + playbackLevel.level.height + "p"; // High 720p
      }
    }
  });
  const changeStream = channel => {
    player.configure({
      source: `http://192.168.37.2:1935/${channel.app}/${
        channel.streamname
      }_adaptive.m3u8`
    });
  };
  fetch("http://91.106.32.84/api.php")
    .then(r => r.json())
    .then(channels => {
      let items = channels.map(
        item => `
              <div class="channel">
                  <div class="before" style="background-color: ${item.color ||
                    fallbackColor};">
                  <p>Watch ${item.title}</p>
                  </div>
                  <img alt="" src="${
                    item.image
                      ? "http://91.106.32.84/" + item.image
                      : fallbackImage
                  }" />
                  <p>${item.title}</p>
              </div>
          `
      );
      const channelsList = document.getElementById("channels-list");
      items.forEach(item => (channelsList.innerHTML += item));
      for (i in channelsList.children) {
        const channel = channelsList.children[i];
        const before = channel.getElementsByClassName("before")[0];
        const item = channels[i];
        channel.addEventListener("click", () => changeStream(item));
        before.addEventListener("click", () => changeStream(item));
      }
    });
};
