var random_url = [];

chrome.bookmarks.getTree(function(itemTree){
    itemTree.forEach(function(item){
        processNode(item);
    });
     chrome.browserAction.onClicked.addListener(function(num) {
      //select random url from array
      num = random_url[Math.floor(Math.random()*random_url.length)];
    chrome.tabs.update({ url: num });
});
});

//add node's url value to array
function addURL(random, link) {
  random.push(link);
}

function processNode(node) {
    // recursively process child nodes
    if(node.children) {
        node.children.forEach(function(child) { processNode(child); });
    }

    // add bookmark url to array
    if(node.url) { addURL(random_url, node.url);} 
    }

 