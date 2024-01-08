//球动画
function animateBall(ballId) {

    const ballData = balls.get(ballId);
    // 如果这个球已经被删除，直接返回
    if (!ballData) return; 
    
    // 球创建成功后
    if( ballData.alive){
    setTimeout(() => {
    ballData.x += ballData.speedX;
    ballData.y += ballData.speedY;
    }, 1100);
    }

   //第一个球创建成功后增加点击进度
   if(ballId===0&&ballData.alive&&!ballData.created ){
    ageAbaleGrow=true;
   }
   //投资球创建成功后改变故事走向
   if(ballData.content==="Priya"&&ballData.alive&&!ballData.created ){
     waiterLine=1;
   }

   //记者，故人，摄影师球创建成功后开启finalMeet
   if((ballData.content==="Journalist"||
       ballData.content==="Olga"||
       ballData.content==="Ethan"||
       ballData.content==="Hiroshi"||
       ballData.content==="Photographer"
      )&&ballId>10&&ballData.alive&&!ballData.created ){
    finalMeet=true;
    //提示生命倒计时
    showAlertText("Your life has started its countdown,\n go meeting as many people as you can!");
    setTimeout(() => {
      finalMeetMusic.play();
      }, 3000);//延迟3s播放
   }


  // if(ballId===2&&ballData.alive&&!ballData.created ){
  //   finalMeet=true;
  //      //提示生命倒计时
  //      showAlertText("Your life has started its countdown,\n go meeting as many people as you can!");
  //   setTimeout(() => {
  //     finalMeetMusic.play();
  //     }, 3000);
  // }


   //球创建成功后增加点击进度
    if(ballData.alive&&!ballData.created )
    {
    clickCount++;
    ballData.created = true;
    createdStory(ballData);
    createdNameList(ballData);
    //播放对应特效
    switch (ballData.type) {
      case 1:
        showGif(ballData.x, ballData.y, 'gifs/pup1.1.gif', 'gifs/pup1.2.gif','150px','150px');//普通
        break;
      case 2:
        showGif1(ballData.x+20, ballData.y, 'gifs/pop_friend.gif','200px',1800); //友情
        break;
      case 3:
        showGif1(ballData.x, ballData.y, 'gifs/pop_love.gif','200px',2000); //爱情
        break;
      case 4:
        showGif2(ballData.x, ballData.y, 'gifs/pop_rain1.2.gif','gifs/pop_rain1.1.gif','250px','250px',2000);//苦难
        ballData.element.style.border = "3px solid black"; 
        ballData.movable=false;
        break;
      case 5:
        showGif1(ballData.x-30, ballData.y, 'gifs/pop_magic.gif','200px',2000); //奇遇
        break;
    }
    }
     
    const radius = gameContainer.clientWidth / 2;
    const containerCenterX = gameContainer.clientWidth / 2;
    const containerCenterY = gameContainer.clientHeight / 2;
    
    const distance = Math.sqrt((ballData.x - containerCenterX) ** 2 + (ballData.y - containerCenterY) ** 2);
    if (ballData.alive && distance >= (radius - ballData.size / 2)) {
      const angle = Math.atan2(ballData.y - containerCenterY, ballData.x - containerCenterX);
      ballData.x = containerCenterX + (radius - ballData.size / 2) * Math.cos(angle);
      ballData.y = containerCenterY + (radius - ballData.size / 2) * Math.sin(angle);
      ballData.speedX = -ballData.speedX;
      ballData.speedY = -ballData.speedY;
    }
  
   // 鼠标长按成长小球(达到存活尺寸前)
  if ( ballGrowing && ballData.size<ballData.aliveSize){
  let incrValue=0.8;
  ballData.size = Math.min(ballData.size +incrValue,  ballData.maxSize); 
  ballData.fontSize = Math.min(ballData.fontSize  + incrValue/5,  ballData.maxSize/5); 
  ballData.lineHeight = Math.min(ballData.lineHeight + incrValue,  ballData.maxSize); 
  }

  // 鼠标长按成长小球（达到存活尺寸后）
  if (ballGrowing&&ballData.size>=ballData.aliveSize){
    ballData.alive=true;
    let incrValue=0.4;
    ballData.size = Math.min(ballData.size +incrValue,  ballData.maxSize); 
    ballData.fontSize = Math.min(ballData.fontSize  + incrValue/5,  ballData.maxSize/5); 
    ballData.lineHeight = Math.min(ballData.lineHeight + incrValue,  ballData.maxSize); 
    }

  //中途松开会取消生成，并移除该球
  else if(!ballGrowing&&ballData.size<ballData.aliveSize&&!ballData.decreasedId){
    ballData.decreasedId = true; // 标记为已经减少过
    ballData.element.style.animation = "disappearAnimation 0.5s ease-out forwards";
    setTimeout(() => {
    nextBallId--;//减少id如果创造失败
    ballData.alive=false;
    ballData.element.remove();  // 移除球的DOM元素
    balls.delete(ballId);
    updateAliveCount();
    }, 310);
  }
  ballData.element.style.width = ballData.size + "px";
  ballData.element.style.height = ballData.size + "px";
  ballData.element.style.fontSize = ballData.fontSize + "px"; // 更新文字大小
  ballData.element.style.lineHeight = ballData.lineHeight + "px"; // 更新行高

  ballData.element.style.left = ballData.x - ballData.size / 2 + "px";
  ballData.element.style.top = ballData.y - ballData.size / 2 + "px";



    //球球相撞
    balls.forEach((otherBall, otherBallId) => {
      if (ballId < otherBallId) { // 注意这里的修改
        const dx = ballData.x - otherBall.x;
        const dy = ballData.y - otherBall.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (ballData.alive && otherBall.alive && distance <= ballData.size / 2 + otherBall.size / 2) {
            // Balls collide, update speeds
            const tempSpeedX = ballData.speedX;
            const tempSpeedY = ballData.speedY;
            ballData.speedX = otherBall.speedX;
            ballData.speedY = otherBall.speedY;
            otherBall.speedX = tempSpeedX;
            otherBall.speedY = tempSpeedY;

            // Move the balls apart
            const angle = Math.atan2(dy, dx);
            const overlap = (ballData.size / 2 + otherBall.size / 2) - distance;
            const moveX = Math.cos(angle) * overlap / 2;
            const moveY = Math.sin(angle) * overlap / 2;

            ballData.x += moveX;
            ballData.y += moveY;
            otherBall.x -= moveX;
            otherBall.y -= moveY;
  
    
  }
 }
});

    
    //防止球的速度变成0后重新赋值   
    if(ballData.speedX === 0&&ballData.speedY===0) {
      let x=0.7;
      ballData.speedX =  Math.random() * 2 * x - x;
      ballData.speedY =  Math.random() * 2 * x - x;
     }
    
    
    //抉择事件
    choosableStory();
    //离开事件
    leftStory();
    //变化事件
    changeLook();
    changeState();
    //更新球个数
    updateAliveCount();
    //更新点击数
    updateClickCount();

    //更新FinalMeet
    previousFinalMeet = false;
    checkFinalMeet();
    afterFinalMeet();


    requestAnimationFrame(() => animateBall(ballId));
    
  }

