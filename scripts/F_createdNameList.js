// function createdNameList(ballData) {
// // story文字出现
// const storyDiv = document.getElementById("nameList");
// const newEntry = document.createElement("div");  
// newEntry.innerHTML = ballData.content+" - "+ballData.nameList;
// newEntry.classList.add("story-entry");
// storyDiv.appendChild(newEntry);

// // 设置滚动条到最底部
// storyDiv.scrollTop = storyDiv.scrollHeight;
// //改变颜色
// setTimeout(() => { 
// changeTextColorBasedOnBalls(newEntry);
// }, 500);


// }

let currentEntryId = 0;  // 用于生成每个newEntry的唯一ID
function createdNameList(ballData) {
    const storyDiv = document.getElementById("nameList");
    const newEntry = document.createElement("div");  
    newEntry.innerHTML = ballData.content + " - " + ballData.nameList;
    newEntry.classList.add("story-entry");
    newEntry.dataset.ballId = currentEntryId;  // 将当前的currentEntryId作为数据属性存储
    ballData.entryId = currentEntryId;  // 将entryId存储在ballData中，以便后续在killBall()中使用
    currentEntryId++;  // 增加ID以确保下一个是唯一的
    storyDiv.appendChild(newEntry);

    // 设置滚动条到最底部
    storyDiv.scrollTop = storyDiv.scrollHeight;

    // 改变颜色
    setTimeout(() => { 
        changeTextColorBasedOnBalls(newEntry);
    }, 500);
}

