let gameIsEnded = false;

function ifgameEnd() {
  
  if (age == maxAge && !gameIsEnded) {
    gameIsEnded = true; // 设置标志为true
    //加入寿终提示
    setTimeout(() => {
      addLeaveToStory(Math.round(birthday + age)+", you fell asleep in a sunny courtyard.");
     }, 1800);
    //载入结算画面
    setTimeout(() => {
      switch(endType)
      {
        case 2:
          gameEnd("images/end2.png");
        break;

        case 4:
          gameEnd("images/end4.png");
        break;

        case 15:
          gameEnd("images/end15.png");
        break;

        default:
        if(deal===1)
        gameEnd("images/end1.0.png");
        else if(deal===0)
        gameEnd("images/end1.1.png");
      }
      
      }, 2000);
    //载入生平
    setTimeout(() => {
      document.getElementById('end-container').style.display = 'block';
    }, 3000);
  }
  if (!gameIsEnded) {
    requestAnimationFrame(() => ifgameEnd());
  }
}

  function gameEnd(imgPath) {
   // 创建空白矩形
   const fadeRectangle = document.createElement('div');
   fadeRectangle.classList.add('fade-rectangle','fade-in');
   document.body.appendChild(fadeRectangle);
  
    setTimeout(() => {
      // 创建结局图片
      const img = document.createElement('img');
      img.src = imgPath;
      img.classList.add('end-image', 'fade-in');
      document.getElementById('end-container').appendChild(img);
        
    // 创建endStoryContainer
     const endStoryContainer = document.createElement('div');
     endStoryContainer.classList.add('end-story-container');
     endStoryContainer.id = 'end-story-container';  // 设置id
     document.getElementById('end-container').appendChild(endStoryContainer);

      // 拷贝#story的内容到end-container的右侧
      const endStory = document.createElement('div');
      endStory.innerHTML = document.getElementById('story').innerHTML;
      endStory.classList.add('end-story', 'fade-in');
      document.getElementById('end-story-container').appendChild(endStory);

      // 在endStoryContainer中创建按钮容器
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
      endStoryContainer.appendChild(buttonContainer);
      //创建按钮
      const homeButton = document.createElement('button');
      homeButton.innerText = 'ONE MORE!';
      homeButton.onclick = () => window.location.href = 'game.html';
      homeButton.className = 'button-style-end'; 

      const startButton = document.createElement('button');
      startButton.innerText = 'HOME';
      startButton.onclick = () => window.location.href = 'index.html';
      startButton.className = 'button-style-end'; 

      // 将按钮添加到 end-story-container
      buttonContainer.appendChild(homeButton);
      buttonContainer.appendChild(startButton);

      

       }, 10); // 等待1秒
  }
  
  
  