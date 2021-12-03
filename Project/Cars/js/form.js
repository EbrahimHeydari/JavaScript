
function checkValue(put , index) {
    var value = put.value;
    var tips  = document.getElementsByClassName('tip');
    if(!value == ''){
        tips[index].innerHTML = '';
        put.border = '1px solid orangered';
        put.color = 'orangered';
    }
    else {
        tips[index].innerHTML = 'این قسمت ضروری است';
    }
}
