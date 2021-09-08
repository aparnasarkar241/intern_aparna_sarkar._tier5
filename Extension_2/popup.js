console.log("hi!! popup.js");

// make a connection with background.js
const backgroundPort= chrome.runtime.connect({
    name: "popUp",
    
});

// sending input value given by the user

const searchButton=document.getElementById("submit");
console.log("button added")

searchButton.addEventListener('click',()=>{
    const keyword= document.getElementById("search").value;
    console.log(keyword);
    backgroundPort.postMessage({
        type:"popup_intro",
        msg:keyword
    })
});

// enabling the print button

const printButton=document.getElementById("print");

printButton.addEventListener('click',()=>{
    backgroundPort.postMessage({
        type:"print"
    })
})