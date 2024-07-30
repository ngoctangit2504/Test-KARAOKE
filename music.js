const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');
const seekBar = document.getElementById('seek-bar');
const canvas = document.getElementById('lyrics-canvas');
const ctx = canvas.getContext('2d');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const playlistButton = document.getElementById('playlist-button');
const backButton = document.getElementById('back-button');
const playlistSongs = document.getElementById('playlist-songs');
const currentSongTitle = document.getElementById('current-song-title');
const playlistDiv = document.getElementById('playlist');
const searchBar = document.getElementById('searchBar');
const replayButton = document.getElementById('replay-button');

const lyricsData = `
<data>
<param s="b">
<i va="10">*** </i>
</param>
<param s="b">
<i va="32">1 </i>
<i va="33">2 </i>
<i va="34">3 </i>
</param>

<param s="b">
<i va="35.144">Hồn </i>
<i va="35.587997">lỡ </i>
<i va="36.006">sa </i>
<i va="36.475998">vào </i>
<i va="36.972">đôi </i>
<i va="37.495">mắt </i>
<i va="37.939">em.</i>
</param>
<param s="b">
<i va="42.641">Chiều </i>
<i va="43.085">nao </i>
<i va="43.476997">xõa </i>
<i va="43.869">tóc </i>
<i va="44.443">ngồi </i>
<i va="45.017998">bên </i>
<i va="45.488">rèm.</i>
</param>
<param s="b">
<i va="49.276">Thầm </i>
<i va="49.694">ước </i>
<i va="50.059998">nhưng </i>
<i va="50.503998">nào </i>
<i va="51.026">đâu </i>
<i va="51.575">dám </i>
<i va="52.097">nói.</i>
</param>
<param s="b">
<i va="53.325">Khép </i>
<i va="53.769">tâm </i>
<i va="54.37">tư </i>
<i va="54.971">lại </i>
<i va="55.415">thôi.</i>
</param>
<param s="b">
<i va="56.669">Đường </i>
<i va="57.139">hoa </i>
<i va="57.766">vẫn </i>
<i va="57.922">chưa </i>
<i va="58.471">mở </i>
<i va="58.940998">lối.</i>
</param>
<param s="b">
<i va="62.572">Đời </i>
<i va="63.042">lắm </i>
<i va="63.408">phong </i>
<i va="63.8">trần </i>
<i va="64.34901">tay </i>
<i va="64.949005">trắng </i>
<i va="65.289">tay.</i>
</param>
<param s="b">
<i va="69.26">Trời </i>
<i va="69.73">đông </i>
<i va="70.122">ngại </i>
<i va="70.513">gió </i>
<i va="71.036">lùa </i>
<i va="71.637">vai </i>
<i va="72.133">gầy.</i>
</param>
<param s="b">
<i va="75.973">Lầu </i>
<i va="76.39101">kín </i>
<i va="76.783005">trăng </i>
<i va="77.149">về </i>
<i va="77.723">không </i>
<i va="78.272">lối </i>
<i va="78.768005">chiếu.</i>
</param>
<param s="b">
<i va="80.100006">Gác </i>
<i va="80.518005">cao </i>
<i va="81.171005">ngăn </i>
<i va="81.746">niềm </i>
<i va="82.269005">yêu.</i>
</param>
<param s="b">
<i va="83.444">Thì </i>
<i va="83.888">thôi </i>
<i va="84.515">mơ </i>
<i va="84.672005">ước </i>
<i va="85.168">chi </i>
<i va="85.769005">nhiều.</i>
</param>
<param s="b">
<i va="91.411">Bên </i>
<i va="92.117004">nhau </i>
<i va="93.292">sao </i>
<i va="93.815">tình </i>
<i va="94.416">xa </i>
<i va="95.042">vạn </i>
<i va="95.539">lý </i>
<i va="96.740005">cách </i>
<i va="97.263">biệt </i>
<i va="97.838005">mấy </i>
<i va="98.491005">sơn </i>
<i va="98.935005">khê.</i>
</param>
<param s="b">
<i va="101.233">Ngày </i>
<i va="102.148">đi </i>
<i va="103.34901">mắt </i>
<i va="103.767006">em </i>
<i va="104.473">xanh </i>
<i va="105.126">biển </i>
<i va="105.596">sâu, </i>
<i va="106.719">mắt </i>
<i va="107.137">tôi </i>
<i va="107.921005">rưng </i>
<i va="108.469">rưng </i>
<i va="108.913">sầu.</i>
</param>
<param s="b">
<i va="110.455">Lặng </i>
<i va="111.108">nghe </i>
<i va="111.709">tiếng </i>
<i va="112.205">pháo </i>
<i va="112.962006">tiễn </i>
<i va="113.824005">ai </i>
<i va="114.582">qua </i>
<i va="114.922005">cầu.</i>
</param>
<param s="b">
<i va="115.496">Đường </i>
<i va="116.228004">phố </i>
<i va="116.72401">muôn </i>
<i va="117.064">màu </i>
<i va="117.534004">sao </i>
<i va="118.082">thiếu </i>
<i va="118.579">em.</i>
</param>
<param s="b">
<i va="122.628006">Về </i>
<i va="123.046005">đâu </i>
<i va="123.464005">làn </i>
<i va="123.882">tóc </i>
<i va="124.404">xõa </i>
<i va="124.979004">bên </i>
<i va="125.449005">rèm.</i>
</param>
<param s="b">
<i va="129.263">Lầu </i>
<i va="129.707">vắng </i>
<i va="130.073">không </i>
<i va="130.464">người </i>
<i va="131.118">song </i>
<i va="131.666">khép </i>
<i va="132.18901">kín.</i>
</param>
<param s="b">
<i va="133.46901">Nhớ </i>
<i va="133.91301">em </i>
<i va="134.461">tôi </i>
<i va="135.088">gọi </i>
<i va="135.584">tên, </i>
<i va="136.70801">chỉ </i>
<i va="137.20401">nghe </i>
<i va="137.85701">tiếng </i>
<i va="138.171">lá </i>
<i va="139.059">rơi </i>
<i va="139.58101">thềm...</i>
</param>

<param s="b">

<i va="165">1 </i>
<i va="166">2 </i>
<i va="167">3 </i>
</param>

<param s="b">
<i va="168.10701">Bên </i>
<i va="169.021">nhau </i>
<i va="170.06601">sao </i>
<i va="170.48401">tình </i>
<i va="171.11101">xa </i>
<i va="171.738">vạn </i>
<i va="172.20801">lý </i>
<i va="173.358">cách </i>
<i va="173.828">biệt </i>
<i va="174.429">mấy </i>
<i va="175.134">sơn </i>
<i va="175.552">khê.</i>
</param>
<param s="b">
<i va="177.981">Ngày </i>
<i va="178.713">đi </i>
<i va="180.019">mắt </i>
<i va="180.489">em </i>
<i va="181.09">xanh </i>
<i va="181.743">biển </i>
<i va="182.161">sâu, </i>
<i va="183.389">mắt </i>
<i va="183.83301">tôi </i>
<i va="184.46">rưng </i>
<i va="185.087">rưng </i>
<i va="185.531">sầu.</i>
</param>
<param s="b">
<i va="187.15001">Lặng </i>
<i va="187.856">nghe </i>
<i va="188.378">tiếng </i>
<i va="188.639">pháo </i>
<i va="189.031">tiễn </i>
<i va="189.58">ai </i>
<i va="189.97101">qua </i>
<i va="191.878">cầu.</i>
</param>
<param s="b">
<i va="192.479">Đường </i>
<i va="192.949">phố </i>
<i va="193.472">muôn </i>
<i va="193.864">màu </i>
<i va="194.464">sao </i>
<i va="195.039">thiếu </i>
<i va="195.536">em.</i>
</param>
<param s="b">
<i va="199.271">Về </i>
<i va="199.68901">đâu </i>
<i va="200.133">làn </i>
<i va="200.52501">tóc </i>
<i va="201.047">xõa </i>
<i va="201.62201">bên </i>
<i va="202.144">rèm.</i>
</param>
<param s="b">
<i va="205.932">Lầu </i>
<i va="206.35">vắng </i>
<i va="206.742">không </i>
<i va="207.108">người </i>
<i va="207.709">song </i>
<i va="208.336">khép </i>
<i va="208.806">kín.</i>
</param>
<param s="b">
<i va="210.033">Nhớ </i>
<i va="210.478">em </i>
<i va="211.104">tôi </i>
<i va="211.627">gọi </i>
<i va="212.149">tên, </i>
<i va="213.429">chỉ </i>
<i va="213.90001">nghe </i>
<i va="214.709">tiếng </i>
<i va="215.284">lá </i>
<i va="215.493">rơi </i>
<i va="215.83301">thềm.</i>
</param>
<param s="b">
<i va="219.307">Lầu </i>
<i va="219.699">vắng </i>
<i va="220.117">không </i>
<i va="220.535">người </i>
<i va="221.162">song </i>
<i va="221.684">khép </i>
<i va="222.233">kín.</i>
</param>
<param s="b">
<i va="223.513">Nhớ </i>
<i va="223.904">em </i>
<i va="224.558">tôi </i>
<i va="225.184">gọi </i>
<i va="225.602">tên, </i>
<i va="226.935">chỉ </i>
<i va="229.05101">nghe </i>
<i va="232.96901">tiếng </i>
<i va="234.06601">lá </i>
<i va="235.13701">rơi </i>
<i va="236.522">thềm.</i>
</param>
</data>
`;

const songs = [
    { title: "Về đâu mái tóc người thương", author: "Nhật Ngân", file: "BaiHat/beat.mp3", lyrics: lyricsData },
    { title: "Cho em gần anh thêm chút nữa", author: "Hương Tràm", file: "BaiHat/Cho Em Gần Anh Thêm Chút Nữa Remix Vinahouse.mp3" },
    { title: "Nàng thơ hihi", author: "Hoàng Dũng", file: "BaiHat/Nàng thơ.mp3" },
];

let currentSongIndex = 0;
let lyricsArray = [];

function parseLyrics(lyrics) {
    if (!lyrics) return [];

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(lyrics, "text/xml");
    const params = xmlDoc.getElementsByTagName("param");
    let lyricEntries = [];

    for (let param of params) {
        let words = param.getElementsByTagName("i");
        let line = [];
        for (let word of words) {
            line.push({ time: parseFloat(word.getAttribute("va")), text: word.textContent });
        }
        lyricEntries.push(line);
    }
    return lyricEntries;
}

function displayLyrics() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (lyricsArray.length === 0) return;

    ctx.font = "16px Arial";

    let currentTime = audio.currentTime;
    let startY = 20;
    let visibleLines = Math.floor(canvas.height / 20);
    let currentLine = 0;
    let lineOffset = 0;

    for (let i = 0; i < lyricsArray.length; i++) {
        let line = lyricsArray[i];
        if (line.some(word => currentTime >= word.time)) {
            currentLine = i;
        }
    }

    for (let i = currentLine; i < currentLine + visibleLines && i < lyricsArray.length; i++) {
        let line = lyricsArray[i];
        let x = 10; // Starting x position for each line
        let y = startY + ((i - currentLine + lineOffset) * 20); // y position for each line

        for (let word of line) {
            let textWidth = ctx.measureText(word.text).width;

            // Wrap text if it exceeds canvas width
            if (x + textWidth > canvas.width) {
                x = 10; // reset x to the starting position
                y += 20; // move to the next line
                lineOffset++; // increase the line offset to avoid overlap
            }

            let chars = word.text.split('');
            let charX = x;

            for (let char of chars) {
                let charWidth = ctx.measureText(char).width;
                let elapsed = currentTime - word.time;

                ctx.save();
                ctx.translate(charX, y);

                if (elapsed > 0) {
                    let progress = Math.min(elapsed / 0.5, 1); // assuming 0.5 seconds per word
                    let gradient = ctx.createLinearGradient(0, 0, charWidth, 0);
                    gradient.addColorStop(0, 'blue');
                    gradient.addColorStop(progress, 'blue');
                    gradient.addColorStop(progress, 'blue');
                    gradient.addColorStop(progress, 'black');
                    gradient.addColorStop(progress, 'black');
                    gradient.addColorStop(1, 'black');
                    ctx.fillStyle = gradient;
                    ctx.fillText(char, 0, 0);
                } else {
                    ctx.fillStyle = 'black';
                    ctx.fillText(char, 0, 0);
                }

                ctx.restore();
                charX += charWidth; // Move to the next character position
            }

            x += textWidth + 5; // Add some space between words
        }
    }
}

const updateProgress = () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    seekBar.value = (currentTime / duration) * 100;
    currentTimeDisplay.textContent = formatTime(currentTime);
    totalTimeDisplay.textContent = formatTime(duration);
};

const loadSong = (index) => {
    currentSongIndex = index;
    audio.src = songs[index].file;
    lyricsArray = parseLyrics(songs[index].lyrics);
    currentSongTitle.textContent = songs[index].title;
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    displayLyrics();
};

audio.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    updateProgress();
    displayLyrics();
});

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

replayButton.addEventListener('click', () => {
    audio.currentTime = 0;
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
});

prevButton.addEventListener('click', () => {
    if (currentSongIndex > 0) {
        loadSong(currentSongIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSongIndex < songs.length - 1) {
        loadSong(currentSongIndex + 1);
    }
});

seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

playlistButton.addEventListener('click', () => {
    // Hide music player elements
    canvas.style.display = 'none';
    playPauseButton.style.display = 'none';
    replayButton.style.display = 'none';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    currentSongTitle.style.display = 'none';
    seekBar.style.display = 'none';
    currentTimeDisplay.style.display = 'none';
    totalTimeDisplay.style.display = 'none';
    playlistButton.style.display = 'none';

    // Show playlist
    playlistDiv.style.display = 'block';
});

backButton.addEventListener('click', () => {
    // Show music player elements
    canvas.style.display = 'block';
    playPauseButton.style.display = 'block';
    replayButton.style.display = 'block';
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
    currentSongTitle.style.display = 'block';
    seekBar.style.display = 'block';
    currentTimeDisplay.style.display = 'block';
    totalTimeDisplay.style.display = 'block';
    playlistButton.style.display = 'block';

    // Hide playlist
    playlistDiv.style.display = 'none';
});

songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.classList.add('list-group-item');
    li.addEventListener('click', () => {
        loadSong(index);
        // Show music player elements
        canvas.style.display = 'block';
        playPauseButton.style.display = 'block';
        replayButton.style.display = 'block';
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
        currentSongTitle.style.display = 'block';
        seekBar.style.display = 'block';
        currentTimeDisplay.style.display = 'block';
        totalTimeDisplay.style.display = 'block';
        playlistButton.style.display = 'block';

        // Hide playlist
        playlistDiv.style.display = 'none';
    });
    playlistSongs.appendChild(li);
});

loadSong(currentSongIndex);

const displaySongs = (songsToDisplay) => {
    playlistSongs.innerHTML = "";
    if (songsToDisplay.length === 0) {
        const noResults = document.createElement('li');
        noResults.textContent = "Không tìm thấy bài hát nào";
        noResults.classList.add('list-group-item');
        playlistSongs.appendChild(noResults);
    } else {
        songsToDisplay.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${song.title}</strong> - <em>${song.author}</em>`;
            li.classList.add('list-group-item');
            li.addEventListener('click', () => {
                loadSong(index);
                // Show music player elements
                canvas.style.display = 'block';
                playPauseButton.style.display = 'block';
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
                currentSongTitle.style.display = 'block';
                seekBar.style.display = 'block';
                currentTimeDisplay.style.display = 'block';
                totalTimeDisplay.style.display = 'block';
                playlistButton.style.display = 'block';

                // Hide playlist
                playlistDiv.style.display = 'none';
            });
            playlistSongs.appendChild(li);
        });
    }
};

displaySongs(songs);

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.author.toLowerCase().includes(query)
    );
    displaySongs(filteredSongs);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);
    return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
}