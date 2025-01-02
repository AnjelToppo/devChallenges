let songImgEl = document.querySelector('.song__image');
let songTitleEl = document.querySelector('.song__title');
let songArtistEl = document.querySelector('.song__artist');
let songCurrTimeEl = document.querySelector('.song__time--current');
let songTotalTimeEl = document.querySelector('.song__time--total');
let songProgressEl = document.querySelector('.song__progress');

let mainBtnEl = document.querySelector('.main-btn');
let leftBtnEl = document.querySelector('.left-ps-btn');
let rightBtnEl = document.querySelector('.right-ps-btn');

let song = new Audio("../resources/lost-in-city-lights-145038.mp3");


function isSongPlaying(song) {
    setInterval(() => {
        if (song.currentTime === song.duration) {
            clearInterval(isSongPlaying);
            mainBtnEl.style.backgroundImage = 'url("../resources/Play_fill.svg")';
        }
        songCurrTimeEl.innerHTML = songSecMin(song.currentTime);
        songProgressEl.value = song.currentTime;
    }, 1000)
}

function songSecMin(time) {
    let songInMin = `${Math.trunc(time / 60)}`;
    let songInSec = `${Math.trunc(time % 60)}`;

    if (songInMin.length === 1) {
        songInMin = `0${songInMin}`;
    }

    if (songInSec.length === 1) {
        songInSec = `0${songInSec}`;
    }

    return `${songInMin}:${songInSec}`;
}

function progressClickValue(event, element) {
    let x = event.pageX - element.offsetLeft
    return Math.trunc(x * element.max / element.offsetWidth);
}

function toggleSong(song) {
    song.stop;
    if (song.src.includes("/resources/lost-in-city-lights-145038.mp3")) {
        toggleSongDetail(song,
            "../resources/forest-lullaby-110624.mp3",
            "resources/cover-2.png",
            "Forest Lullaby song's cover image",
            "Forest Lullaby",
            "Lesfm",
            '00:00')

    } else if (song.src.includes("/resources/forest-lullaby-110624.mp3")) {
        toggleSongDetail(song,
            "../resources/lost-in-city-lights-145038.mp3",
            "resources/cover-1.png",
            "Lost in the City Lights song's cover image",
            "Lost in the City Lights",
            "Cosmo Sheldrake",
            '00:00')
    }
    song.play();
    mainBtnEl.style.backgroundImage = 'url("../resources/Pause_fill.svg")';
}

function toggleSongDetail(song, songSrc, songImgSrc, songImgAlt, songTitle, songArtist, songCurrentTime) {
    song.src = songSrc;
    songImgEl.src = songImgSrc;
    songImgEl.alt = songImgAlt;
    songTitleEl.innerHTML = songTitle;
    songArtistEl.innerHTML = songArtist;
    songCurrTimeEl.innerHTML = songCurrentTime;
    isSongPlaying(song);
}

songCurrTimeEl.innerHTML = '00:00';

song.addEventListener("loadeddata", () => {
    songTotalTimeEl.innerHTML = songSecMin(song.duration);
    songProgressEl.max = song.duration;
    songProgressEl.value = song.currentTime;
});


mainBtnEl.addEventListener('click', () => {
    if (song.paused) {
        mainBtnEl.style.backgroundImage = 'url("../resources/Pause_fill.svg")';
        song.play();

        isSongPlaying(song);
    } else {
        mainBtnEl.style.backgroundImage = 'url("../resources/Play_fill.svg")';
        song.pause();
        clearInterval(isSongPlaying);
    }

});

songProgressEl.addEventListener("click", function (evt) {
    song.currentTime = progressClickValue(evt, this);
    songProgressEl.value = song.currentTime;
});

leftBtnEl.addEventListener('click', () => {
    toggleSong(song);
});

rightBtnEl.addEventListener('click', () => {
    toggleSong(song);
});
