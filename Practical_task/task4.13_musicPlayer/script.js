let songs = [
    { id: 1, songName: "Warriyo - Mortals", song: "songs/1.mp3", image: "songs/1.jpg" },
    { id: 2, songName: "Cielo - Huma-Huma", song: "songs/2.mp3", image: "songs/2.jpg" },
    { id: 3, songName: "DEAF KEV - Invincible -320k", song: "songs/3.mp3", image: "songs/3.jpg" },
    { id: 4, songName: "Different Heaven & EH!DE", song: "songs/4.mp3", image: "songs/4.jpg" },
    { id: 5, songName: "Janji-Heroes-Tonight-feat", song: "songs/5.mp3", image: "songs/5.jpg" },
    { id: 6, songName: "Rabba - Salam-e-Ishq", song: "songs/6.mp3", image: "songs/6.jpg" },
    { id: 7, songName: "Sakhiyaan - Salam-e-Ishq", song: "songs/7.mp3", image: "songs/7.jpg" },
    { id: 8, songName: "Bhula Dena - Salam-e-Ishq", song: "songs/8.mp3", image: "songs/8.jpg" },
];
let playlistSong = [];

let image = document.getElementById("image");
let songTitle = document.getElementById("songTitle");
let shuffle = document.getElementById("shuffle");
let previousSong = document.getElementById("previousSong");
let nextSong = document.getElementById("nextSong");
let playPause = document.getElementById("playPause");
let audio = document.getElementById("audio");
let allSongBtn = document.getElementById("allSong");
let playlistBtn = document.getElementById("playlist");
let songList = document.getElementById("songList");
let addPlaylist = document.getElementById("addPlaylist");
let addSong = document.getElementById("addNewSong");

let i = 0;
function display(n) {
    image.setAttribute("src", songs[n].image);
    image.setAttribute("alt", songs[n].songName);
    songTitle.innerHTML = songs[n].songName;
    audio.setAttribute("src", songs[n].song);

    let playlistBtn = playlistSong.find((x) => x.id == songs[i].id);
    if (playlistBtn != undefined) {
        addPlaylist.textContent = "playlist_add_check";
    }
    else {
        addPlaylist.textContent = "playlist_add";
    }
}
display(i);

function playPauseMusic() {
    if (playPause.innerText == "play_circle") {
        playPause.innerText = "pause_circle";
        audio.play();
    }
    else {
        playPause.innerText = "play_circle";
        audio.pause();
    }
}

function nextMusic() {
    if (i == songs.length - 1) {
        i = 0;
        display(i);
    }
    else {
        i++;
        display(i);
    }
    audio.play();
}

function previousMusic() {
    if (i == 0) {
        i = songs.length - 1;
        display(i);
    }
    else {
        i--;
        display(i);
    }
    audio.play();
}

function shuffleMusic() {
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    display(i);
}

function allSongList() {
    songList.innerHTML = "";
    for (let j = 0; j < songs.length; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "singleSong");

        div.innerHTML = `<img src="${songs[j].image}" alt="${songs[j].id}">
            <p>${songs[j].songName}</p> 
             <span class="material-symbols-outlined" id="playPause${songs[j].id}" onClick=play(${songs[j].id})>play_circle</span>
             <span class="material-symbols-outlined" class="deleteSong" onclick=deleteSong(${songs[j].id})>delete</span> `;
        songList.appendChild(div)
    }
}

function play(n) {
    allSongList();
    let playPauseN = document.getElementById("playPause" + n);
    let obj = songs.find(x => x.id === n);
    let index = songs.indexOf(obj);
    display(index);

    if (playPauseN.innerText == "play_circle") {
        playPauseN.innerText = "pause_circle";
        playPause.innerText = "pause_circle";
        audio.play();
    }
    else {
        playPauseN.innerText = "play_circle";
        playPause.innerText = "play_circle";
        audio.pause();
    }

}

function deleteSong(n) {
    let obj = songs.find(x => x.id === n);
    songs.splice(songs.indexOf(obj), 1);
    allSongList();
}


function addSongPlaylist() {
    let common = playlistSong.find((x) => x.id == songs[i].id);
    if (common == undefined) {
        playlistSong.push(songs[i]);
    }
    display(i);
}

function playlistSongsList() {
    songList.innerHTML = "";
    for (let j = 0; j < playlistSong.length; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "singleSong");

        div.innerHTML = `<img src="${playlistSong[j].image}" alt="${playlistSong[j].id}">
            <p>${playlistSong[j].songName}</p> 
             <span class="material-symbols-outlined" id="playPause${playlistSong[j].id}" onClick=play(${playlistSong[j].id})>play_circle</span>
             <span class="material-symbols-outlined" class="deleteSong" onclick=deleteSong(${playlistSong[j].id})>delete</span> `;
        songList.appendChild(div);
    }
}

function addNewSong() {
    let title = prompt('Enter song title:');
    let path = prompt('enter song path:');
    let cover = prompt('enter cover path:');
     if(title!=""&&path!=""&&cover!=""){
        songs.push({
            id: songs.length,
            songName: title,
            song: path,
            image: cover
        });
     }

   
    allSongList()
}

playPause.addEventListener("click", playPauseMusic);
nextSong.addEventListener("click", nextMusic);
previousSong.addEventListener("click", previousMusic);
shuffle.addEventListener("click", shuffleMusic);
audio.addEventListener("ended", nextMusic);
allSongBtn.addEventListener("click", allSongList);
addPlaylist.addEventListener("click", addSongPlaylist);
playlistBtn.addEventListener("click", playlistSongsList);
addSong.addEventListener("click", addNewSong)



