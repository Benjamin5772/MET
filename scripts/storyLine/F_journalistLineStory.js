//(选择故事)------------------------------------------------------------------------------------------------
function addJournalistChoose(){
    //第十三个球（第一场报道+）
    if(balls.has(12)) {
        const TCBallData = balls.get(12);
        if(TCBallData.size>(TCBallData.aliveSize-1) && !TCBallData.eventTriggeredChoose) {
         setTimeout(() => {
            addEventToStory(12,"Perhaps you can tell his story in your way?",
             "You bid farewell to "+TCBallData.content+".",
             "You bid farewell to "+TCBallData.content+".",1000);
          }, 4000);//3s后引出剧情
          TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
        }
      }
    //第十四个球（职场爱情+）
    if(balls.has(13)) {
        const TCBallData = balls.get(13);
        if(TCBallData.size> 100 && officeCrisis===2 && !TCBallData.eventTriggeredChoose) {

        if(inLove&&balls.has(7)){
        const TCBallData1 = balls.get(7);
        setTimeout(() => {
        addEventToStory(13,"Unexpectedly, upon learning that you are not single,"+TCBallData.content+
        " asked if you two could establish a romantic relationship? ",
        "You left "+TCBallData1.content+", and start a new relationship with "+TCBallData.content+".",
        "You never see "+TCBallData.content+" again.",1000);
        }, 1000);//3s后引出剧情
        }
        else if(!inLove){
        setTimeout(() => {
        addEventToStory(13,"As expected, during a work period "+TCBallData.content+
        " asked if you two could establish a romantic relationship? ",
        "You start a relationship with "+TCBallData.content+".",
        "You never see "+TCBallData.content+" again.",1000);
        }, 1000);//3s后引出剧情
        }
        TCBallData.eventTriggeredChoose = true; 
        }
    }
        
    //第十五个球（第二场报道+）
    if(balls.has(14)) {
        const TCBallData = balls.get(14);
        if(TCBallData.size>(TCBallData.aliveSize-1) && !TCBallData.eventTriggeredChoose) {
         setTimeout(() => {
            addEventToStory(14,"Perhaps you can tell her story in your way?",
             "You bid farewell to "+TCBallData.content+".",
             "You bid farewell to "+TCBallData.content+".",1000);
          }, 4000);//3s后引出剧情
          TCBallData.eventTriggeredChoose = true; 
        }
      }
        
    //第十八个球（第三场报道RAJ+）
    if(balls.has(17)) {
        const TCBallData = balls.get(17);
        if(TCBallData.size>(TCBallData.aliveSize-1) && !TCBallData.eventTriggeredChoose) {
         setTimeout(() => {
            addEventToStory(17,"Do you want to tell his story in your way?",
             "It was found that "+TCBallData.content+
             " is just a delusional madman. All his evidence is just a strange stone. \
             You went to great lengths to send the stone to national laboratory, \
             but the inspection results showed that it's just an ordinary stone. ",
              TCBallData.content+" left in disappointment.",1000);
          }, 4000);//4s后引出剧情
          TCBallData.eventTriggeredChoose = true; // 加入这个属性以确保事件只触发一次
        }
      }
}

//(离去故事--------------------------------------------------------------------------------------------------
function addJournalistLeft(){

//第十个球（护士离开+）
     if(balls.has(9)) {
     const TLBallData = balls.get(9);
     if(TLBallData.content==="Emma"&&TLBallData.size>120&&!TLBallData.eventTriggeredLeft) {
     addMessageToStory(TLBallData.content+" healed your leg."); 
     setTimeout(() => {killBall(TLBallData,9);}, 3000);//3s后消失
      TLBallData.eventTriggeredLeft = true; 
      }
      }
//————————————————————————————————————————————————————————————————————————————————————————————————————
//第十一个球（毕业后离开校园）
if(balls.has(10)) {
    const TLBallData = balls.get(10);
    if(balls.has(7)&&!TLBallData.eventTriggeredKill7&&(balls.get(7).content==="Hua"||balls.get(7).content==="Diego")){
        const TLBallData1 = balls.get(7);
        addMessageToStory("You never see "+TLBallData1.content + " again since you left your school."); 
        setTimeout(() => {killBall(TLBallData1,7);}, 3000);//3s后消失
        TLBallData.eventTriggeredKill7 = true; 
        }
}
//————————————————————————————————————————————————————————————————————————————————————————————————————
//第十二个球（boss）{
    if(balls.has(11)) {
        const TLBallData = balls.get(11);

        //参加工作后离开的人
        if(balls.has(8)&&!TLBallData.eventTriggeredKill8){
        const TLBallData1 = balls.get(8);
        addMessageToStory("You never see "+TLBallData1.content + " again since you start your career."); 
        setTimeout(() => {killBall(TLBallData1,8);}, 3000);//3s后消失
        TLBallData.eventTriggeredKill8 = true; 
        }
        if (balls.has(9)&&balls.get(9).content==="Ivan"&&!TLBallData.eventTriggeredKill9){
        const TLBallData1 = balls.get(9);
        addMessageToStory("You never see "+TLBallData1.content + " again since you start your career."); 
        setTimeout(() => {killBall(TLBallData1,9);}, 3000);//3s后消失
        TLBallData.eventTriggeredKill9 = true; 
        }
        //为报道添加影响
        if(officeCrisis===1&&!TLBallData.eventTriggeredS1) {
        addMessageToStory(TLBallData.content + " likes story you bring, but also reminds you to pay more attention to what today's society like to hear and see."); 
        TLBallData.eventTriggeredS1 = true; 
        }
        if(officeCrisis===2&&!TLBallData.eventTriggeredS2) {
        addMessageToStory(TLBallData.content + " wants you to involve \
        some more exciting stories, the office is struggling to make ends meet!"); 
        TLBallData.eventTriggeredS2 = true; 
        }

        if(officeCrisis===3&&!TLBallData.eventTriggeredS3) {
        addMessageToStory(TLBallData.content+" fired you because your work bring little profits to company.");
        setTimeout(() => {killBall(TLBallData,11);}, 3000);//3s后消失
         // 结局4
         endType=4;
        TLBallData.eventTriggeredS3 = true; 
        }

    }


//————————————————————————————————————————————————————————————————————————————————————————————————————
//第十三个球（第一个报道离开+）
       if(balls.has(12)) {
        const TLBallData = balls.get(12);
        if(TLBallData.choiceMade!=""&&!TLBallData.eventTriggeredLeft) {
        setTimeout(() => {killBall(TLBallData,12);}, 3000);//3s后消失
        if(TLBallData.choiceMade==="Y"){officeCrisis+=1;}
        TLBallData.eventTriggeredLeft = true; 
        }
        }
//————————————————————————————————————————————————————————————————————————————————————————————————————
//第十四个球（职场爱情+）
if(balls.has(13)) {
    const TLBallData = balls.get(13);
     if(inLove&&balls.has(7)){
     const TLBallData1 = balls.get(7);
     if(TLBallData.choiceMade==="Y"&&!TLBallData.eventTriggeredLeft)
    {
        setTimeout(() => {killBall(TLBallData1,7);}, 3000);
        inLove=true;
        TLBallData.eventTriggeredLeft=true;
    }
    else if ((TLBallData.choiceMade==="N"||TLBallData.choiceMade==="Miss")&&!TLBallData.eventTriggeredLeft)
    {
        setTimeout(() => {killBall(TLBallData,13);}, 3000);
        inLove=true;
        TLBallData.eventTriggeredLeft=true;
    }

    }
        
    if(!inLove){
      if(TLBallData.choiceMade==="Y"&&!TLBallData.eventTriggeredLeft)
        {
          inLove=true;
          TLBallData.eventTriggeredLeft=true;
        }
       else if((TLBallData.choiceMade==="N"||TLBallData.choiceMade==="Miss")&&!TLBallData.eventTriggeredLeft)
        {
          setTimeout(() => {killBall(TLBallData,13);}, 3000);
          inLove=false;
          TLBallData.eventTriggeredLeft=true;   
        }
 
    }
 
 }
//————————————————————————————————————————————————————————————————————————————————————————————————————
 //第十五个球（第二个报道离开+）
       if(balls.has(14)) {
        const TLBallData = balls.get(14);
        if(TLBallData.choiceMade!=""&&!TLBallData.eventTriggeredLeft) {
        setTimeout(() => {killBall(TLBallData,14);}, 3000);//3s后消失
        if(TLBallData.choiceMade==="Y"){officeCrisis+=1;}
        TLBallData.eventTriggeredLeft = true; 
        }
        }
        
//———————————————————————————————————————————————————————————————————————————————————————————————————————— 
//第十八个球（第三个报道离开+）
       if(balls.has(17)) {
        const TLBallData = balls.get(17);
        if(TLBallData.choiceMade!=""&&!TLBallData.eventTriggeredLeft) {
        addMessageToStory("You never see "+TLBallData.content+" again."); 
        setTimeout(() => {killBall(TLBallData,17);}, 3000);//3s后消失
        if(TLBallData.choiceMade==="Y"){officeCrisis+=1;}
        TLBallData.eventTriggeredLeft = true; 
        }
        }
    

        
} 

//(转换外貌)-------------------------------------------------------------------------------------------------
    function addJournalistLook(){
    //第八个球（校园爱情）
    if(balls.has(7)) {
        const TLBallData= balls.get(7);
        if(TLBallData.size>(TLBallData.aliveSize-1)&&!TLBallData.eventTriggeredInLove
        &&(TLBallData.content==="Susana"||TLBallData.content==="James")) {
            inLove=true;
            TLBallData.eventTriggeredInLove= true; 
            
        }
        if(TLBallData.size>(TLBallData.maxSize-1)&&!TLBallData.eventTriggeredLove) {
            if(TLBallData.content==="Susana"||TLBallData.content==="James"){
            TLBallData.element.style.color = "black";
            inLove=true;
            TLBallData.eventTriggeredLove= true; 
            }
        }

        if(age>46&&!TLBallData.eventTriggeredLook) {
            if(TLBallData.content==="Susana"){
              addMessageToStory("You married "+TLBallData.content);
              TLBallData.content="Wife";
              TLBallData.element.textContent = "Wife";
            }
            else if(TLBallData.content==="James"){
              addMessageToStory("You married "+TLBallData.content);
              TLBallData.content="Husband";
              TLBallData.element.textContent = "Husband";
            }
            TLBallData.eventTriggeredLook = true; 
          }

        }
      //第十一个球（实习生）
      if(balls.has(10)) {
        const TLBallData= balls.get(10);
        if(TLBallData.size>(TLBallData.maxSize-1)&&!TLBallData.eventTriggeredLook) {
            if(TLBallData.content==="Hiro"){
              addMessageToStory(TLBallData.content+" has grown admiration and dependence on you.");
              TLBallData.element.style.color = "black";
            }
            TLBallData.eventTriggeredLook = true; 
          }

        }
     //第十二个球（boss）
      if(balls.has(11)) {
       const TLBallData= balls.get(11);
        if(TLBallData.size>(TLBallData.aliveSize-1)&&!TLBallData.eventTriggeredLook) {
            TLBallData.element.style.color = "black";
            TLBallData.eventTriggeredLook = true; 
            }
        }
     //第十四个球（职场爱情）
    if(balls.has(13)) {
    const TLBallData= balls.get(13);
    if(TLBallData.size>(TLBallData.maxSize-1)&&!TLBallData.eventTriggeredLook) {
    TLBallData.element.style.color = "black";
    TLBallData.eventTriggeredLook = true; 
    }
    }

}
        

    //(转换状态)------------------------------------------------------------------------------------------------------
    function addJournalistState(){
    
    
        
    }