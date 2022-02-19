searchVT = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.virustotal.com/gui/search/" + query});
}

chrome.contextMenus.removeAll(function(){
  chrome.contextMenus.create({
    id: "1",
    title: "Search in VirusTotal",
    contexts:["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(searchVT);