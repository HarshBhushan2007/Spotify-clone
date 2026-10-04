const audio = document.getElementById("audio");

const play = document.getElementById("play");
const heroPlay = document.getElementById("heroPlay");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

const progress = document.getElementById("progress");

const current = document.getElementById("current");
const total = document.getElementById("total");

const songList = document.getElementById("songList");
const search = document.getElementById("search");

const mainImage = document.getElementById("mainImage");
const playerImage = document.getElementById("playerImage");

const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");

const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");


/* SONGS */

const songs = [

    {
        name: "Naach Meri Rani",
        artist: "Guru Randhawa",
        file: "Song/Naach Meri Rani - Guru Randhawa.mp3",
        image: "song image/naach-meri-rani.jpg"
    },

    {
        name: "Despacito",
        artist: "Justin Bieber",
        file: "Song/Justin-Bieber-Despacito-Lyrics-⧸-Letra-ft.-Luis-Fonsi-Daddy-Yankee-TfkP5ubz1z4-140-audio-only-1733648957id.mp3",
        image: "song image/Justin-Bieber-Despacito-Lyrics-⧸-Letra-ft.-Luis-Fonsi-Daddy-Yankee-TfkP5ubz1z4-140-audio-only-1733648957id.jpg"
    },

    {
        name: "Faded",
        artist: "Alan walker",
        file: "Song/Alan_Walker_-_Faded_Vocal_Mix_(mp3.pm).mp3",
        image: "song image/artworks-000155676834-3935wq-t1080x1080.webp"
    }

];


let index = 0;


/* LOAD SONG */

function loadSong(i, auto = false) {

    index = i;

    const song = songs[index];

    audio.src = song.file;

    mainImage.src = song.image;
    playerImage.src = song.image;

    songTitle.innerText = song.name;
    playerTitle.innerText = song.name;

    artist.innerText = song.artist;
    playerArtist.innerText = song.artist;

    renderSongs();

    if (auto) {
        audio.play();
    }
}


/* PLAY */

function togglePlay() {

    if (audio.paused) {

        audio.play();

        play.innerText = "❚❚";
        heroPlay.innerText = "❚❚ Playing";

    } else {

        audio.pause();

        play.innerText = "▶";
        heroPlay.innerText = "▶ Play Music";

    }

}


play.onclick = togglePlay;
heroPlay.onclick = togglePlay;


/* NEXT */

next.onclick = () => {

    index++;

    if (index >= songs.length) {
        index = 0;
    }

    loadSong(index, true);

};


/* PREVIOUS */

prev.onclick = () => {

    index--;

    if (index < 0) {
        index = songs.length - 1;
    }

    loadSong(index, true);

};


/* PROGRESS */

audio.ontimeupdate = () => {

    if (!audio.duration) return;

    progress.value =
        (audio.currentTime / audio.duration) * 100;

    current.innerText =
        formatTime(audio.currentTime);

};


audio.onloadedmetadata = () => {

    total.innerText =
        formatTime(audio.duration);

};


progress.oninput = () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;

};


/* SONG ENDED */

audio.onended = () => {

    next.click();

};


/* FORMAT TIME */

function formatTime(seconds) {

    let min =
        Math.floor(seconds / 60);

    let sec =
        Math.floor(seconds % 60);

    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ":" + sec;

}


/* SONG LIST */

function renderSongs() {

    songList.innerHTML = "";

    songs.forEach((song, i) => {

        const div =
            document.createElement("div");

        div.className =
            "song " +
            (i === index ? "active" : "");

        div.innerHTML = `

            <div class="song-left">

                <img src="${song.image}">

                <div>

                    <div class="song-name">
                        ${song.name}
                    </div>

                    <div class="artist">
                        ${song.artist}
                    </div>

                </div>

            </div>

            <button>▶</button>

        `;

        div.onclick = () => {

            loadSong(i, true);

        };

        songList.appendChild(div);

    });

}


/* SEARCH */

search.oninput = () => {

    const value =
        search.value.toLowerCase();

    document
        .querySelectorAll(".song")
        .forEach((song, i) => {

            const name =
                songs[i].name.toLowerCase();

            song.style.display =
                name.includes(value)
                    ? "flex"
                    : "none";

        });

};


/* START */

loadSong(0);