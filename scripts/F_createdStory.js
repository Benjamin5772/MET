function createdStory(ballData) {
// story文字出现
const storyDiv = document.getElementById("story");
const newEntry = document.createElement("div");  // 创建一个新的div来储存新的textContent
newEntry.innerHTML = ballData.storyContent;
newEntry.classList.add("story-entry");
storyDiv.appendChild(newEntry);

// 设置滚动条到最底部
storyDiv.scrollTop = storyDiv.scrollHeight;
//为storyContent中的content内容改变颜色
setTimeout(() => { 
changeTextColorBasedOnBalls(newEntry);
}, 500);


}


//修改文字颜色
function changeTextColorBasedOnBalls(storyElement) {
    balls.forEach((ballData) => {
        const walker = document.createTreeWalker(storyElement, NodeFilter.SHOW_TEXT, null, false);
        const nodesToReplace = [];
        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (node.nodeValue.includes(ballData.content)) {
                nodesToReplace.push(node);
            }
        }
        nodesToReplace.forEach(node => {
            const replacement = highlightKeywords(node, ballData);
            node.parentNode.replaceChild(replacement, node);
        });
    });
}
//遍历文本（？）
function highlightKeywords(textNode, ballData) {
    const ballContent = ballData.content;
    const ballColor = ballData.color;
    const regex = new RegExp(`(${ballContent})`, "gi");
    
    let result, lastLastIndex = 0;
    const nodeValue = textNode.nodeValue;
    const fragment = document.createDocumentFragment();
    
    while (result = regex.exec(nodeValue)) {
        const before = document.createTextNode(nodeValue.slice(lastLastIndex, result.index));
        const matched = document.createElement('span');
        matched.style.color = ballColor;
        matched.className = "animated-text-color";
        matched.textContent = result[0];
        
        fragment.appendChild(before);
        fragment.appendChild(matched);
        
        lastLastIndex = regex.lastIndex;
    }
    
    if (lastLastIndex < nodeValue.length) {
        const after = document.createTextNode(nodeValue.slice(lastLastIndex));
        fragment.appendChild(after);
    }
    
    return fragment;
}