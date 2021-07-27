var array=[];
var input= document.forms["form"]["fName"];
var studentList= document.getElementById("stdList");
// console.log(input);

function getData(){

    if(input.value===""){
        alert("Name must filled out")
    }else{
        array.push(input.value)
        // console.log(array);
        show();
    }
    
}
function show(){
    studentList.innerHTML="";
    array.forEach(function(item, index){
        studentList.innerHTML+= `<li> ${item}<span><button class="button2" type="submit" onclick='deleteItem("${index}")'>remove</button></span></li>`;

        
    })
}
function deleteItem(index) {
    array.splice(index, 1)
    show();
}