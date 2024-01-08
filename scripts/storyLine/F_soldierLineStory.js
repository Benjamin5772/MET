//(选择故事)------------------------------------------------------------------------------------------------
function addSoldierChoose(){
    //第八个球（Nanan+）
      if(balls.has(7)) {
          const TCBallData = balls.get(7);
          if(TCBallData.size>100 && !TCBallData.eventTriggeredChoose) {
           setTimeout(() => {
              addEventToStory(7,TCBallData.content+" hopes to get a pen and some paper \
              to write down some memories and thoughts. But looking into his eyes, you \
               knew what he attempt to do. Are you willing to provide tools to him?",
               "A few days later, "+TCBallData.content+" disappeared. Everyone was surprised at how he escaped, except you.",
               TCBallData.content+" lowered his head in disappointment.",1000);
            }, 1000);//3s后引出剧情
            TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
          }
        }
      
    //第十一个球（堡垒+）
      if(balls.has(10)) {
        const TCBallData = balls.get(10);
        if(TCBallData.size>(TCBallData.aliveSize-1) && !TCBallData.eventTriggeredChoose) {
         if(deal===1&&balls.has(9)){
         setTimeout(() => {
            addEventToStory(10," Do you support him?",

            balls.get(9).content+" was killed in the firefight. You narrowly escaped \
             and brought back enemy's confidential combat information.",

             "You reported the surveillance outpost, but by the time the \
             operation team arrived, the outpost was already abandoned.",1000);
          }, 3000);
        }

        else if(deal===0&&balls.has(9)){
          setTimeout(() => {
             addEventToStory(10," Do you support her?",

             balls.get(9).content+" was killed in the firefight. You narrowly escaped \
             and brought back enemy's confidential combat information.",

             "You reported the surveillance outpost, but by the time the \
             operation team arrived, the outpost was already abandoned.",1000);
           }, 3000);
         }
          TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
        }
      }

   //第十七个球（劫匪球+）
   if(balls.has(16)) {
    const TCBallData = balls.get(16);
    if(TCBallData.size>(TCBallData.aliveSize-1)&& !TCBallData.eventTriggeredChoose) {
     setTimeout(() => {
        addEventToStory(16,"Do you want to chase after him?",

         "In the pursuit, you tackle the "+TCBallData.content+" to the ground, his loot \
         scatters across the street. In anger, he shoots at you, you \
         get injured and faint on the street. But you bought time for the \
         police to successfully apprehend him.",

         "You brush past the "+TCBallData.content+", and he escaped.",1000);
      }, 3000);
      TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
    }
  }

   //第二十四个球（ET+）
     if(balls.has(23)&&ETLine) {
      const TCBallData = balls.get(23);
      if(TCBallData.size>(TCBallData.aliveSize-1)&& !TCBallData.eventTriggeredChoose) {
       setTimeout(() => {
          addEventToStory(23,TCBallData.content+" pointed out that you hold the key to his spaceship, \
          which looks like a stone. And if he can't return to his home planet as planned, \
          his fellow beings would send an army to Earth. After words, he revealed the glowing \
          tentacles on his head. What you do?",
  
           "You handed over the stone to "+TCBallData.content+", a thought flashed through your mind: \
           Perhaps the meet between people is enough.",
  
           "You didn't hand over the stone, a thought flashed through your mind: \
           Perhaps it's time for us to meet something different than self.",1000);
        }, 3000);
        TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
        // 结局15
        endType=15;
      }
    }
  




        
}

//(离去故事--------------------------------------------------------------------------------------------------
function addSoldierLeft(){
  //第七球战友调离
  if(balls.has(6)) {
    const TLBallData = balls.get(6);
    if(age>25&& !TLBallData.eventTriggeredLeft) {
      addMessageToStory(TLBallData.content+" was transferred to the air force unit."); 
      setTimeout(() => {killBall(TLBallData,6);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true; 
      }

  }

  //第八球Nanan出逃
  if(balls.has(7)) {
      const TLBallData = balls.get(7);
      if(TLBallData.choiceMade==="Y"&& !TLBallData.eventTriggeredLeft) {
        ETLine=true;
        setTimeout(() => {killBall(TLBallData,7);}, 3000);//3s后消失
        TLBallData.eventTriggeredLeft = true;
        }
  }

  //第九球医生出逃
  // if(balls.has(8)) {
  //   const TLBallData = balls.get(8);
  //   if(TLBallData.choiceMade==="Y"&& !TLBallData.eventTriggeredLeft) {
  //     addMessageToStory("One day"+TLBallData.content);
  //     setTimeout(() => {killBall(TLBallData,8);}, 3000);//3s后消失
  //     TLBallData.eventTriggeredLeft = true;
  //   }
  // }

  //第十一球堡垒牺牲
    if(balls.has(10)&&balls.has(9)) {
      const TLBallData = balls.get(10);
      const TLBallData1 = balls.get(9);
      if(TLBallData.choiceMade==="Y"&&!TLBallData.eventTriggeredLeft)
      {
      //移除爱人
      setTimeout(() => {killBall(TLBallData1,9);}, 3000);
      //移除堡垒
      setTimeout(() => {killBall(TLBallData,10);}, 3000);
      //启动功勋
      lastClick=1201;
      inLove=false;
      TLBallData.eventTriggeredLeft = true;
      }
        
      else if((TLBallData.choiceMade==="N"||TLBallData.choiceMade==="Miss")&&!TLBallData.eventTriggeredLeft)
      {
      setTimeout(() => {killBall(TLBallData,10);}, 3000);
      inLove=true;
      TLBallData.eventTriggeredLeft = true;
      }
       
      
  
    }
  //第十四球出逃农夫
  if(balls.has(13)) {
    const TLBallData = balls.get(13);
    const TLBallData1 = balls.get(12);
    if(TLBallData.content==="farmer"&& !TLBallData.eventTriggeredLeft) {
      setTimeout(() => {addMessageToStory("You never see "+TLBallData1.content+" again.");}, 1500);
      setTimeout(() => {killBall(TLBallData1,12);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true;
    }
  }
  //第十五球胜利
  if(balls.has(14)) {
    const TLBallData = balls.get(14);
    if (balls.has(13)&&balls.has(12)&& !TLBallData.eventTriggeredLeft){
      const TLBallData1 = balls.get(13);
      const TLBallData2 = balls.get(12);
      setTimeout(() => {addMessageToStory("You never see "+TLBallData1.content+" again.");}, 1500);
      setTimeout(() => {addMessageToStory("You never see "+TLBallData2.content+" again.");}, 1500);
      setTimeout(() => {killBall(TLBallData1,13);}, 3000);//3s后消失
      setTimeout(() => {killBall(TLBallData2,12);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true;
    }
    if(balls.has(13)&& !TLBallData.eventTriggeredLeft){
      const TLBallData3 = balls.get(13);
      setTimeout(() => {addMessageToStory("You never see "+TLBallData3.content+" again.");}, 1500);
      setTimeout(() => {killBall(TLBallData3,13);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true;
    }
   
  }
   //第十六球科学家消失出逃
   if(balls.has(15)) {
    const TLBallData = balls.get(15);
    if(TLBallData.size>150&& !TLBallData.eventTriggeredLeft) {
      addMessageToStory("One day "+TLBallData.content+" handed a stone to you and told \
      you not to give it out to anyone until he back. However, you never \
      saw "+TLBallData.content+" since then.");
      setTimeout(() => {killBall(TLBallData,15);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true;
    }
  }
  //第十七球劫匪出逃
  if(balls.has(16)) {
      const TLBallData = balls.get(16);
        if((TLBallData.choiceMade==="N"||TLBallData.choiceMade==="Miss")&&!TLBallData.eventTriggeredLeft)
        {
        setTimeout(() => {killBall(TLBallData,16);}, 3000);//3s后消失
        TLBallData.eventTriggeredLeft = true;
        }

        else if(TLBallData.choiceMade==="Y"&&!TLBallData.eventTriggeredLeft)
        {
          addMessageToStory("The shadow of being shot remains in your head."); 
          TLBallData.eventTriggeredLeft = true;
        }
        
      
      if(TLBallData.size>(TLBallData.maxSize-1)&&!TLBallData.eventTriggeredLove) {
        addMessageToStory("You have gradually forgotten the trauma of gunshot."); 
        setTimeout(() => {killBall(TLBallData,16);}, 3000);//3s后消失
        TLBallData.eventTriggeredLove = true;
      }
  }
       
} 

//(转换外貌)-------------------------------------------------------------------------------------------------
function addSoldierLook(){
    
  //第十个球（士兵爱情）
  if(balls.has(9)) {
    const TLBallData= balls.get(9);
    if(TLBallData.size>(TLBallData.aliveSize-1)&&!TLBallData.eventTriggeredInLove) {
      if(TLBallData.content==="Nina"||TLBallData.content==="Peter"){
        inLove=true;
      }
      TLBallData.eventTriggeredInLove= true; 
      
   }
    if(TLBallData.size>(TLBallData.maxSize-1)&&!TLBallData.eventTriggeredLove) {
        if(TLBallData.content==="Nina"||TLBallData.content==="Peter"){
        TLBallData.element.style.color = "black";
        inLove=true;
        TLBallData.eventTriggeredLove= true; 
        }
    }

    if(age>46&&!TLBallData.eventTriggeredLook) {
        if(TLBallData.content==="Nina"){
          addMessageToStory("You married "+TLBallData.content);
          TLBallData.content="Wife";
          TLBallData.element.textContent = "Wife";
        }
        else if(TLBallData.content==="Peter"){
          addMessageToStory("You married "+TLBallData.content);
          TLBallData.content="Husband";
          TLBallData.element.textContent = "Husband";
        }
        TLBallData.eventTriggeredLook = true; 
      }

    }
}
        

//(转换状态)------------------------------------------------------------------------------------------------------
function addSoldierState(){
    
    
        
}