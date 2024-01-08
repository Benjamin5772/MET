//参数: 球参数，第几个球，存活大小
function addJournalistrStory(theBall,checkIndex,AS) {
    
    switch(checkIndex){
    //记者第一球
    case 0:
           //事件
           theBall.content = "Amanda";
           theBall.nameList="classmate";
           theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,0);//参数：球对象，球序号
           //特性
           theBall.aliveSize=AS;
           theBall.type =2;

    break;
    //记者第二球
    case 1:
          if(Math.random()<0.7){
           if(deal===1){
           //事件
           theBall.content = "James";
           theBall.nameList="he loves you";
           theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,1);//参数：球对象，球序号
           //特性
           theBall.aliveSize=AS;
           theBall.maxSize=180;
           theBall.type =3;
           }
           else if(deal===0){
           //事件
           theBall.content = "Susana";
           theBall.nameList="she loves you";
           theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,2);//参数：球对象，球序号
           //特性
           theBall.aliveSize=AS;
           theBall.maxSize=180;
           theBall.type =3;
           }
          }
          else
          {
            if(deal===1){
              //事件
              theBall.content = "Hua";
              theBall.nameList="roommate";
              theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,3);//参数：球对象，球序号
              //特性
              theBall.aliveSize=AS;
              theBall.type =1;
              }
              else if(deal===0){
              //事件
              theBall.content = "Diego";
              theBall.nameList="roommate";
              theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,4);//参数：球对象，球序号
              //特性
              theBall.aliveSize=AS;
              theBall.type =1;
              }

          }
       
    break;
    //记者第三球
    case 2:
          //事件
          theBall.content = "Arjun";
          theBall.nameList="club member"; 
          theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,5);//参数：球对象，球序号
          //特性
          theBall.aliveSize=AS;
          theBall.type=2;
      
    break;
    //记者第四球
        case 3:
         if(Math.random()<0.5){
        //事件
        theBall.content = "Ivan";
        theBall.nameList="restaurant owner"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,6);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        }
        else{
        //事件
        theBall.content = "Emma";
        theBall.nameList="nurse"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,7);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =4;

        }
        
      break;
    //记者第五球
      case 4:

        if(Math.random()<0.6){
          //事件
          theBall.content = "Hiro";
          theBall.nameList="intern"; 
          theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,8);//参数：球对象，球序号
          //特性
          theBall.aliveSize=AS;
          theBall.maxSize=110;
          theBall.type =1;
          }
          else{
          //事件
          theBall.content = "Luc";
          theBall.nameList="master"; 
          theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,9);//参数：球对象，球序号
          //特性
          theBall.aliveSize=AS;
          theBall.type =1;
          }
    
      break;
    //记者第六球
        case 5:
          
        if(Math.random()<0.5){
          //事件
          theBall.content = "Hana";
          theBall.nameList="supervisor"; 
          theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,10);//参数：球对象，球序号
          //特性：不可移除不会长大
          theBall.aliveSize=AS;
          theBall.maxSize=100;
          theBall.element.style.border = "3px solid black"; 
          theBall.movable=false;
          theBall.type =1;
          }
          else{
          //事件
          theBall.content = "Reza";
          theBall.nameList="editor"; 
          theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,11);//参数：球对象，球序号
          //特性
          theBall.aliveSize=AS;
          theBall.maxSize=100;
          theBall.element.style.border = "3px solid black"; 
          theBall.movable=false;
          theBall.type =2;
          }
    
          break;
    //记者第七球
    case 6:

      if(Math.random()<0.5){
        //事件
        theBall.content = "Liang";
        theBall.nameList="artist"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,12);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =2;
        }
        else{
        //事件
        theBall.content = "Mateo";
        theBall.nameList="recluse"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,13);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        }
     
       break;
    //记者第八球
    case 7:

      if(deal===1){
        //事件
        theBall.content = "Emre";
        theBall.nameList="just partner"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,14);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.maxSize=180;
        theBall.type =2;
        }
        else if(deal===0){
        //事件
        theBall.content = "Clara";
        theBall.nameList="just friend"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,15);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.maxSize=180;
        theBall.type =2;
        }
       break;

    //记者第九球
    case 8:
      if(Math.random()<0.5){
        //事件
        theBall.content = "Rania";
        theBall.nameList="worker"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,16);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        }
        else{
        //事件
        theBall.content = "Samina";
        theBall.nameList="tour guide"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,17);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        }
       break;

   //记者第十球
    case 9:
      //事件
      if(officeCrisis>0){
      theBall.content = "Fan";
      theBall.nameList="anonymous fan"; 
      theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,18);
      //特性
      theBall.aliveSize=AS;
      theBall.type =1;
      }
      else 
      {
        theBall.content = "Reader";
        theBall.nameList="anonymous reader"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,27);
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
      }
      break;

    //记者第十一球
    case 10:
        //事件
        if(inLove){
        if(Math.random()<0.5){
        theBall.content = "Son";
        theBall.nameList = "your lovely son";
        theBall.element.style.color = "black";
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,19);
        }
        else {
        theBall.content = "Daughter";
        theBall.nameList = "your lovely daughter";
        theBall.element.style.color = "black";
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,20);
        }
        //特性
        theBall.aliveSize=AS;
        theBall.maxSize=80;
        theBall.type =1;
        }
        else
        {
        if(deal===1){
         theBall.content = "Natalia";
         theBall.nameList = "single father";
         theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,21);
        }
        else if(deal===0) {
         theBall.content = "Sergey";
         theBall.nameList = "single mother"; 
         theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,22);
        }
        theBall.aliveSize=AS;
        theBall.type =3;
        }
       break;

    //记者第十二球
     case 11:
        //事件
      theBall.content = "Raj";
      theBall.nameList="alien expert?"; 
      theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,23);
      //特性
      theBall.aliveSize=AS;
      theBall.type =1;
      break;

    //记者第十三球
    case 12:
      if(Math.random()<0.5){
        //事件
        theBall.content = "Waitress";
        theBall.nameList = "a familiar person";
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,24);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        }
        else{
        //事件
        theBall.content = "Soldier";
        theBall.nameList = "a familiar person"; 
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,25);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        }
       break;

    //记者第十四球
        case 13:
        //事件
        const oldFriendNames = ["Olga", "Ethan", "Hiroshi"];
        const randomIndex = Math.floor(Math.random() * oldFriendNames.length);
        theBall.content = oldFriendNames[randomIndex];
        theBall.nameList = "old friend";
        theBall.storyContent =Math.round(age) + getStoryJournalist(theBall.content,26);
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        break;

    default:

    }
}


//关系和故事————————————————————————————————————————————————————————————————————————————————————————————
const RelationsJournalist = [
    //第一球
    "your classmate", 
    //第二球
    "", 
    "",
    "your roommate",
    "your roommate",
    //第三球
    "a club member ", 
    //第四球
    "a restaurant owner",
    "a nurse",
    //第五球
    "an intern", 
    "your master",
    //第六球
    "your supervisor",
    "your editor",
    //第七球
    "an artist",
    "a disheartened worker",
    //第八球
    "",
    "",
    //第九球
    "a recluse",
    "a tour guide",
   //第十球
    "an anonymous",
    //第十一球
    "your",
    "your",
    "a single father",
    "a single mother",
    //第十二球
    "a self named alien expert",
    //第十三球
    "a",
    "a",
    //第十四个球
    "an old friend",
    //第十球(额外)
    "an anonymous",
   
];
const StoriesJournalist = [
    //第一球
    " at the same university. Your first collaborative presentation was outstanding, \
     your communication was like having the bridge of hearts.", 

    //第二球
    ". During a class, he turned around and asked you one question. \
    A week after getting to know each other, you both discovered similar souls \
    from one one another.", 

    ". During a class, she turned around and asked you one question. \
    A week after getting to know each other, you both discovered similar souls \
    from one one another.", 

    ", who always enjoyed to play a out-of-tune guitar at night. \
    Except for that song \"Moon of Mine\", which actually sounds not bad. \
    Additionally, you noticed that she washes her hands twice when using restroom.",

    ", who always enjoyed to play a out-of-tune guitar at night. \
    Except for that song \"Moon of Mine\", which actually sounds not bad. \
    Additionally, you noticed that he washes his hands twice when using restroom.",

    //第三球
    " at the badminton club. You often go out to play with him. \
    He is so interested in other female friends around you. Maybe he doesn't \
    even like playing badminton so much, he just doesn't like to be alone.", 

    //第四球
    ", the food in this restaurant is really good, also the owner is quite hospitable. \
    He likes to make up stories from island, regarding its friendly people \
    and the festive atmosphere. He truly longs for that island!",

    ". You woke up in the hospital. Your bicycle had fallen down a slope. \
    Although your life is not in danger, for a long time in the future, \
    you need to come back here to check your leg joints.",

    //第五球
    " who was assigned to the same group as you. He is so cautious \
    and always appears shy. You are also very willing to help him \
    out of some awkward situations.", 

    " who despite looking over 50, still has a childlike demeanor \
    and lacks ambition. Every time he passes by the flower shop next \
    to the print store, he picks a flower to take home.",

    //第六球
    ". After becoming a journalist, you need to report your achievements \
    to her regularly, and most importantly, obtain a budget for traveling everywhere.",

    ". After becoming an independent photographer, \
    you were fortunate to encounter an editor who appreciated your work. \
    Of course, you need to regularly submit to his magazine to reassure him \
    that he has chosen the right person.",

    //第七球
    " and the two of you instantly became good friends. \
    He spent 30 years developing his style using soda cans, but it \
    seems that people has little interest in this genius.",

    " in a wooden house perched on the cliffside of a mountain stream. \
    Years ago a riot had taken beloved from this men. Which made him \
    grew rage about the world and crowds, he decided to stay away from all of these.",
    
    //第八球
    " at an international conference where he helped you obtain valuable materials. \
    That collaboration made you close partners.",

    " at a fashion show. She invited you to dance, and you felt something happened between the two of you.",

    //第九球
    " who is a survivor of a chemical plant accident. \
    You hope to collaborate with her to expose the factory's illegal actions \
    from many years ago. She claims that she has tried many ways to hold the \
    factory accountable for the accident, but nothing has happened in the past 10 years.",

    ", under her guidance, you visited these dilapidated ancient ruins. She passionately \
    narrated the history of this place, saying that these stories are gradually being forgotten by \
    people. Those stories captivate you more than the place itself.",

    //第十球
    "'s letter, \"Your work has made me restored confidence in my life. \
    I am deeply grateful for your effort. Thank you.\"",

    //第十一球
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

    //第十二球
    " who claims to have discovered extraterrestrial being \
    and hopes you can help publicize his findings. He appears ragged in \
    his attire, yet his eyes are bright and spirited. That might be confidence, \
    or perhaps just a desire for fame.",
    
    //第十三球
    " in a coffee shop. She looks quite ordinary, and act ordinary. \
    Yet, deep down, you feel a strong resemblance to her. She has an extraordinary optimism about life.",
    
    " in a coffee shop, and your conversation was very engaging. \
    You felt that his past seemed like another life you've longed for.",
    //第十四球
    " and had a delightful conversation. After exchanging stories of \
    the years that had passed, you realized that there might be more people in the world \
    you'd like to meet. So, you ended your current career and start a different path of life.",

    //额外的第十球
    " 's letter, \"My life has reached bottom, no one cares about me helping me, \
     I can't see the patht of this world, can you see me?\" "

];
function getStoryJournalist(content,index) {
    if (RelationsJournalist.length === 0) {
        return { relation: null, story: null };
    }
    const relation = RelationsJournalist[index]; 
    const story = StoriesJournalist[index];

    return  " years old, you met "+relation+" "+content+story;
  }
