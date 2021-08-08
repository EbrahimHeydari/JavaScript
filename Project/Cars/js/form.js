
function checkValue(put , index) {
    var value = put.value;
    var tips  = document.getElementsByClassName('tip');
    if(!value == ''){
        tips[index].innerHTML = '';
    }
    else {
        tips[index].innerHTML = 'این قسمت ضروری است';
    }
}
