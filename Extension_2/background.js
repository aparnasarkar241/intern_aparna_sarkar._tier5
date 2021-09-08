console.log("this is from background.js")

// establish the connection

chrome.runtime.onConnect.addListener((port)=>{
    if(port.name==="popUp"){
        port.onMessage.addListener((data)=>{
            
            // create new tab
            if(data.type==="popup_intro"){
                const text=data.msg;
                console.log(text);
                const newUrl=" https://www.google.com/search?q="+text;
                chrome.tabs.create({url: newUrl})

                // print current tab
            }else if(data.type==="print"){
                chrome.tabs.query({active: true, currentWindow: true},function(tabs){   
                    const currentTab = tabs[0];
                    chrome.scripting.executeScript({
                        target: {tabId:currentTab.id},
                        func: function getPrint(){
                            return window.print()
                        }
                    },()=>{
                        console.log("print")
                    })
                
                });
            }
        })
    }else if(port.name==="content"){
        console.log('content connected')
        port.onMessage.addListener((req)=>{
            console.log(req.data.title)
            if(req.type==="noti"){
                chrome.notifications.create("notify",{
                    iconUrl:
                            "images/search48.png",
                        type: "basic",
                        title: req.data.title,
                        message: req.data.msg
                },()=>{console.log("successfully notified")})
            }
        })
    }
});