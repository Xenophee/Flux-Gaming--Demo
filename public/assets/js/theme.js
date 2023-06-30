

let storage = localStorage.getItem('css') ? JSON.parse(localStorage.getItem('css')) : 1;

const themeCssFile = document.querySelector('.themeCssFile');
const cssFile = ["./public/assets/css/theme/lightmode.css", "./public/assets/css/theme/darkmode.css"];

themeCssFile.href = cssFile[storage -1];