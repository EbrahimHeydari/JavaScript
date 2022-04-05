
function run() {
    document.getElementsByTagName('img')[0].setAttribute('src','image/run.png')
    var car = document.getElementsByTagName('div')[1];
    car.removeAttribute('class');
    car.setAttribute('id' , 'car')
    document.getElementsByTagName('img')[2].setAttribute('class' , 'one_');
    document.getElementsByTagName('img')[3].setAttribute('class' , 'two_')
}




// function stop() {
//     var car = document.getElementsByClassName('car')[0];
//     var positin = 500;
//     var set = setInterval(frame,1);
//     function frame() {
//         if(positin == 50) {
//             clearInterval(set);
//         }
//         else {
//             positin--;
//             car.style.left = positin + 'px';
//         }
//     }
// }