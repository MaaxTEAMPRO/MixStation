// Função para renderizar as estações no DOM
function renderStations(stations) {
    const stationsList = document.getElementById('stations');
    stationsList.innerHTML = '';

    stations.forEach(station => {
        const stationElement = document.createElement('li');
        stationElement.innerHTML = `
            <div class="station-info">
                <img src="${station.icon}" alt="${station.name}">
                <p>${station.name}</p>
            </div>
        `;
        stationElement.addEventListener('click', () => {
            playStation(station);
        });
        stationsList.appendChild(stationElement);
    });
}

// Função para tocar a estação selecionada e atualizar o título da aba
function playStation(station) {
    const player = document.getElementById('player');
    player.src = station.url;
    player.play();

    const currentRadio = document.getElementById('current-radio');
    currentRadio.textContent = station.name;

    // Atualizar o título da aba com o nome da estação
    document.title = station.name;
}

// Função para pesquisar estações
function searchStations() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const filteredStations = stations.filter(station => station.name.toLowerCase().includes(searchInput));
    renderStations(filteredStations);
}

// Função para adicionar eventos de controle do player
function setupPlayerControls() {
    const player = document.getElementById('player');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop');

    playPauseButton.addEventListener('click', () => {
        if (player.paused) {
            player.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            player.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    stopButton.addEventListener('click', () => {
        player.pause();
        player.currentTime = 0;
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    });

    player.addEventListener('play', () => {
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    });

    player.addEventListener('pause', () => {
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    });
}

// Função para rolar suavemente para o topo da página
document.getElementById('page-header').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para exibir popup de volume
function showVolumePopup(volume) {
    const volumePopup = document.getElementById('volume-popup');
    volumePopup.textContent = `Volume: ${Math.round(volume * 100)}%`;
    volumePopup.style.display = 'block';
    volumePopup.style.opacity = '1';

    setTimeout(() => {
        volumePopup.style.opacity = '0';
        setTimeout(() => {
            volumePopup.style.display = 'none';
        }, 500);
    }, 1000);
}

// Inicialização do script quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    renderStations(stations);
    document.getElementById('search-bar').addEventListener('input', searchStations);
    setupPlayerControls();
    
    const player = document.getElementById('player');
    const volumeUpButton = document.getElementById('volume-up');
    const volumeDownButton = document.getElementById('volume-down');
    const pauseButton = document.getElementById('pause');
    const stopControlButton = document.getElementById('stop-control'); // Atualizado para stop-control

    volumeUpButton.addEventListener('click', () => {
        player.volume = Math.min(player.volume + 0.1, 1);
        showVolumePopup(player.volume);
    });

    volumeDownButton.addEventListener('click', () => {
        player.volume = Math.max(player.volume - 0.1, 0);
        showVolumePopup(player.volume);
    });

    pauseButton.addEventListener('click', () => {
        if (player.paused) {
            player.play();
            pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            player.pause();
            pauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    stopControlButton.addEventListener('click', () => {
        player.pause();
        player.currentTime = 0;
        pauseButton.innerHTML = '<i class="fas fa-play"></i>';
    });
});
