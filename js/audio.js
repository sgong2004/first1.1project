let audioTag = document.getElementById('audioTag');
let audioBtn = document.getElementById('audioBtn');
let isPlaying = false;
let pauseClass = ['fas','fa-pause'];
let musicClass = ['fas','fa-music'];

window.onload = function() {
    if (getAction() === 'paused') {
        audioTag.pause();
    } else {
        isPlaying = true;
        audioBtn.classList.add('isPlaying');
        musicClass.forEach(cls => {
            audioBtn.classList.remove(cls);
        });
        pauseClass.forEach(cls => {
            audioBtn.classList.add(cls);
        });
    }
    audioTag.currentTime = getTimestamp();
}

audioBtn.onclick = function() {
    if (isPlaying) {
        setAction('paused');
        audioTag.pause();
        isPlaying = false;
        audioBtn.classList.remove('isPlaying');
        pauseClass.forEach(cls => {
            audioBtn.classList.remove(cls);
        });
        musicClass.forEach(cls => {
            audioBtn.classList.add(cls);
        });
    } else {
        setAction('playing');
        audioTag.play();
        isPlaying = true;
        audioBtn.classList.add('isPlaying');
        musicClass.forEach(cls => {
            audioBtn.classList.remove(cls);
        });
        pauseClass.forEach(cls => {
            audioBtn.classList.add(cls);
        });
    }
}

function getTimestamp()
{
    return localStorage.getItem('timestamp');
}

function setTimestamp(timestamp)
{
    localStorage.setItem('timestamp', timestamp);
}

function getAction()
{
    return localStorage.getItem('action');
}

function setAction(action)
{
    localStorage.setItem('action', action);
}

setInterval(() => {
    setTimestamp(audioTag.currentTime)
}, 1000);