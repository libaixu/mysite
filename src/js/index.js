require('../css/reset.css')
require('../css/index.css');

const getEle = (el) => {
  return document.getElementById(el);
}

const timeWrapper = getEle('js_time_wrapper');

const check = (i) => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

(() => {
  setInterval(() => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    minutes = check(minutes);
    seconds = check(seconds);

    const timeStr = `${year}年${month}月${date}日&nbsp&nbsp${hour}:${minutes}:${seconds}`;
    timeWrapper.innerHTML = timeStr;
    },1000)
})()
