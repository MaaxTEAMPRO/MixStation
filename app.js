// app.js

async function fetchStations() {
    const stations = [
        { name: 'Antenne Bayern - Oldies but Goldies', url: 'http://stream.antenne.de/oldies-but-goldies/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/15521/aby_streamlogo_webradio_hd_large_oldie_antenne-v1.jpg/0e9ddff78317a4c549fd53a3690c0fe3.webp' },
        { name: 'Hunter FM - 80s Retro', url: 'https://live.hunter.fm/80s_high', icon: 'https://cdn.hunter.fm/image/thumb/station/80s-third/400x400ht.jpg' },
        { name: 'Hunter FM Pop', url: 'https://live.hunter.fm/pop_high', icon: 'https://cdn.hunter.fm/image/thumb/station/pop-third/400x400ht.jpg' },
        { name: 'Hunter - Moda Sertaneja', url: 'https://live.hunter.fm/modasertaneja_high', icon: 'https://cdn.hunter.fm/image/thumb/station/modasertaneja-third/400x400ht.jpg' },
        { name: 'Hunter FM - Sertanejo', url: 'https://live.hunter.fm/sertanejo_high', icon: 'https://cdn.hunter.fm/image/thumb/station/sertanejo-third/400x400ht.jpg' },
        { name: 'Antenne Bayern - 80er Kulthits', url: 'http://stream.antenne.de/80er-kulthits/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/7/streamlogo_80er_aby-v1.jpg/f8dc8c8fa5c1686cebb0714f1f3993d1.webp' },
        { name: 'Antenne Bayern - 70er Rock', url: 'https://s8-webradio.antenne.de/antenne-bayern-70er-rock/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/13897/streamlogo_70er_rock_aby_neu_2000x2000-v1.jpg/c3cea2d625af4aa2d72ceea7f5fb78e8.webp' },
        { name: 'Antenne Bayern - 70er Hits', url: 'http://stream.antenne.de/70er-hits/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/7306/streamlogo_70er_aby-v1.jpg/16418bb5de8f35b53118916fbde10963.webp' },
        { name: 'Oldie Antenne - 80er New Wave', url: 'https://s2-webradio.oldie-antenne.de/oldie-antenne-80er-new-wave/stream/aacp', icon: 'https://www.oldie-antenne.de/media/cache/3/version/37871/oldie_80er_new_wave_2000x2000-v1.png/48169e95224200f782d028138d02395a.webp' },
        { name: 'Oldie Antenne - 80er hits', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-80er-hits/stream/aacp', icon: 'https://www.oldie-antenne.de/media/cache/3/version/37897/oldie_80er_hits_2000x2000-v1.png/1d4b792598e17f2a6b57a9c75a84b518.webp' },
        { name: 'Oldie Antenne - Rock Classics', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-rock-classics/stream/aacp', icon: 'https://www.oldie-antenne.de/media/cache/3/version/38373/oldie_rock_classics_2000x2000-1-v1.jpg/712b25de61f422616daec7e071600950.webp' },
        { name: 'Oldie Antenne - NDW', url: 'https://s3-webradio.oldie-antenne.de/oldie-antenne-ndw/stream/mp3', icon: 'https://www.oldie-antenne.de/media/cache/3/version/37891/oldie_ndw_2000x2000-v1.png/142209e0174fd65ece3267b476b2c060.webp' },
        { name: 'Antenne Bayern - Coffee Music', url: 'http://stream.antenne.de/coffee/stream/aacp', icon: 'https://www.antenne.de/media/cache/3/version/7265/streamlogo_coffee_music_aby-v1.jpg/47e36e3e99540ea5a40f4f6f3bb9e12b.webp' },
        { name: 'Antenne Bayern', url: 'http://stream.antenne.de:80/antenne', icon: 'https://www.antenne.de/media/cache/3/version/18696/streamlogo_simulcast_live_aby_neu_2000x2000-v1.jpg/5e26f53136d9fcbd4f9101a8e1c652ba.webp' },
        { name: 'Gauchesca Sul', url: 'http://stream.zeno.fm/vmd4znn8hg8uv', icon: 'https://img.radios.com.br/radio/lg/radio212211_1708734422.jpg' },
        { name: 'Galaxy Rosenheim', url: 'http://s17.myradiostream.com:13366/;stream.mp3', icon: 'https://static.mytuner.mobi/media/tvos_radios/cen64zK5NK.jpg' },
        { name: 'Truckers FM', url: 'http://radio.truckers.fm/', icon: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3debb4fa-7b99-45b1-9f53-3bb261212a10-profile_image-300x300.png' },
        { name: 'Simulator Radio', url: 'https://simulatorradio.stream/stream.mp3', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0DhgUuCRMGBVt7_YccKtB4DHFzAnK0p5_5V6Kj_WZS4uq46-IArm_w94GDkClQnpEW4&usqp=CAU' },
        { name: 'Jovem Pan Classic', url: 'https://ice.fabricahost.com.br/classicpan', icon: 'https://s.jpimg.com.br/wp-content/themes/jovempan/assets/src/images/classic-pan/capa-classicpan-1024x1024.png' },
        { name: 'Jovem Pan', url: 'https://ice.fabricahost.com.br/jovempansp1009', icon: 'https://s.jpimg.com.br/wp-content/themes/jovempan/assets/build/images/logos-player/jpfm.jpg?v2' },
        { name: 'Radio Clube de Canoinhas', url: 'https://cast.youngtech.radio.br/radio/8370/radio', icon: 'https://img.radios.com.br/radio/lg/radio11834_1525086515.jpg' },
        
        { name: 'Band FM Floripa', url: 'https://cast2.youngtech.radio.br/radio/8010/radio', icon: 'https://pubimg.band.uol.com.br/Files/bandfm-live.png' },
  
        { name: 'Italia anni 60', url: 'https://str01.fluidstream.net/anni60.mp3', icon: 'https://www.radioitaliaannisessanta.it/images/ria60/za_network/inserzioni/radioitaliaanni60.jpg' },
        { name: '100.9 Classic Country', url: 'https://live.amperwave.net/direct/wboc-waaifmmp3-ibc2?_=84', icon: 'https://mm.aiircdn.com/609/5cd2c3c93418e.png' },
        { name: 'RFM - 80s', url: 'https://stream.rfm.fr/rfm-wr7.aac', icon: 'https://resize2-rfm.lanmedia.fr/r/100,100,forcex/crop/100,100,center-middle,forcex,ffffff/img/var/rfm/storage/images/programmes/les-webradios/rfm-80-s/3281-3-fre-FR/RFM-80-s.png' },
        { name: 'RFM - Slow', url: 'https://rfm.lmn.fm/rfm-wr13.aac', icon: 'https://resize-rfm.lanmedia.fr/r/67,,forcex/crop/67,67,center-middle,forcex,ffffff/img/var/rfm/storage/images/programmes/les-webradios/rfm-slow/54053-1-fre-FR/RFM-Slow.png' },
        { name: 'RFM Lounge', url: 'http://stream.rfm.fr/rfm-wr6.mp3', icon: 'https://resize1-rfm.lanmedia.fr/r/67,,forcex/crop/67,67,center-middle,forcex,ffffff/img/var/rfm/storage/images/programmes/les-webradios/rfm-lounge/19264-14-fre-FR/RFM-Lounge.png' },
        { name: '181 FM - Awesome 80s', url: 'http://listen.livestreamingservice.com/181-awesome80s_128k.mp3', icon: 'https://m.media-amazon.com/images/I/518USI0buaL.png' },

        { name: 'AS FM', url: 'https://mastermedia.shoutca.st/proxy/radioasfm?mp=/stream', icon: 'https://www.radio-uzivo.com/images/radio-stanica/as-fm_200_1.jpg' },

        { name: 'Antenne Bayern TOP 40', url: 'http://mp3channels.webradio.antenne.de/top-40', icon: 'https://www.antenne.de/media/cache/3/version/7264/streamlogo_top_40_aby-v1.jpg/bfef8f7751448ff6550b339ef8bb420c.webp' },
        { name: 'Antenne Bayern 2000 Hits', url: 'https://s2-webradio.antenne.de/2000er-hits', icon: 'https://www.antenne.de/media/cache/3/version/7320/streamlogo_2000er_aby-v1.jpg/eb8c905312265f37f465cb9d341a68f3.webp' },
    
        { name: 'Antenne Bayern - Happy Hits', url: 'https://s6-webradio.antenne.de/happy-hits/stream/mp3', icon: 'https://www.antenne.de/media/cache/3/version/7290/streamlogo_happy_hits_aby-v1.jpg/61e889f16860424c0b621f6a01163367.webp' },
        { name: 'Antenne Bayern - Party Hits', url: 'https://s7-webradio.antenne.de/sommer-hits/stream/mp3', icon: 'https://www.antenne.de/media/cache/3/version/7352/streamlogo_party_hits_aby-v1.jpg/8c39bbc032baf2b3ff5bb2c74a946b81.webp' },
        { name: 'Antenne Bayern - Summer Hits', url: 'https://s7-webradio.antenne.de/sommer-hits/stream/mp3', icon: 'https://www.antenne.de/media/cache/3/version/7392/streamlogo_sommer_hits_aby-v1.jpg/fe42c77ce70903b129f9ddf635c50625.webp' },
        { name: 'Antenne Bayern HitMix', url: 'http://mp3channels.webradio.antenne.de/hitmix', icon: 'https://www.antenne.de/media/cache/3/version/6/streamlogo_in_the_mix_aby-v1.jpg/f5c30ea9c1bf5214dbc0695f9bca4cac.webp' }
    ];
    return stations;
}

function loadStations(stations) {
    const stationsList = document.getElementById('stations');
    stationsList.innerHTML = '';
    stations.forEach(station => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="station-info"><img src="${station.icon}" alt="${station.name}"><span>${station.name}</span></div>`;
        li.dataset.url = station.url;
        li.addEventListener('click', () => playStation(station.url));
        stationsList.appendChild(li);
    });
}

async function playStation(url) {
    const player = document.getElementById('player');
    const playPauseButton = document.getElementById('play-pause');
    const currentRadioName = document.getElementById('current-radio');

    try {
        const stations = await fetchStations(); // Espera até que as estações sejam carregadas
        const station = stations.find(station => station.url === url);
        
        if (station) {
            currentRadioName.textContent = station.name;
            player.src = url;
            player.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            console.error('Estação de rádio não encontrada.');
        }
    } catch (error) {
        console.error('Erro ao carregar as estações:', error);
    }
}
function addStationToFavorites(url) {
    const favorites = getFavorites();
    if (!favorites.includes(url)) {
        favorites.push(url);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        loadFavorites();
        showNotification('Rádio adicionada aos favoritos!');
    }
}

function getFavorites() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

function loadFavorites() {
    const favorites = getFavorites();
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favorites.forEach(url => {
        const li = document.createElement('li');
        li.innerHTML = `<div class="station-info"><span>${url}</span></div>`;
        li.dataset.url = url;
        li.addEventListener('click', () => playStation(url));
        favoritesList.appendChild(li);
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Modal Functionality
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-modal-button');
const closeModalButton = document.querySelector('.close-button');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('add-station-button').addEventListener('click', () => {
    const stationUrl = document.getElementById('station-url').value;
    if (stationUrl) {
        addStationToFavorites(stationUrl);
        modal.style.display = 'none';
    }
});

document.getElementById('play-pause').addEventListener('click', () => {
    const player = document.getElementById('player');
    const playPauseButton = document.getElementById('play-pause');

    if (player.paused) {
        player.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        player.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

document.getElementById('stop').addEventListener('click', () => {
    const player = document.getElementById('player');
    const playPauseButton = document.getElementById('play-pause');

    player.pause();
    player.currentTime = 0;
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
});

document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const stations = document.querySelectorAll('#stations li');

    stations.forEach(station => {
        const stationName = station.textContent.toLowerCase();
        if (stationName.includes(searchTerm)) {
            station.style.display = 'flex';
        } else {
            station.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', async () => {
    const stations = await fetchStations();
    loadStations(stations);
    loadFavorites();
});
