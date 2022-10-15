function hideNews(){
    console.log("hideNews");
    document.getElementsByTagName("main").item(0).classList.remove("alfa");
    
    
    let removingElement = document.body.getElementsByClassName("news");
    document.body.removeChild(removingElement.item(0));   
}

function showNews() {
    console.log("showNews");
    
    document.getElementsByTagName("main").item(0).classList.add("alfa");
    
    
    let content = document.activeElement.parentElement.getElementsByTagName("div").item(0);
    let newItem = document.createElement("div");
    newItem.classList.add("news");
    let textPar = content.getElementsByTagName("p").item(0).textContent;
    let textHeader = content.getElementsByTagName("b").item(0).textContent;
    newItem.appendChild(content.cloneNode(1));
    newItem.getElementsByTagName("p").item(0).textContent = textHeader + ": " + textPar;
    newItem.addEventListener("click", hideNews, false);
    
    document.body.appendChild(newItem);
}
