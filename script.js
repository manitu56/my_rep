let = leftOffset = -300;// левый отступ заголовка
let moveHead = function(){
    $('#left-move').offset({left:leftOffset});
    leftOffset++;
    if (leftOffset>30){
        leftOffset = 30;
    }
}
setInterval(moveHead,5);