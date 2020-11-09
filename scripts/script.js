//https://discuss.dev.twitch.tv/t/streamers-live-status-on-website/8412/3

let div = document.getElementById('body');
let bottomBar = document.getElementById('bottom-bar');

let hasVerticalScrollbar;

hasVerticalScrollbar = div.scrollHeight > div.clientHeight;

if (hasVerticalScrollbar == false) {
    bottomBar.style.position = 'absolute';
    bottomBar.style.bottom = '0';
    bottomBar.style.right = '0';
}

if (hasVerticalScrollbar == true) {
    bottomBar.style.position = 'static';
}

window.onresize = function moveBottomBarOnResize() {
    hasVerticalScrollbar = div.scrollHeight > div.clientHeight;
    if (hasVerticalScrollbar == false) {
        bottomBar.style.position = 'absolute';
        bottomBar.style.bottom = '0';
        bottomBar.style.right = '0';
    }
    if (hasVerticalScrollbar == true) {
        bottomBar.style.position = 'static';
    }
}
