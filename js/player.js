document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const audioSource = document.getElementById('audioSource');
    const playBtn = document.getElementById('play');
    const playIcon = document.getElementById('playIcon');
    const previousBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next');
    const songs = document.querySelectorAll('.song');
    const progress = document.getElementById('progress');
    const trackTitle = document.getElementById('trackTitle');
    const volume = document.getElementById('volume');
  
    let currentSongIndex = 0;

    function GetFileNameFromPath(path){
        return path.split('\\').pop().split('/').pop()
    }
  
    function PlaySong(index) {
      const songPath = songs[index].getAttribute('data-path');
      audioSource.src = songPath;
      trackTitle.innerText = GetFileNameFromPath(songPath);

      progress.max = audioSource.duration;
      progress.value = audioSource.currentTime;

      ChangeVolume();
      audioSource.play();
    }
  
    function PlayPause() {
      if (audioSource.paused) {
        ChangeVolume();
        audioSource.play();
        playIcon.src = './img/icons/pause.png';
      } else {
        ChangeVolume();
        audioSource.pause();
        playIcon.src = './img/icons/play.png';
      }
    }
  
    function Next() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      PlaySong(currentSongIndex);
    }
  
    function Previous() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      PlaySong(currentSongIndex);
    }

    function ChangeVolume(){
        let val = volume.value / 100;
        audioSource.volume = val;
    }
    function ChangeTime(){
        audioSource.currentTime = progress.value;
    }
  
    // Events
    playBtn.addEventListener('click', PlayPause);
    previousBtn.addEventListener('click', Previous);
    nextBtn.addEventListener('click', Next);
    volume.addEventListener('input', ChangeVolume);
    progress.addEventListener('input', ChangeTime);
  
    songs.forEach(function(song, index) {
      song.addEventListener('click', function() {
        currentSongIndex = index;
        PlaySong(currentSongIndex);
      });
    });

    if(audioSource.play()){
        setInterval(()=>{
            progress.value = audioSource.currentTime;
        }, 500);
    }
});