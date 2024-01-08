//参数: 球参数，第几个球，存活大小
function addSoldierStory(theBall,checkIndex,AS) {
    
    switch(checkIndex){
    //士兵第一球
    case 0:
      if(deal===1){
        //事件
        theBall.content = "Natalia";
        theBall.nameList = "recruit";
        theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,0);//参数：球对象，球序号
        //特性
        theBall.element.style.color = "black";
        theBall.aliveSize=AS;
        theBall.maxSize=theBall.aliveSize+5;
        theBall.type =2;
        }
        else if(deal===0){
        //事件
        theBall.content = "Henrik";
        theBall.nameList = "recruit";
        theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,1);
        //特性
        theBall.element.style.color = "black";
        theBall.aliveSize=AS;
        theBall.maxSize=theBall.aliveSize+5;
        theBall.type =2;
        }
    break;
    //士兵第二球
    case 1:
         
          //事件
          theBall.content = "Nanan";
          theBall.nameList = "captive";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,2);
          //特性
          theBall.aliveSize=AS;
          theBall.type =1;
       
    break;
    //士兵第三球
    case 2:
          //事件
          theBall.content = "Joel";
          theBall.nameList = "army doctor";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,3);
          //特性
          theBall.aliveSize=AS;
          theBall.type=1;
      
    break;
    //士兵第四球
        case 3:
          if(deal===1){
            //事件
            theBall.content = "Peter";
            theBall.nameList = "he loves you";
            theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,4);
            //特性
            theBall.aliveSize=AS;
            theBall.maxSize=100;
            theBall.type =3;
            }
            else if(deal===0){
            //事件
            theBall.content = "Judy";
            theBall.nameList = "she loves you";
            theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,5);
            //特性
            theBall.aliveSize=AS;
            theBall.maxSize=120;
            theBall.type =3;
            }
        
      break;
    //士兵第五球
      case 4:

        if(balls.has(9)){
          //事件
          theBall.content = "Outpost";
          theBall.nameList ="enemy's secret military building";
          theBall.storyContent =Math.round(age) + 
          getStorySoldierLost(theBall.content,balls.get(9).content,6);
          //特性
          theBall.aliveSize=AS;
          theBall.maxSize=100;
          theBall.type =5;
          }
          else{
          //事件
          theBall.content = "Outpost";
          theBall.nameList ="enemy's secret military building";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,6);
          //特性
          theBall.aliveSize=AS;
          theBall.maxSize=100;
          theBall.type =5;
          }
    
      break;
    //士兵第六球
        case 5:
          
        if(lastClick===1201){
          //事件
          theBall.content = "Georg";
          theBall.nameList ="major";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,7);
          //特性
          theBall.aliveSize=AS;
          theBall.type =1;
          }
          else{
          //事件
          theBall.content = "Wolf";
          theBall.nameList ="chef";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,8);
          //特性
          theBall.aliveSize=AS;
          theBall.type =1;
          }
    
          break;
    //士兵第七球
    case 6:

          //事件
          theBall.content = "General";
          theBall.nameList ="enemy leader";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,9);
          //特性
          theBall.aliveSize=AS;
          theBall.type =4;
     
       break;
    //士兵第八球
    case 7:

      if(ETLine){
          //事件
          theBall.content = "farmer";
          theBall.nameList = "a civilian family";
          theBall.storyContent =Math.round(age) + getStorySoldierNanan(theBall.content,"Nanan",10);
          //特性
          theBall.aliveSize=AS;
          theBall.type =2;
        }
        else {
          //事件
          theBall.content = "Warden";
          theBall.nameList = "warden";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,11);
          //特性
          theBall.aliveSize=AS;
          theBall.type =1;
        }
       break;

    //士兵第九球
    case 8:
         //事件
         theBall.content = "Zuote";
         theBall.nameList = "general";
         theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,12);
         //特性
         theBall.aliveSize=AS;
         theBall.type =1;
       
       break;

   //士兵第十球
    case 9:
         //事件
         theBall.content = "Siti";
         theBall.nameList = "scientist";
         theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,13);
         //特性
         theBall.aliveSize=AS;
         theBall.type =1;
      break;

    //士兵第十一球
    case 10:
          //事件
          theBall.content = "Robber";
          theBall.nameList = "wanted criminal";
          theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,14);
          //特性
          theBall.aliveSize=AS;
          theBall.maxSize=150;
          theBall.type =4;
       break;

    //士兵第十二球
     case 11:
       //事件
       if(inLove){
        if(Math.random()<0.5){
        theBall.content = "Son";
        theBall.nameList = "your lovely son";
        theBall.element.style.color = "black";
        theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,15);
        }
        else {
        theBall.content = "Daughter";
        theBall.nameList = "your lovely daughter";
        theBall.element.style.color = "black";
        theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,16);
        }
        //特性
        theBall.aliveSize=AS;
        theBall.maxSize=80;
        theBall.type =1;
        }
        else
        {
        if(deal===1){
         theBall.content = "Peter";
         theBall.nameList = "single father";
         theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,17);
        }
        else if(deal===0) {
         theBall.content = "Judy";
         theBall.nameList = "single mother";
         theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,18);
        }
        theBall.aliveSize=AS;
        theBall.type =3;
        }
       break;
    //士兵第十三球
    case 12:
    //事件
     theBall.content = "Ceber";
     theBall.nameList = "agent";
     theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,19);
     //特性
     theBall.aliveSize=AS;
     theBall.type =4;
     break;

    //士兵第十四球
    case 13:
      //事件
      if(deal===1){
       theBall.content = "Photographer";
       theBall.nameList = "a familiar person";
       theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,20);
       }
       else if(deal===0) {
         theBall.content = "Photographer";
         theBall.nameList = "a familiar person";
         theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,21);
         }
       //特性
       theBall.aliveSize=AS;
       theBall.fontSize=1;
       theBall.element.style.fontSize = 1+ 'px';
       theBall.type =1;
     break;

         //士兵第十五球
    case 14:
      //事件
        theBall.content = "Nanan";
        theBall.nameList = "alien"; 
        theBall.storyContent =Math.round(age) + getStorySoldier(theBall.content,22);
       //特性
       theBall.aliveSize=AS;
       theBall.type =2;
     break;
    
  default:

    }
}


//关系和故事————————————————————————————————————————————————————————————————————————————————————————————
const RelationsSoldier = [
    //第一球
    "a recruit", 
    "a recruit", 
    //第二球
    "the captive", 
    //第三球
    "an army doctor", 
    //第四球
    "",
    "",
    //第五球
    "a secret", 
    //第六球
    "the major",
    "a chef",
    //第七球
    "the",
    //第八球
    "a",
    "the",
    //第九球
    "general",
    //第十球
    "a scientist",
    //第十一球
    "a panicked",
    //第十二球
    "your",
    "your",
    "a single father",
    "a single mother",
    //第十三球
    "agent.",
    //第十四个球
    "a",
    "a",
    //第十五球（结局15）
    "",
   
];
const StoriesSoldier = [
    //第一球
    " . After graduating from high school, you joined the army and built \
    a rock-solid friendship with him, who shared the same aspirations and \
    was around the same age as you. He has a dream of soaring in the sky.", 

    ". After graduating from high school, you joined the army and built \
    a rock-solid friendship with her, who shared the same aspirations and \
    was around the same age as you. She has a dream of soaring in the sky.",

    //第二球
    " from the hostile country, and you become his guard. As you both \
    talk about your hometowns and friends, a deep connection forms between you. \
    You think that if not for the war, you might become good friends.", 


    //第三球
    " who wears mask all the time. It seems you've never seen his actual face. \
    He has an old-fashioned radio that has never broadcasted anything. At one gathering, \
    you curiously mentioned it to him, and he simply replyed he's waiting for a message.", 

    //第四球
    ". From the very first glance you exchanged, you knew you had fallen in love with him. \
    After a few secret dates, you became a couple.",

    ". From the very first glance you exchanged, you knew you had fallen in love with her. \
    After a few secret dates, you became a couple.",

    //第五球
    " in an outdoor mission with a mate. You want to record the coordinates and report \
    to your superiors, waiting for further instructions. However, he believes you \
    should take advantage of the night and launch a surprise attack.", 

    //第六球
    " because of your outstanding performance in getting secrets from the enemy. \
    He promoted you and praised your perseverance and courage.",

    " a verbose men who is certainly over fifty. He missed life before the war, when the time he \
    constantly encountering vibrant and colorful people, unlike now where he only saw black or white.",

    //第七球
    " from the hostile country. Unfortunately, during the city battle, you were captured. \
    As a  prisoner, you were taken to a concentration camp in the capital. There, you saw \
    her living alongside her soldiers in the dim underground, planning and directing the war.",

    //第八球
    "",
    ", during the chat, you found that he was reluctant to join the war. \
    But due to his knowledge of the enemy's language, he volunteered to be a prison \
    guard for the captives. He said compared to outcome of the war, he cares more about \
    every insignificant individual affected by it.",

    //第九球
    ". He told you that the war is over. You didn't understand what happened, \
    but you returned to your home. Because of your performance on the battlefield, \
    general arranged a position for you in the Ministry of Defense.",

    //第十球
    ", who belongs to a laboratory under the defense agency. You have been assigned \
    to be his partner. He has a serious and meticulous demeanor. You like his mug, \
    which  printed a heart with the words \"Mommy's Precious\" in the middle.",

    //第十一球
    " on the street, and you clearly recognize him as a wanted criminal.",


    //第十二球
    ", sunlight casts on his peacefully sleeping face. He's \
    sleeping in your embrace, gently grasping your finger.",

    ", her eyes are incredibly beautiful, as two radiant gemstones. \
    Unlike other quiet girls, she's quite a mischievous kitten.",

    ", you got to know \
    each other during a hiking trip. His wife left him three \
    years ago, and he has been living alone with his child \
    ever since. Along the journey, you developed a certain fondness for one another.",

    ", you got to know \
    each other during a hiking trip. her husband left him three \
    years ago, and he she been living alone with her child \
    ever since. Along the journey, you developed a certain fondness for one another.",
    
    //第十三球
    ". His mysterious and conservative makes you feel uneasy. \
    Even though he claims to be just investigating the living conditions of \
    retired veterans, you think maybe it's best to leave this place with your family for a while.",

    //第十四球
    ", you two got along wonderfully. \
    Through her stories, you realized that perhaps there are \
    more people in the world you wish to meet. As a result, you \
    ended your career and start a different path of life.",

    ", you two got along wonderfully. \
    Through his stories, you realized that perhaps there are \
    more people in the world you wish to meet. So, you \
    ended your current career and start a different path of life.",

    //第十五球（结局15）
    ", it never crossed your mind that you would see him again! \
    You were glad he survived the war, while he told you that he isn't a human.",


];
function getStorySoldier(content,index) {
    if (RelationsSoldier.length === 0) {
        return { relation: null, story: null };
    }
    const relation = RelationsSoldier[index]; 
    const story = StoriesSoldier[index];

    return  " years old, you met "+relation+" "+content+story;
  }

function getStorySoldierLost(content,content1,index) {
    if (RelationsSoldier.length === 0) {
        return { relation: null, story: null };
    }
    const relation = RelationsSoldier[index]; 
    const story=" in an outdoor mission with "+content1+". You want to record the coordinates and report \
    to your superiors, waiting for further instructions. However, "+content1+" believes you \
    should take advantage of the night and launch a surprise attack.";

    return  " years old, you met "+relation+" "+content+story;
  }
  function getStorySoldierNanan(content,content1,index) {
    if (RelationsSoldier.length === 0) {
        return { relation: null, story: null };
    }
    const relation = RelationsSoldier[index]; 
    const story=" family. It was "+content1+" who discovered you and rescued you from the cell. \
    He entrusted you to the local "+content+" family.They were willing to \
    shelter you temporarily, but since then, you haven't received any news from "+content1;

    return  " years old, you met "+relation+" "+content+story;
  }