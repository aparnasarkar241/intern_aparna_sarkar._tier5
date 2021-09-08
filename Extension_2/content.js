const backPort= chrome.runtime.connect({
    name: "content",
    
});

console.log("hii content")

let html=`<div class="foms">
<form class="formss" method="post">  
<div class="noti_title">
<label>Notification Title</label><br>
<input type="text" id="title" placeholder="Write Title">
</div>
<div class="noti_mssge">
<label>Notification Message</label><br>
<textarea placeholder="Write Noification" id="Txtarea" style="height: 200px;"></textarea>

</div>
<div class="sub_button">
    <button type="submit" id="notice">Submit</button>
</div>
</form>
</div>`;



const myName='Aparna';
document.title = myName;
document.querySelector("body").insertAdjacentHTML('beforeend',html);

const sendNotice= document.getElementById("notice");

sendNotice.addEventListener('click',()=>{
    backPort.postMessage({
        type:'noti',
        data:{
            title: document.getElementById('title').value,
            msg: document.getElementById('Txtarea').value
        }
        
    })
})