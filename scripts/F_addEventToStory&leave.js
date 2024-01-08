//参数：球id，事件描述，同意结果，拒绝结果，反馈时间
function addEventToStory(ballId,content,agreeContent,disagressContent,reactTime) {
  choiceMadeForCreate=false;// 一个标记来跟踪用户是否已做出选择(创建球)
  const storyDiv = document.getElementById("story");
  
  // Create event div and set its style
  const eventDiv = document.createElement("div");
  eventDiv.className = "event";
  eventDiv.style.display = "flex";  // use flex layout
  eventDiv.style.flexDirection = "column";  // make it column direction

  
  // 创建事件描述
  const eventDescription = document.createElement("p");
  eventDescription.textContent = content;
  eventDiv.appendChild(eventDescription);

  // 计时器
  const gif = document.createElement('img');
  gif.src = 'gifs/timer-20s.gif?' + new Date().getTime(); //更新gif
  gif.className = 'gif-style'; 
  eventDiv.appendChild(gif);

  // 事件选项
  const choiceY = document.createElement("button");
  choiceY.textContent = "YES";
  choiceY.className = 'button-style'; 
  choiceY.addEventListener("click", function() {
  balls.get(ballId).choiceMade = "Y";  // 更新标记
  //console.log("Current Ball Data:", balls.get(ballId).choiceMade);  // 调试语句
  choiceMadeForCreate= true;//球内标记
  //同意会发生的事
  if(agreeContent.length>0){
    setTimeout(() => {
    addMessageToStory(agreeContent);
    },reactTime);
  }
  handleChoice(eventDiv, "YES");
  });

  const choiceN = document.createElement("button");
  choiceN.textContent = "NO";
  choiceN.className = 'button-style';
  choiceN.addEventListener("click", function() {
  balls.get(ballId).choiceMade = "N";  // 更新标记
  choiceMadeForCreate= true;
  //不同意会发生的事
  if(disagressContent.length>0){
    setTimeout(() => {
    addMessageToStory(disagressContent);
  },reactTime);
  }
    handleChoice(eventDiv, "NO");
  });


  const choicesDiv = document.createElement("div");
  choicesDiv.appendChild(choiceY);
  choicesDiv.appendChild(choiceN);
  choicesDiv.style.display = "flex";  // Use flex layout for buttons too
  choicesDiv.style.justifyContent = "space-around";  // Give some space between buttons
  eventDiv.appendChild(choicesDiv);
  
  // 增加故事片段
  storyDiv.appendChild(eventDiv);

  //改变关键字颜色
  changeTextColorBasedOnBalls(eventDiv);

  
  // 屏幕自动到底部
  storyDiv.scrollTop = storyDiv.scrollHeight;

 // 20s没做选择淡出按钮和gif并提示文字
setTimeout(() => {
  if (!choiceMadeForCreate) {  // 如果没有做出选择，则执行以下操作
    const buttons = eventDiv.querySelectorAll("button");
    buttons.forEach(button => {
     button.remove();
    });

    const gif = eventDiv.querySelector('img');
    gif.remove();
    
    // 如果用户没有做出选择，显示提示消息
    const choiceText = document.createElement("p");
    choiceText.textContent = "You hesitated and didn't make a move.";
    choiceText.classList.add("choice-text","fade-in");
    eventDiv.appendChild(choiceText);

    balls.get(ballId).choiceMade = "Miss";
    choiceMadeForCreate= true;
  }
}, 20000);


}

function addLeaveToStory(content) {
  const storyDiv = document.getElementById("story");
  // 创建故事框
  const eventDiv = document.createElement("div");
  eventDiv.className = "event";
  // 创建事件描述
  eventDiv.innerHTML = content;
  // 增加故事片段
  storyDiv.appendChild(eventDiv);
  // 屏幕自动到底部
  storyDiv.scrollTop = storyDiv.scrollHeight;

  //改变关键字颜色
  changeTextColorBasedOnBalls(eventDiv);

}

function addMessageToStory(content) {
  const storyDiv = document.getElementById("story");
  // 创建故事框
  const eventDiv = document.createElement("div");
  eventDiv.className = "event";
  // 创建事件描述
  eventDiv.innerHTML = content;
  // 增加故事片段
  storyDiv.appendChild(eventDiv);
  // 屏幕自动到底部
  storyDiv.scrollTop = storyDiv.scrollHeight;

  //改变关键字颜色
  changeTextColorBasedOnBalls(eventDiv);

}

