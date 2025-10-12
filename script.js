console.log("Welcome to Spotify"); 


//initialize the variables
let songIndex = 0;
// let audioElement = new Audio("song.mp3");
let audioElement = new Audio("song.mp3");

let masterPlay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let song =[
    {songName: "Fear song", filePath: "song.mp3", coverPath: "fear-song-lyrics-v0-fccq6ehm8l1d1.webp"},
    {songName: "Rolex BGM", filePath: "rolex_bgm.mp3", coverPath: "artworks-0zuvZaZkqS7rwfi9-ywIFMA-t1080x1080.webp"},
    {songName: "salam-e-ishq", filePath: "song.mp3", coverPath: "cover1.jpg"},
    {songName: "salam-e-ishq", filePath: "song.mp3", coverPath: "cover1.jpg"},
    {songName: "salam-e-ishq", filePath: "song.mp3", coverPath: "cover1.jpg"},
    {songName: "salam-e-ishq", filePath: "song.mp3", coverPath: "cover1.jpg"},
]

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');}
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
    })
//listen to events
audioElement.addEventListener('timeupdate',()=>{

progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
     audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

Fear.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');}
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
    })


Rolex.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');}
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
        }
    })