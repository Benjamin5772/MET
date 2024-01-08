//参数: 球参数，第几个球，存活大小
function addWaiterStory(theBall,checkIndex,AS) {
    
    switch(checkIndex){
    //服务员第一球
    case 0:
           //事件
           theBall.content = "Kay";
           theBall.nameList="colleague";
           theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,0);//参数：球对象，球序号
           //特性
           theBall.aliveSize=AS;
           theBall.type =2;

    break;
    //服务员第二球
    case 1:
           //事件
           theBall.content ="Malfoy";
           theBall.nameList="strange customer";
           theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,1);//参数：球对象，球序号
           //特性
           theBall.aliveSize=AS;
           theBall.maxSize=80;
           theBall.type =1;
       
    break;
    //服务员第三球
    case 2:
          //事件
          if(deal===0){
          theBall.content = "Yen";
          theBall.nameList="playwright";
          theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,2);//参数：球对象，球序号
          }
          else if(deal===1){
            theBall.content = "Sawaki";
            theBall.nameList="composer";
            theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,3);//参数：球对象，球序号
            }
          //特性
          theBall.aliveSize=AS;
          theBall.maxSize=130;
          theBall.type=2;
      
    break;
    //服务员第四球
        case 3:

        //事件
        theBall.content = "Bard"; 
        theBall.nameList="deli employee";
        theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,4);//参数：球对象，球序号
        //特性
        theBall.aliveSize=AS;
        theBall.type =1;
        
      break;
    //服务员第五球
      case 4:
        //事件
             if(lastClick===1101){
              theBall.content = "Chris";
              theBall.nameList="manager";
              theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,5);//参数：球对象，球序号
              }
              else{
                theBall.content = "Robber";
                theBall.nameList="terrifying robber";
                theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,6);//参数：球对象，球序号
                }
              //特性
              theBall.aliveSize=AS;
              theBall.type =4;
    
      break;
    //服务员第六球
        case 5:
           //事件
           if(Math.random()<0.5){
            theBall.content = "Priya";
            theBall.nameList="investor";
            theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,7);
            lastClick=1301;
            }
            else {
              theBall.content = "Matteo";
              theBall.nameList="college teacher";
              theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,8);
              lastClick=1302;
              }
            //特性
            theBall.aliveSize=AS;
            theBall.type =1;
        
          break;
    //服务员第七球
    case 6:
        //事件
        if(lastClick===1301){
         theBall.content = "Louis";
         theBall.nameList="supplier";
         theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,9);
         }
         else if(lastClick===1302) {
           theBall.content = "Wang";
           theBall.nameList="classmate";
           theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,10);
           }
         //特性
         theBall.aliveSize=AS;
         theBall.type =2;
     
       break;
    //服务员第八球
    case 7:
        //事件
        if(deal===1){
         theBall.content = "Aiden";
         theBall.nameList="married neighbor";
         theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,11);
         }
         else if(deal===0) {
           theBall.content = "Chloe";
           theBall.nameList="married neighbor";
           theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,12);
           }
         //特性
         theBall.aliveSize=AS;
         theBall.maxSize=100;
         theBall.type =3;
       break;

    //服务员第九球
    case 8:
        //事件
           theBall.content = "Soldier";
           theBall.nameList="sorehead soldier";
           theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,13);
         //特性
         theBall.aliveSize=AS;
         theBall.type =5;
       break;
    //服务员第十球
    case 9:
         //事件（记得完成后改为13）
 
        if(lastClick===1602)
         {
            theBall.content = "David";
            theBall.nameList="prosecutor";
            theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,15);
         }
         else{
          theBall.content = "Sven";
          theBall.nameList="real estate developer";
          theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,14);
         }
         //特性
         theBall.aliveSize=AS;
         theBall.type =4;
       break;
    //服务员第十一球
    case 10:
         //事件
        theBall.content = "Wujing";
        theBall.nameList="monk";
        theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,16);
         //特性
         theBall.aliveSize=AS;
         theBall.type =1;
       break;
     //服务员第十二球
     case 11:
        //事件
        if(inLove){
        if(Math.random()<0.5){
        theBall.content = "Son";
        theBall.nameList="your lovely son";
        theBall.element.style.color = "black";
        theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,17);
        }
        else {
        theBall.content = "Daughter";
        theBall.nameList="your lovely daughter";
        theBall.element.style.color = "black";
        theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,18);
        }
        //特性
        theBall.aliveSize=AS;
        theBall.maxSize=80;
        theBall.type =1;
        }
        else
        {
        if(deal===1){
         theBall.content = "Stark";
         theBall.nameList = "single father";
         theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,19);
        }
        else if(deal===0) {
         theBall.content = "Amélie";
         theBall.nameList = "single mother";
         theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,20);
        }
        theBall.aliveSize=AS;
        theBall.type =3;
        }
      break;
    //服务员第十三球
    case 12:
        //事件
           theBall.content = "Aylin";
           theBall.nameList="waiter";
           theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,21);
         //特性
         theBall.aliveSize=AS;
         theBall.type =1;
       break;
     //服务员第十四球
    case 13:
        //事件
        if(deal===1){
         theBall.content = "Journalist";
         theBall.nameList = "a familiar person";
         theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,22);
         }
         else if(deal===0) {
           theBall.content = "Journalist";
           theBall.nameList = "a familiar person";
           theBall.storyContent =Math.round(age) + getStoryWaiter(theBall.content,23);
           }
         //特性
         theBall.aliveSize=AS;
         theBall.type =1;
       break;
    default:

    }
}


//关系和故事————————————————————————————————————————————————————————————————————————————————————————————
const RelationsWaiter = [
    //第一球
    "your colleague", 
    //第二球
    "an odd customer", 
    //第三球
    "a playwright", 
    "a composer", 
    //第四球
    "a deli employee",
    //第五球
    "your manager", 
    "a",
    //第六球
    "an investor",
    "your instructor",
    //第七球
    "a supplier",
    "a classmate",
    //第八球
    "your neighbor, Mr.",
    "your neighbor, Mrs.",
    //第九球
    "a sorehead",
    //第十球
    "prosecutor",
    "a real estate developer",
    //第十一球
    "a monk",
    //第十二球
    "your",
    "your",
    "a single father",
    "a single mother",
    //第十三球
    "a street artist",
    //第十四个球
    "a",
    "a",

     
   
];
const StoriesWaiter = [
    //第一球
    "you both work together in a coffee shop.\
    Your collaboration is seamless, in spare time, \
    she likes to sharing her favorite movies, \
    as well as the places longing to go.", 

    //第二球
    "who sits by the shop's front almost every morning,\
    deep in thought, staring intently at a stone in his hand.", 

    //第三球
    "who always comes to your shop for a cup of black tea after \
    lunch to build her script. For many times, \
    she would seek your opinion on her new play.", 

    "who always comes to your shop for a cup of latte after \
    lunch to brainstorm his music. For many times, \
    he would seek your opinion on his new piece.", 

    //第四球
    "he always came to shop right before the mall closes for \
    \"buying\" 3 cups of smoothie that\ are about to be discarded . \
     He is the father of three children.",

    //第五球
    "she came to oversee your work due to the recent decline \
    in performance. Her shrill voice and stern face made everyone uneasy", 

    "he looted your counter. Though he only took the tips box,\
    the incident left you with a significant emotional trauma.",

    //第六球
    "she was quite interested in your idea of opening a cat-themed coffee \
    shop. She gave you a startup fund and with some help of \
    your parent, you start your own business.",

    "it's your first class for returning to college. His lecture \
    ignited a strong interest in design within you, and an idea\
    began to take shape in your mind.",

    //第七球
    "who also has a great fondness for cats, and runs \
    his own cat breeding facility. He would be delighted to provide \
    some adorable furry staffs for your \"Claw Cafe\"!",

    "who happens has the similar experiences to you! \
    Since you both resonate strongly with each other's thoughts. \
    You shared with her your concept of mobile home decoration company, \
    and you decided to establish \"Whoooosh Balloon Home\" together.",
    
    //第八球
    "he is one of your most loyal customer.\
    Thanks to his promotion, your business has been booming. Moreover, he\
    seems to be quite interested in you.",

    "she is one of your most loyal customer.\
     Thanks to her promotion, your business has been booming. Moreover, she\
    seems to be quite interested in you.",

    //第九球
    "he stumbled into your store spoke in a language you couldn't\
     understand, he seems to want some food and water.",

    //第十球
    "you have been charged as an accomplice \
    in a theft case. The police searched your store and found the stolen\
    diamonds in the warehouse. You have no idea what has happened.",

    "who is interested in acquiring \
    your storefront. Given that your business has been struggling, the \
    terms he offers are very enticing. He is pressuring you at every turn, \
    hoping you'll transfer the ownership of the shop.",
    //第十一球
    "During a journey, you encountered \
    this monk who was blind and had no family. He roamed \
    around, praying and chanting sutras for those who suffered. \
    You asked him for guidance about your future path.",
    //第十二球
    "sunlight casts on his peacefully sleeping face. He's \
    sleeping in your embrace, gently grasping your finger.",

    "her eyes are incredibly beautiful, as two radiant gemstones. \
    Unlike other quiet girls, she's quite a mischievous kitten.",

    "you got to know \
    each other during a hiking trip. His wife left him three \
    years ago, and he has been living alone with his child \
    ever since. Along the journey, you developed a certain fondness for one another.",

    "you got to know \
    each other during a hiking trip. her husband left him three \
    years ago, and he she been living alone with her child \
    ever since. Along the journey, you developed a certain fondness for one another.",
    
    //第十三球
    "she drew a portrait of you in Central Park. \
     You looked at painting, start to wonder: Is this the person that I want to be?",
    //第十四球
    "you two got along wonderfully. \
    Through her stories, you realized that perhaps there are \
    more people in the world you wish to meet. As a result, you \
    ended your career and start a different path of life.",

    "you two got along wonderfully. \
    Through his stories, you realized that perhaps there are \
    more people in the world you wish to meet. So, you \
    ended your current career and start a different path of life."

];
function getStoryWaiter(content,index) {
    if (RelationsWaiter.length === 0) {
        return { relation: null, story: null };
    }
    const relation = RelationsWaiter[index]; 
    const story = StoriesWaiter[index];

    return  " years old, you met "+relation+" "+content+", "+story;
  }
