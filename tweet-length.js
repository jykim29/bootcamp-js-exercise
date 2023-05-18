var str = prompt("트윗을 입력해주세요. (최대 250자)");
var leftStr = 250 - str.length;

if(leftStr > 0 && str.length != 0) {
    alert("당신은 "+str.length+"자를 입력하였으며, "+leftStr+"자를 더 입력할 수 있습니다.");
}
else if(leftStr < 0) {
    alert("250자를 초과하였습니다.");
}
else if(str.length == 0) {
    alert("아무것도 입력하지 않았습니다.");
}