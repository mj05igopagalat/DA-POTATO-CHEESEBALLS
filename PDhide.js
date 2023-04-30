var div = document.getElementById('C');
var div1 = document.getElementById('P');
var display = 0;

function hideShow(){
    if(display= 1){
        div.style.display = 'block';
        display = 0;
    }
    else{
        div.style.display = 'none';
        display = 1;
    }
}