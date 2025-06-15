// console.log("lets write java script!")

// let songs = [
//     "songs/song1.mp3",
//     "songs/song2.mp3"
//   ];
  
//   let audio = new Audio();
  
//   function playSong(index) {
//     audio.src = songs[index];
//     audio.play();
//   }


// let currentsong = new Audio();
// function formatTime(seconds) {
//     let mins = Math.floor(seconds / 60);
//     let secs = Math.floor(seconds % 60);

//     // Add leading zero if needed
//     if (mins < 10) mins = "0" + mins;
//     if (secs < 10) secs = "0" + secs;

//     return `${mins}:${secs}`;
// }

// async function getsongs() {
//     let a = await fetch("http://127.0.0.1:3000/songs/")
//     let responce = await a.text();
//     console.log(responce)
//     let div = document.createElement("div");
//     div.innerHTML = responce
//     let as = div.getElementsByTagName("a");
//     let songs = [];
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];  
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split("/songs/")[1]);
//         }
//     }
//     return songs
// }

// const playmusic =(track, pause = false)=>{
//     // let audio = new Audio("/songs/" + track)
//     currentsong.src = "/songs/" + track
//         if (!pause) {
//             currentsong.play()
//         }
//     play.src = "pause.svg"
//     document.querySelector(".songinfo").innerHTML =decodeURI(track)
//     document.querySelector(".time").innerHTML = "00:00/00:00"
// }

// songs = getsongs()
// async function main() {
//     let songs = await getsongs()
//     playmusic(songs[0],true)
//     console.log(songs)

//     let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
//     for (const song of songs) {
//         songul.innerHTML = songul.innerHTML + `
//         <li>
//             <img class="invert" src="music.svg" alt="">
//             <div class="info">
//                 <div class="red">
//                     <span>${song.replaceAll("%20", " ")}</span>
//                 </div>
//                 <div class="blue">
//                     <span>raghav</span>
//                 </div>
//             </div>
//             <div class="playnow">
//                 <span>play now</span>
//                 <img class="invert" src="play.svg" alt="">
//             </div>
//         </li>
        
//     `
//     }

//     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
//         e.addEventListener("click", element=>{
//             // console.log(e.querySelector(".info").firstElementChild.textContent)
//             // playmusic(e.querySelector(".info").firstElementChild.innerHTML.text.trim())
//             console.log(e.querySelector(".info").firstElementChild.textContent)
//             playmusic(e.querySelector(".info").firstElementChild.textContent.trim())
//         })
//     })
//     play.addEventListener("click",()=>{
//         if (currentsong.paused) {
//             currentsong.play()
//             play.src = "pause.svg"
//         }
//         else{
//             currentsong.pause()
//             play.src = "play.svg"
//         }
//     })
//     currentsong.addEventListener("timeupdate",()=>{
//         console.log(currentsong.currentTime, currentsong.duration)
//         document.querySelector(".time").innerHTML = `${formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)}`
//         document.querySelector(".circle").style.left = (currentsong.currentTime/currentsong.duration)*100 +"%"
//     })
//     document.querySelector(".seekbar").addEventListener("click", (e)=>{
//         let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
//         document.querySelector(".circle").style.left = percent+"%"
//         currentsong.currentTime = ((currentsong.duration)* percent)/100
//     })
//     document.querySelector(".hamburger").addEventListener("click",()=>{
//         document.querySelector(".left").style.left = "0"
//     })
//     document.querySelector(".close").addEventListener("click",()=>{
//         document.querySelector(".left").style.left = "-120%"
//     })
// }   
// main()


console.log("lets write java script!")

let songs = [
    "songs/song1.mp3",
    "songs/song2.mp3"
];

let audio = new Audio();

function playSong(index) {
    audio.src = songs[index];
    audio.play();
}

let currentsong = new Audio();

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    return `${mins}:${secs}`;
}

// 🔴 Remove getsongs() function — not needed, local servers don’t exist on GitHub Pages

const playmusic = (track, pause = false) => {
    currentsong.src = track;
    if (!pause) {
        currentsong.play();
    }
    play.src = "pause.svg";
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".time").innerHTML = "00:00/00:00";
}

async function main() {
    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0];

    for (const song of songs) {
        songul.innerHTML += `
        <li>
            <img class="invert" src="music.svg" alt="">
            <div class="info">
                <div class="red">
                    <span>${song.replaceAll("%20", " ")}</span>
                </div>
                <div class="blue">
                    <span>raghav</span>
                </div>
            </div>
            <div class="playnow">
                <span>play now</span>
                <img class="invert" src="play.svg" alt="">
            </div>
        </li>
        `;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            let songPath = e.querySelector(".info").firstElementChild.textContent.trim();
            console.log("Playing:", songPath);
            playmusic(songPath);
        });
    });

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "pause.svg";
        } else {
            currentsong.pause();
            play.src = "play.svg";
        }
    });

    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".time").innerHTML = `${formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration * percent) / 100;
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });
}

main();
