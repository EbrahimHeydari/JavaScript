var menu = document.getElementById('menu');
var exit = document.getElementById('close');
var check = document.getElementById('check');
var mobile = document.getElementById('mobile');

menu.onclick = function () {
    mobile.setAttribute('class', 'list-mobile');
}

exit.onclick = function () {
    mobile.setAttribute('class', 'navigation');
}

check.onclick = function () {
    document.querySelector('.container').classList.toggle('active');
    document.querySelector('.side').classList.toggle('active');
}