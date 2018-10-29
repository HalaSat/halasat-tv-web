
// Data
let channels = [{
    title: 'beIN Sports 1HD',
    url: './assets/bein.png',
    accent: 'purple',
}, {
    title: 'beIN Sports 2HD',
    url: './assets/bein.png',
    accent: 'purple',
}, {
    title: 'beIN Sports 3HD',
    url: './assets/bein.png',
    accent: 'purple',
}, {
    title: 'beIN Sports 4HD',
    url: './assets/bein.png',
    accent: 'purple',
}, {
    title: 'beIN Sports 5HD',
    url: './assets/bein.png',
    accent: 'purple',
}, {
    title: 'beoutQ 1HD',
    url: './assets/beoutq.png',
    accent: 'green',
}, {
    title: 'beoutQ 2HD',
    url: './assets/beoutq.png',
    accent: 'green',
}, {
    title: 'OSN Ya Hala Al Oula',
    url: './assets/osn-yahala.png',
    accent: 'purple',
}, {
    title: 'OSN Ya Hala HD',
    url: './assets/osn-yahala.png',
    accent: 'purple',
}, {
    title: 'On Sport',
    url: './assets/onsport.jpg',
    accent: 'blue',
}, {
    title: 'Planet Earth HD',
    url: './assets/planet-earth.jpeg',
    accent: 'black',
}, {
    title: 'Iraqia News',
    url: './assets/imn.jpg',
    accent: 'blue',
}, {
    title: 'Discovery HD',
    url: './assets/discovery.png',
    accent: 'black',
}, {
    title: 'OSN Movies HD',
    url: './assets/osn-movies.jpg',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeo-wild.png',
    accent: 'yellow',
}, {
    title: 'Animal Planet HD',
    url: './assets/animal-planet.png',
    accent: 'yellow',
}, {
    title: 'Travel Channel',
    url: './assets/travel-channel.png',
    accent: 'yellow',
}, {
    title: 'Discovery Science HD',
    url: './assets/discovery-science.png',
    accent: 'yellow',
}, {
    title: 'H2 HD',
    url: './assets/h2.png',
    accent: 'yellow',
}, {
    title: 'FIX & FOXI',
    url: './assets/fixandfoxi.png',
    accent: 'yellow',
}, {
    title: 'ITV Choice',
    url: './assets/itv.png',
    accent: 'black',
}, {
    title: 'Stereo Music',
    url: './assets/stereomusic.png',
    accent: 'green',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
}, {
    title: 'NAT GEO Wild HD',
    url: './assets/natgeowild.png',
    accent: 'yellow',
},];

window.onload = () => {
    let items = channels.map(item => `
        <div class="channel ${item.accent}">
            <img alt="" src="${item.url}"/>
            <p>${item.title}</p>
        </div>
    `);
    let channelsList = document.getElementById('channels-list');
    items.forEach(item => channelsList.innerHTML += item);
};
