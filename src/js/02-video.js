import throttle from 'lodash.throttle';
import '../css/common.css';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time");

const setLastSavedTime = () => {

    if (!currentTime) return;

    player.setCurrentTime(currentTime).then(
        function(seconds) {
        // seconds = the actual time that the player seeked to
        }).catch(function(error) {
            switch (error.name) {
            case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

            default:
             // some other error occurred
            break;
        }
        });
    
};


const onPlayerShow = (data) => localStorage.setItem("videoplayer-current-time", data.seconds);

player.on('timeupdate', throttle(onPlayerShow,1000));

setLastSavedTime();
