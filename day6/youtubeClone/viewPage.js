const searchQueryStr = window.location.search;
const res = searchQueryStr.split('=')
const videoId = res[1];

console.log(videoId);


const iframe = document.getElementsByTagName('iframe')[0];

iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);






