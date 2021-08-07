var button= document.getElementById("getTime");

button.addEventListener("click", timeZone);

function timeZone (){
    var time= document.getElementById("showTime");
    time.innerHTML = Date();
}