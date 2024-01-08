//选择事件
function choosableStory() {
  //————————————————————————————————————————————————————————————————————————————————————————————————————————
  //第二个球（童年的第一个朋友）
    //  if(balls.has(1)) {
    //     const TCBallData = balls.get(1);
    //     if(TCBallData.size > (TCBallData.aliveSize-1) && !TCBallData.eventTriggeredChoose && TCBallData.content!="Max") {
         
    //      setTimeout(() => {
    //         if(Math.random()<0.6){
    //         addEventToStory(1,TCBallData.content+" wants to invite you go for an adventure in the woods!",
    //         TCBallData.content+"  became very happy for being with you.","",1000);
    //         }
    //         else
    //         {
    //         addEventToStory(1,TCBallData.content+" wants to play tricks on the grumpy old man across street with you!",
    //         TCBallData.content+"  became very happy for being with you.","",1000);
    //         }
    //       }, 4000);//4s后引出剧情
    //       TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
    //     }
    //   }
      
   //——————————————————————————————————————————————————————————————————————————————————————————————————————————
//第三个球（父母的情人）
if(balls.has(2)) {
  const TCBallData = balls.get(2);
  if(age>17&&!TCBallData.eventTriggered) {
    if(TCBallData.content==="Dimitr"){
    addEventToStory(2,"Your mother wants to marray "+TCBallData.content+" as her husband. And she wonders your willing.",
    TCBallData.content+" has became your father.",
    "You never see "+TCBallData.content+" again.",1000);
    }
    else if(TCBallData.content==="Eva")
    {addEventToStory(2,"Your father wants to marray "+TCBallData.content+" as his wife. And he wonders your willing.",
    TCBallData.content+" has became your mother.",
    "You never see "+TCBallData.content+" again.",1000);
    }
    TCBallData.eventTriggered = true; 
  }
  }

   
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第四个球（童年的第一个奇遇）
     if(balls.has(3)) {
      const TCBallData = balls.get(3);
      if(TCBallData.size > (TCBallData.aliveSize-1) && !TCBallData.eventTriggeredChoose) {
       setTimeout(() => {
          if(TCBallData.content==="Rabbit")
          {
          addEventToStory(3,"Do you want to catch that "+TCBallData.content+"?",
          "You tripped and hit your head, "+TCBallData.content+" ran away.",
          TCBallData.content+" ran away.",1000);
          }
          else if(TCBallData.content==="Raj")
          {
          addEventToStory(3,TCBallData.content+" invites you to assist him in discovering aliens, he needs \
          you to steal your parent's car keys, that he can convert car into an alien signal receiver!",
          TCBallData.content+" disappeared with your parent's car.",
          TCBallData.content+" disappeared.",1000);
          }
        }, 3000);//3s后引出剧情
        TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
      }
    }
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//第五个球（童年的第一场爱情）
        if(balls.has(4)) {
          const TCBallData = balls.get(4);
          if(TCBallData.size > (TCBallData.aliveSize-1) && !TCBallData.eventTriggeredChoose) {
           setTimeout(() => {
              if(TCBallData.content==="Lisa")
              {
              addEventToStory(4,TCBallData.content+" is looking for one forever relationship with you! What you say?",
              TCBallData.content+" has become your girlfriend.",
              TCBallData.content+" tearfully left away.",1000);
              }
              else if(TCBallData.content==="Lee")
              {
                addEventToStory(4,TCBallData.content+" is looking for one forever relationship with you! What you say?",
                TCBallData.content+" has become your boyfriend.",
                TCBallData.content+" sadly left away.",1000);
              }
            }, 3000);//3s后引出剧情
            TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
          }
        }
//————————————————————————————————————————————————————————————————————————————————————————————————————————
//从此处开始故事分流
   if(storyLine===1){addWaiterChoose();}
   else if (storyLine===2){addJournalistChoose();}
   else if (storyLine===3){addSoldierChoose();}
}




//离开事件(+选择后果)--------------------------------------------------------------------------------------------------
function leftStory() {
//———————————————————————————————————————————————————————————————————————————————————————————————————————— 
 //第一个球（父母的离开）
 if(balls.has(0)) {
  const TLBallData = balls.get(0);
  if(age>65&& !TLBallData.eventTriggeredLeft) {
   addLeaveToStory("Your "+TLBallData.content+"  left in a peacful afternoon.");
   setTimeout(() => {killBall(TLBallData,0);}, 3000);//3s后消失
     TLBallData.eventTriggeredLeft = true; 
  }
}
 //———————————————————————————————————————————————————————————————————————————————————————————————————————— 
 //第二个球（童年的第一个朋友）
   if(balls.has(1)) {
     const TLBallData = balls.get(1);
     if(TLBallData.size >(TLBallData.maxSize-1) && 
     !TLBallData.eventTriggeredLeft && TLBallData.content!="Max") {
      addLeaveToStory(TLBallData.content+"  moved to another city with parents.");
      setTimeout(() => {
        killBall(TLBallData,1);
      }, 3000);//3s后消失
        TLBallData.eventTriggeredLeft = true; 
     }
     if(age>30 && !TLBallData.eventTriggeredLeft && TLBallData.content==="Max") {
      addLeaveToStory(TLBallData.content+" went to doggy heaven because of age.");
      setTimeout(() => {killBall(TLBallData,1);}, 3000);//3s后消失
        TLBallData.eventTriggeredLeft = true; 
     }
   }
//———————————————————————————————————————————————————————————————————————————————————————————————————————— 
 //第三个球（父母的情人）
 if(balls.has(2)) {
  const TLBallData = balls.get(2);
  if(age>68&& !TLBallData.eventTriggeredLeft) {
    if(TLBallData.content==="Father"){addLeaveToStory("Your "+TLBallData.content+"  left for your Mom in a rainy morning.");}
    else if(TLBallData.content==="Mother"){addLeaveToStory("Your "+TLBallData.content+"  left for your Father in a rainy morning.");}
    setTimeout(() => {killBall(TLBallData,2);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true; 
   }
}
//———————————————————————————————————————————————————————————————————————————————————————————————————————— 
 //第四个球（童年的第一个奇遇）
 if(balls.has(3)) {
   const TLBallData = balls.get(3);
   if(TLBallData.choiceMade!=""&& !TLBallData.eventTriggeredLeft) {
      setTimeout(() => {
      killBall(TLBallData,3);
   }, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true; 
   }
 }
//———————————————————————————————————————————————————————————————————————————————————————————————————————— 
 //第五个球（童年的第一个爱情）
 if(balls.has(4)) {
  const TLBallData = balls.get(4);
  //同意的话inLove
  if((TLBallData.choiceMade==="Y")&& !TLBallData.eventTriggeredInLove) {
    inLove=true;
    TLBallData.eventTriggeredInLove = true; 
  }
  //拒绝或犹豫会马上离开
  if((TLBallData.choiceMade==="N"||TLBallData.choiceMade==="Miss")&& !TLBallData.eventTriggeredLeft) {
  setTimeout(() => {killBall(TLBallData,4);}, 3000);//3s后消失
  TLBallData.eventTriggeredLeft = true; 
  }
  //同意后19岁可能会离开
  if((age-3)>19 && !TLBallData.eventTriggeredLeft){
    if(Math.random()<0.1){
    addLeaveToStory(TLBallData.content+" left you for some ambiguous reason.");
    setTimeout(() => { killBall(TLBallData,4);}, 3000);
    inLove=false;
    TLBallData.eventTriggeredLeft = true;
    }
   else if(Math.random()<0.3){
   addLeaveToStory(TLBallData.content+" left you for too recklessly at \"forever\".");
   setTimeout(() => { killBall(TLBallData,4);}, 3000);
   inLove=false;
   TLBallData.eventTriggeredLeft = true;
   }
    
  }

    //22岁可能会离开
   if(age>22 && !TLBallData.eventTriggeredLeft){
     if(Math.random()<0.5){
      addLeaveToStory(TLBallData.content+" left you for too recklessly at \"forever\".");
      inLove=false;
      setTimeout(() => {killBall(TLBallData,4);}, 3000);
      TLBallData.eventTriggeredLeft = true; 
     }
    }
}
//———————————————————————————————————————————————————————————————————————————————————————————————————————— 
 //第六个球（童年的第一个困难）
 if(balls.has(5)) {
  const TLBallData = balls.get(5);
  if(TLBallData.size >(TLBallData.maxSize-1)&& !TLBallData.eventTriggeredLeft) {
    if(TLBallData.content==="Sophia"){
    addMessageToStory(TLBallData.content+" cured your stomach problem.");
    }
    else if (TLBallData.content==="Ming"){
    addMessageToStory(TLBallData.content+" fixed your dental problem.");
    }
    else if (TLBallData.content==="Aleja"){
      addMessageToStory(TLBallData.content+" decomposed the virus in your body.");
      }

     setTimeout(() => {
     killBall(TLBallData,5);
  }, 3000);//3s后消失
     TLBallData.eventTriggeredLeft = true; 
  }
}

//———————————————————————————————————————————————————————————————————————————————————————————————————————— 
//从此处开始故事分流
if(storyLine===1){addWaiterLeft();}
else if (storyLine===2){addJournalistLeft();}
else if (storyLine===3){addSoldierLeft();}
  
  






}






