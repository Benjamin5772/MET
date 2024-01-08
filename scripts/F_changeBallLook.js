//改变球的外貌
function changeLook(){
//——————————————————————————————————————————————————————————————————————————————————————————————————————————
//第一个球
if(balls.has(0)) {
    const TLBallData = balls.get(0);
    if(TLBallData.size >=TLBallData.maxSize  && !TLBallData.eventTriggeredLook) {
        if(TLBallData.content==="Emily")
        {
          TLBallData.content= "Mom";
          TLBallData.element.textContent = "Mom"; 
          TLBallData.element.style.color = "black";
        }
        else if(TLBallData.content==="Sun")
        {
          TLBallData.content= "Father";
          TLBallData.element.textContent = "Father"; 
          TLBallData.element.style.color = "black";
        }
        TLBallData.eventTriggeredLook = true;  
    }
  }

//——————————————————————————————————————————————————————————————————————————————————————————————————————————
//第二个球（仅狗子）
if(balls.has(1)) {
  const TLBallData = balls.get(1);
  if(TLBallData.size >=TLBallData.maxSize &&TLBallData.content==="Max" &&!TLBallData.eventTriggeredLook) {
      if(TLBallData.content==="Max")
      {
        TLBallData.element.style.color = "black";
      }
      TLBallData.eventTriggeredLook = true; 
  }
}
//——————————————————————————————————————————————————————————————————————————————————————————————————————————
//第三个球（父母的爱情）
if(balls.has(2)) {
  const TLBallData= balls.get(2);
  if(!TLBallData.eventTriggeredLook) {
    if(TLBallData.choiceMade==="Y"||TLBallData.choiceMade==="Miss")
    {
      if(TLBallData.content==="Eva"){
      TLBallData.content="Mother";
      TLBallData.element.textContent = "Mother";}
      else if(TLBallData.content==="Dimitr"){
      TLBallData.content="Father";
      TLBallData.element.textContent="Father";}

      TLBallData.element.style.color = "black";

      TLBallData.eventTriggeredLook = true; 
    }
    else if(TLBallData.choiceMade==="N"){
    setTimeout(() => {
      killBall(TLBallData,2);
    }, 3000);
    TLBallData.eventTriggeredLook = true; 
    }
  
  }
}
//——————————————————————————————————————————————————————————————————————————————————————————————————————————
if(storyLine===1){addWaiterLook();}
else if (storyLine===2){addJournalistLook();}
else if (storyLine===3){addSoldierLook();}

}
//改变球的状态
function changeState(){
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第二个球（童年的第一个朋友）
if(balls.has(1)) {
  const TCBallData = balls.get(1);
  if(TCBallData.size >(TCBallData.aliveSize+5) && !TCBallData.eventTriggeredChoose && TCBallData.content!="Max") {
   addMessageToStory(TCBallData.content+"  became very happy for being with you.");
    TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
  }
}
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第五个球（童年的第一场爱情）
     if(balls.has(4)) {
      const TSBallData = balls.get(4);
      if(TSBallData.eventTriggeredChoose) {
          if(TSBallData.content==="Lisa")
          {
          //性别偏好确定
          if(TSBallData.choiceMade==="Y")
          deal=0;
          else deal=1;
          }
          else if(TSBallData.content==="Lee")
          {
          //性别偏好确定
          if(TSBallData.choiceMade==="Y")
          deal=1;
          else deal=0;
          }
        TSBallData.eventTriggeredChoose = true;
      }
    }
//——————————————————————————————————————————————————————————————————————————————————————————————————————————
if(storyLine===1){addWaiterState();}
else if (storyLine===2){addJournalistState();}
else if (storyLine===3){addSoldierState();}

}