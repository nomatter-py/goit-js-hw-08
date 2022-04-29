import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time");

(() => {
    if (!currentTime) return;
    player.setCurrentTime(currentTime);
})();

const onPlayerShow = (data) => localStorage.setItem("videoplayer-current-time", data.seconds);

player.on('timeupdate', throttle(onPlayerShow,1000));


