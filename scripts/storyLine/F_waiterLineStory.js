//(选择故事)------------------------------------------------------------------------------------------------
function addWaiterChoose(){
//第八个球（马尔福线+）
if(balls.has(7)) {
    const TCBallData = balls.get(7);
    if(TCBallData.size>(TCBallData.maxSize-1) && !TCBallData.eventTriggeredChoose) {
     setTimeout(() => {
        if(TCBallData.content==="Malfoy")
        {
        addEventToStory(7,TCBallData.content+
          " want to give you a stone,\"It was a gift I gave to my \
          girlfriend on our first date. Years ago, she committed suicide \
          for mental issues, until her last breath, she held onto \
          this stone tightly. Now, I should probably let her go.\", said he. Do you accept this stone?",
         "You put the stone into tips box.",
         "You never see "+TCBallData.content+" since then.",1000);
        }
      }, 1000);//1s后引出剧情
      TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
    }
  }
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第九个球（咖啡馆爱情+）
if(balls.has(8)) {
const TCBallData = balls.get(8);
if(TCBallData.size>(TCBallData.maxSize-1)&& !TCBallData.eventTriggeredChoose) {
 setTimeout(() => {
    if(!inLove)
    {
    if(TCBallData.content==="Sawaki"){
    addEventToStory(8,"Unexpectedly, "+ TCBallData.content+
    " confessed to you in a romantic restaurant. Do you wish to pursue a relationship with him?",
     TCBallData.content+" has become your boyfriend.",
     "The atmosphere got a bit awkward for one moment, but you can still be friends.",
     1000);
    }
    else if(TCBallData.content==="Yen"){
      addEventToStory(8,"Unexpectedly, "+ TCBallData.content+
      " confessed to you in a romantic restaurant. Do you wish to pursue a relationship with her?",
       TCBallData.content+" has become your girlfriend.",
       "The atmosphere got a bit awkward for one moment, but you can still be friends.",
       1000);
    }

    }
  }, 1000);//1s后引出剧情
  TCBallData.eventTriggeredChoose = true; 
}
}

//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第十五个球（士兵抉择+）
if(balls.has(14)) {
const TCBallData = balls.get(14);
if(TCBallData.size>(TCBallData.aliveSize-1)&& !TCBallData.eventTriggeredChoose) {
  setTimeout(() => {
  addEventToStory(14,"Are you willing to give him some water and food?",
  TCBallData.content+" expressed his great gratitude and left.",
  TCBallData.content+" left for next place.",
  1000);
  }, 3000);//3s后引出剧情
  TCBallData.eventTriggeredChoose = true; 
}
}

}
//(离去故事)--------------------------------------------------------------------------------------------------
function addWaiterLeft(){
    //第八个球（马尔福离开+）
    if(balls.has(7)) {
    const TLBallData = balls.get(7);
    if(TLBallData.choiceMade==="Y"&&!TLBallData.eventTriggeredLeft) {
    lastClick=1102;//触发第11球第2条故事线
    addMessageToStory(TLBallData.content+" left with relief.");
    setTimeout(() => {killBall(TLBallData,7);}, 3000);//3s后消失
    
    TLBallData.eventTriggeredLeft = true; 
    }
    else if(TLBallData.choiceMade==="N"&&!TLBallData.eventTriggeredLeft){
    lastClick=1101;//触发第11球第1条故事线
    //addMessageToStory("You never see "+TLBallData.content+" since then."); 
    setTimeout(() => {killBall(TLBallData,7);}, 3000);//3s后消失
    TLBallData.eventTriggeredLeft = true; 
    }
    }
   //———————————————————————————————————————————————————————————————————————————————————————————————————————— 
   //第九个球（咖啡馆爱情离开+）
   if(balls.has(8)) {
    const TLBallData = balls.get(8);
    if(TLBallData.choiceMade==="Y"&&!TLBallData.eventTriggeredLeft) {
    inLove=true;
    TLBallData.eventTriggeredLeft = true; 
    }
    else if(TLBallData.choiceMade==="Miss"&&!TLBallData.eventTriggeredLeft){
    addMessageToStory("You never see "+TLBallData.content+" since then."); 
    setTimeout(() => {killBall(TLBallData,8);}, 3000);//3s后消失
    TLBallData.eventTriggeredLeft = true; 
    }
    }
  //———————————————————————————————————————————————————————————————————————————————————————————————————————— 
   //第十一个球（劫匪离开+）
   if(balls.has(10)) {
    const TLBallData = balls.get(10);
    const TLBallData1 = balls.get(8);//咖啡店爱情
    if(balls.has(8)){
    if(!TLBallData.eventTriggeredLeft) {
      if(inLove&&TLBallData.content==="Robber"&&TLBallData.size>210){
        addMessageToStory("The tenderness from "+TLBallData1.content+
        " healed your trauma from "+TLBallData.content+"."); 
        setTimeout(() => {killBall(TLBallData,10);}, 3000);//3s后消失
        TLBallData.eventTriggeredLeft = true; 
      }
    }
  
    }
    }
   //———————————————————————————————————————————————————————————————————————————————————————————————————————— 
   //第十二个球(令bard，manager离开）
   if(balls.has(11)) {
    const TLBallData = balls.get(11);
    const TLBallData1 = balls.get(9);
    const TLBallData2 = balls.get(10);
    if(!TLBallData.eventTriggeredLeft) {
        if(balls.has(9)){
        if(TLBallData1.content==="Bard"&&!TLBallData1.eventTriggeredLeft){
        addMessageToStory("You never see "+TLBallData1.content+" again since you no long work at shop.");
        setTimeout(() => {killBall(TLBallData1,9);}, 3000);//3s后消失
        TLBallData1.eventTriggeredLeft=true;
        }
        }
        if(balls.has(10)){
       if(TLBallData2.content==="Chris"&&!TLBallData2.eventTriggeredLeft){
        addMessageToStory("You never see "+TLBallData2.content+" again since you no long work at shop.");
        setTimeout(() => {killBall(TLBallData2,10);}, 3000);//3s后消失
        TLBallData2.eventTriggeredLeft=true;
        }
      TLBallData.eventTriggeredLeft=true;
      }
    }
  
    }
  //———————————————————————————————————————————————————————————————————————————————————————————————————————— 
  //第十五个球(士兵离开+）
  if(balls.has(14)) {
    const TLBallData = balls.get(14);
    if((TLBallData.choiceMade==="Y"||TLBallData.choiceMade==="N"||TLBallData.choiceMade==="Miss")&&!TLBallData.eventTriggeredLeft) {
      setTimeout(() => {killBall(TLBallData,14);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft=true;
      }
  
    }
  
  //———————————————————————————————————————————————————————————————————————————————————————————————————————— 
  //第十六个球(法院判决+）
  if(balls.has(15)) {
    const TLBallData = balls.get(15);
    const TLBallData1 = balls.get(13);
      if(TLBallData.content==="Sven"&&!TLBallData.eventTriggeredVerdict) {
      setTimeout(() => {
      addMessageToStory("In the court's verdict, due to the singularity\
      of the evidence and the very positive testimonies given\
      by all your friends, the judge decided to grant you probation.");
      }, 5000);//3s后出现
      TLBallData.eventTriggeredVerdict=true;
      }
  
  
      if(TLBallData.content==="Sven"&&TLBallData.size>120&&!TLBallData.eventTriggeredLeft) {
        if(balls.has(13)){
        if(TLBallData1.content==="Aiden"){
        setTimeout(() => {
        addMessageToStory("The police found the fact that your neighbor "+TLBallData1.content+
        " was the head of a theft gang. After successfully apprehending \
        him, he admitted to using your shop as a place to sell stolen \
        goods without your knowledge. Your innocence was subsequently \
        verified.");
        addMessageToStory("You never see "+TLBallData1.content+" again.");
        }, 1000);//1s后出现
  
        setTimeout(() => {killBall(TLBallData1,13);}, 3000);//3s后消失
        setTimeout(() => {killBall(TLBallData,15);}, 3000);//3s后消失
         // 结局2
        if(balls.has(8)) {endType=2;}
        
        }
  
        if(TLBallData1.content==="Chloe"){
          setTimeout(() => {
            addMessageToStory("The police found the fact that your neighbor "+TLBallData1.content+
            " was the head of a theft gang. After successfully apprehending \
            her, she admitted to using your shop as a place to sell stolen \
            goods without your knowledge. Your innocence was subsequently \
            verified.");
            addMessageToStory("You never see "+TLBallData1.content+" again.");
          }, 1000);//1s后出现
          
          setTimeout(() => {killBall(TLBallData1,13);}, 3000);//3s后消失
          setTimeout(() => {killBall(TLBallData,15);}, 3000);//3s后消失
          // 结局2
          if(balls.has(8)) {endType=2;}
        }
  
        TLBallData.eventTriggeredLeft=true;
        }
        //万一真相大白前忘掉了邻居
        else{
          setTimeout(() => {
            addMessageToStory("The police found the fact that your neighbor"+
            " was the head of a theft gang. After successfully apprehending \
            them, they admitted to using your shop as a place to sell stolen \
            goods without your knowledge. Your innocence was subsequently \
            verified.");
          }, 1000);//1s后出现
          setTimeout(() => {killBall(TLBallData,15);}, 3000);//3s后消失
          TLBallData.eventTriggeredLeft=true;
        }
      }
  
      if(TLBallData.content==="David"&&TLBallData.size>100&&!TLBallData.eventTriggeredLeft) {
      addMessageToStory("Your business has gradually improved, \
      and you declined the acquisition terms offered by "+TLBallData.content+".");
      setTimeout(() => {killBall(TLBallData,15);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft=true;
      }
  
    }
  

    
}
//(转换外貌)------------------------------------------------------------------------------------------------------
function addWaiterLook(){
//第九个球（咖啡店爱情）
if(balls.has(8)) {
    const TLBallData= balls.get(8);
    if(age>45&&!TLBallData.eventTriggeredLook) {
      if(TLBallData.content==="Yen"||TLBallData.content==="Sawaki")
      {
        if(TLBallData.content==="Yen"){
          addMessageToStory("You married "+TLBallData.content);
          TLBallData.content="Wife";
          TLBallData.element.textContent = "Wife";
        }
        else if(TLBallData.content==="Sawaki"){
          addMessageToStory("You married "+TLBallData.content);
          TLBallData.content="Husband";
          TLBallData.element.textContent = "Husband";
        }
        TLBallData.element.style.color = "black";
      }
      TLBallData.eventTriggeredLook = true; 
    }
  }
    
}
//(转换状态)------------------------------------------------------------------------------------------------------
function addWaiterState(){


    
}