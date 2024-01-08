 // 创建球代码
function createBall(initialX, initialY) {

  // 打印分配给小球的ID
  console.log("Assigned ID to the ball:", nextBallId);
  
  
// 初始化球
  const ball = document.createElement("div");
  ball.className = "ball";
  if(!eraserActive){
  gameContainer.appendChild(ball);
  }
   // 初始化球的属性
   const ballData = {
    element:ball,
    size: 20,
    fontSize: 5,
    lineHeight: 20,
    x: initialX,
    y: initialY,
    speedX: getRandomSpeed(),
    speedY: getRandomSpeed(),
    color:getRandomColor(),
    content:"",
    nameList:"",
    aliveSize: 50,
    maxSize: 400,
    movable: true,//是否可被擦掉
    type: 1,//球种
    created: false,//标记球是否成功创建
    choiceMade:"",//是否做出选择(Y,N)
    alive:false,//球是否存活
    storyContent:"",//故事内容
    decreasedId:false,//标记是否ballId减少过
  };

// 故事版（storyBroad）
switch (clickCount) {
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第一次点击(父母)
  case 0:
      //概率及叙事
      ballData.content = Math.random() < 0.7? "Emily" : "Sun";//7:3
      lastClick = ballData.content === "Emily" ? 0 : 1;//影响第二次点击
      if(ballData.content==="Emily"){
        ballData.nameList="mother";
        ballData.storyContent = Math.round(birthday + age) + ", you met your mother "+ballData.content +
      " in  Littleroot city hospital at the first eyes you come to this world,\
      she looked at you smiled like sun, while you cried like a rainstorm." 
      }
      else if(ballData.content==="Sun")
      {
        ballData.nameList="father";
        ballData.storyContent = Math.round(birthday + age) + ", you met your father "+ballData.content +
        " in  Littleroot city hospital at the first eyes you come to this world,\
        your biological parents just left you, while he gently lifted you up with a pair of mighty hands."
      }

      //保证不消耗岁月生成第一个球
      // let birthSize = 60;
      // ballData.size = birthSize;
      // ballData.fontSize=birthSize/5;
      // ballData.lineHeight=birthSize;
      // ball.style.width = birthSize + 'px'; 
      // ball.style.height = birthSize + 'px';
      // ball.style.fontSize = (birthSize /5) + 'px';
      // ball.style.lineHeight = birthSize+ 'px';
    
      //特性设定
      ballData.type = 1;
      ballData.maxSize = 70; // 到70时变化，获得特性“不变”
      break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第二次点击（童年的第一个朋友）
  case 1:
     //概率及叙事
     let StoryProbability=Math.random() ;
     //母亲线
     if(lastClick ===0 && StoryProbability<0.3){
      ballData.content = "Max";
      ballData.nameList="puppy";
      ballData.storyContent = Math.round(age) + " years old, you met the puppy "+ballData.content+
      ", he crawled out of the box. You hugged him excitedly, his warm little head wriggled in your embrace, trying \
      to lick your ear with pink tiny tongue.";
     }
     else if(lastClick ===0 && StoryProbability>0.3&& StoryProbability<0.6){
      ballData.content = "Olga";
      ballData.nameList="the girl next door";
      ballData.storyContent = Math.round(age) + " years old, you met the girl next door "+ballData.content+
      " and became friends with her.";
     }
     else if(lastClick ===0 && StoryProbability>0.6){
      ballData.content = "Ethan";
      ballData.nameList="the boy next door";
      ballData.storyContent = Math.round(age) + " years old, you met the boy next door "+ballData.content+
      " and became friends with him.";
     }
      //父亲线
      if(lastClick === 1&& StoryProbability<1.1){
        ballData.content = "Hiroshi";
        ballData.nameList="the boy next door";
        ballData.storyContent = Math.round(age) + " years old, you met the boy next door "+ballData.content+
        " and became friends with him.";
      }
      //特性设定
      ballData.aliveSize=50;//相遇花费
      ballData.type =2;
      ballData.maxSize = 90; 
      break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第三次点击 （父母的爱情）
  case 2:
     //概率及叙事
     //母亲线
     if(lastClick ===0 && Math.random()<1.1){
      ballData.content = "Dimitr";
      ballData.nameList="mother's colleague";
      ballData.storyContent = Math.round(age) + " years old, you met your mother's colleague "+ballData.content+
      ", who occasionally pay visits to your house.";
     }
      //父亲线
      if(lastClick === 1 && Math.random()<1.1){
        ballData.content = "Eva";
        ballData.nameList="father's colleague";
        ballData.storyContent = Math.round(age) + " years old, you met your father's colleague "+ballData.content+
        ", who occasionally pay visits to your house.";
      }
      //特性设定
      ballData.aliveSize=50;//相遇花费
      ballData.type =1;
      ballData.maxSize=100;
      break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第四次点击  
  case 3:
    //概率及叙事
    if( Math.random()<0.5){
      ballData.content = "Rabbit";
      ballData.nameList="???";
      ballData.storyContent = Math.round(age) + " years old, you met a strange looking "+ballData.content+
     "!";
    }
    else{
      ballData.content = "Raj";
      ballData.nameList="a strange man";
      ballData.storyContent = Math.round(age) + " years old, you met a strange man "+ballData.content+
     " with an antenna helmet on his head!";
    }
    
     //特性设定
     ballData.aliveSize=50;//相遇花费
     ballData.type =5;
    
     break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第五次点击  
  case 4:
    //概率及叙事
    if( Math.random()<0.5){
      ballData.content = "Lisa";
      ballData.nameList = "she likes you";
      ballData.storyContent =Math.round(age) + " years old, you met "+ballData.content+
     ", your schoolmate who expressed her mighty feeling on your charm.";
    }
    else{
      ballData.content = "Lee";
      ballData.nameList = "he likes you";
      ballData.storyContent =Math.round(age) + " years old, you met "+ballData.content+
    ", your schoolmate who expressed his mighty feeling on your charm.";
    }
    
     //特性设定
     ballData.aliveSize=50;//相遇花费
     ballData.type =3;

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第六次点击  
case 5:
 //概率及叙事
     let StoryProbability1=Math.random() ;
    if( StoryProbability1<0.4){
      ballData.content = "Sophia";
      ballData.nameList = "mediciner";
      ballData.storyContent =Math.round(age) + " years old, you met mediciner "+ballData.content+
     ", who discovered your long-term stomach condition, you have to come to \
     her for treatment medication at begin of every season.";
    }
    else if(StoryProbability1<0.8){
      ballData.content = "Ming";
      ballData.nameList = "doctor";
      ballData.storyContent =Math.round(age) + " years old, you met doctor "+ballData.content+
    ", who discovered the pitfall in your teeth, his clinic \
    has become a place for you to undergo dental correction.";
    }else if(StoryProbability1<1){
    ballData.content = "Aleja";
    ballData.nameList = "doctor";
      ballData.storyContent =Math.round(age) + " years old, you met doctor "+ballData.content+
    ", who discovered an unknown virus in your body. Although this virus \
    has not been activated, you need to come to the hospital for regular \
    examination every year.";
    }
    
     //特性设定
     ballData.aliveSize=60;//相遇花费
     ballData.maxSize=150;
     ballData.type =4;
     //在这个球生成后确定故事线
     let randomValue = Math.random();
     if (randomValue < 0.35) {
        storyLine = 1;
     } else if (randomValue < 0.7) {
        storyLine = 2;
     } else {
        storyLine = 3;
     }

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第七次点击  
case 6:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,0,60);}
    else if (storyLine===2){addJournalistrStory(ballData,0,60);}
    else if (storyLine===3){addSoldierStory(ballData,0,60);}
    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第八次点击  
case 7:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,1,50);}
    else if (storyLine===2){addJournalistrStory(ballData,1,50);}
    else if (storyLine===3){addSoldierStory(ballData,1,50);}
    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第九次点击  
case 8:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,2,50);}
    else if (storyLine===2){addJournalistrStory(ballData,2,50);}
    else if (storyLine===3){addSoldierStory(ballData,2,50);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十次点击  
case 9:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,3,50);}
    else if (storyLine===2){addJournalistrStory(ballData,3,50);}
    else if (storyLine===3){addSoldierStory(ballData,3,50);}
    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十一次点击  
case 10:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,4,60);}
    else if (storyLine===2){addJournalistrStory(ballData,4,60);}
    else if (storyLine===3){addSoldierStory(ballData,4,60);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十二次点击  
case 11:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,5,60);}
    else if (storyLine===2){addJournalistrStory(ballData,5,60);}
    else if (storyLine===3){addSoldierStory(ballData,5,60);}
    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十三次点击  
case 12:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,6,60);}
    else if (storyLine===2){addJournalistrStory(ballData,6,60);}
    else if (storyLine===3){addSoldierStory(ballData,6,60);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十四次点击  
case 13:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,7,60);}
    else if (storyLine===2){addJournalistrStory(ballData,7,60);}
    else if (storyLine===3){addSoldierStory(ballData,7,60);}
    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十五次点击  
case 14:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,8,60);}
    else if (storyLine===2){addJournalistrStory(ballData,8,60);}
    else if (storyLine===3){addSoldierStory(ballData,8,60);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十六次点击  
case 15:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,9,60);}
    else if (storyLine===2){addJournalistrStory(ballData,9,60);}
    else if (storyLine===3){addSoldierStory(ballData,9,60);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十七次点击  
case 16:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,10,60);}
    else if (storyLine===2){addJournalistrStory(ballData,10,60);}
    else if (storyLine===3){addSoldierStory(ballData,10,60);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十八次点击  
case 17:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,11,70);}
    else if (storyLine===2){addJournalistrStory(ballData,11,70);}
    else if (storyLine===3){addSoldierStory(ballData,11,70);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十九次点击  
case 18:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,12,70);}
    else if (storyLine===2){addJournalistrStory(ballData,12,70);}
    else if (storyLine===3){addSoldierStory(ballData,12,70);}

    break;
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第二十次点击  
case 19:
    //概率及叙事
    if(storyLine===1){addWaiterStory(ballData,13,70);}
    else if (storyLine===2){addJournalistrStory(ballData,13,70);}
    else if (storyLine===3){addSoldierStory(ballData,13,70);}

    break;
// // ————————————————————————————————————————————————————————————————————————————————————————————————————————
// 后面的点击 
case 20:
  addQuickStory(ballData,4.5, 0, 0, 4, 1.5,50);
  break; 
case 21:
  addQuickStory(ballData,4.5, 0, 0, 4, 1.5,50);
  break;
case 22:
  addQuickStory(ballData,4.5, 0, 0, 4, 1.5,50);
  break; 
//第24球结局15（遇见群星） 
case 23:
  if(ETLine)
  {addSoldierStory(ballData,14,50);}
  else
  addQuickStory(ballData,4.5, 0, 0, 4, 1.5,50);
  break; 

  default:
    addQuickStory(ballData,4.5, 0, 0, 4, 1.5,50);
    
}

 
  // 获取球的内容和颜色
   ball.textContent = ballData.content;
   ball.style.backgroundColor = ballData.color;

  balls.set(nextBallId, ballData);  
  animateBall(nextBallId);  
  nextBallId++;//切记要用打印找到问题，debug真的闹心

  // 打印deal
  console.log("deal:", deal );
  // 打印inlove
  console.log("inlove:", inLove );
   // 打印finalMeet
   // console.log("f:", finalMeet);
}


function getRandomSpeed() {
  let x = 0.7;
  let speed = Math.random() * 2 * x - x;
  while (speed === 0) {
      speed = Math.random() * 2 * x - x;
  }
  return speed;
}

function getRandomColor() {
  const colors = ["#D74A7F", "#0ACC1E","#E28800","#BE0FDB","#03B4CC","#FF3E3E","#FFC736","#FF7A5C"];
  return colors[Math.floor(Math.random() * colors.length)];
}

