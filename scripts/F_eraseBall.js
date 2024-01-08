// 擦球函数
function eraseBall(mouseX, mouseY) {
  balls.forEach((ballData, id) => {
      const dx = ballData.x - mouseX;
      const dy = ballData.y - mouseY;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      if (ballData.movable && distance <= ballData.size / 2) {
        killBall(ballData, id); //移除球
        addLeaveToStory("You forget "+ballData.content+".");
        //如果移除了爱人则不再相爱(包括Yen，Sawaki，)
        if(ballData.type===3||ballData.content==="Yen"||ballData.content==="Sawaki"){
          inLove=false;
        }
         //移除了犯人，服务员线变动
         if(ballData.content==="Aiden"||ballData.content==="Chloe"){
          lastClick=1602;
          inLove=true;//同时不影响恋情
        }
      }
  });
}

// function killBall(ballData, id) {
// ballData.speedX = 0;  // 停止球的移动
// ballData.speedY = 0;  // 停止球的移动
// ballData.element.style.animation = "disappearAnimation 0.3s ease-out forwards";  // 设置动画

// // ballData.element.addEventListener('animationend', function() {
// //     balls.delete(id); // 删除这个球
// //     ballData.element.remove();  // 移除球的DOM元素
// //     updateAliveCount();
// // }, { once: true });

// //移除这个球
// setTimeout(() => {
//   ballData.alive = false;  // 设置球为非活动状态
//   balls.delete(id); // 删除这个球
//   ballData.element.remove();  // 移除球的DOM元素
//   updateAliveCount();
// }, 310);

// }

function killBall(ballData, id) {
  ballData.speedX = 0;  // 停止球的移动
  ballData.speedY = 0;  // 停止球的移动
  ballData.element.style.animation = "disappearAnimation 0.3s ease-out forwards";  // 设置动画

  // 如果ballData中有entryId属性，则寻找对应的文本并划掉
  if (ballData.entryId !== undefined) {
      const correspondingEntry = document.querySelector(`div[data-ball-id="${ballData.entryId}"]`);
      if (correspondingEntry) {
          correspondingEntry.innerHTML = `<del>${correspondingEntry.innerHTML}</del>`;
      }
  }

  // 移除这个球
  setTimeout(() => {
      ballData.alive = false;  // 设置球为非活动状态
      balls.delete(id); // 删除这个球
      ballData.element.remove();  // 移除球的DOM元素
      updateAliveCount();
  }, 310);
}




