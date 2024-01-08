//参数：普通事件概率，朋友事件概率，爱人事件概率，倒霉事件概率，奇遇事件概率
function addQuickStory(theBall,p1, p2, p3, p4, p5,AS) {
    const storyRate = Math.random() * 10;  // 生成0-10的随机数

    // 计算每个事件的范围
    let rangeP1 = p1;
    let rangeP2 = rangeP1 + p2;
    let rangeP3 = rangeP2 + p3;
    let rangeP4 = rangeP3 + p4;
    let rangeP5 = rangeP4 + p5;

    if (storyRate < rangeP1) {
        // 普通事件
        const index=getRandomNormalIndex();
        theBall.content = getRandomNormalNames(index);
        theBall.nameList= getRandomNormalNameList(index);
        theBall.storyContent =Math.round(age) + getRandomNormal(theBall.content,index);
        //特性设置
        theBall.aliveSize=AS;
        theBall.type =1;
    } 

    else if (storyRate < rangeP2) {
         //朋友事件
        const index=getRandomFriendIndex();
        theBall.content = getRandomFriendNames(index);
        theBall.storyContent =Math.round(age) + getRandomFriend(theBall.content,index);
        //特性设置
        theBall.aliveSize=AS;
        theBall.type =2;

    } 

    else if (storyRate < rangeP3) {
         //爱人事件
         const index=getRandomLoveIndex();
         theBall.content = getRandomLoveNames(index);
         theBall.storyContent =Math.round(age) + getRandomLove(theBall.content,index);
         //特性设置
          theBall.aliveSize=AS;
          theBall.type =3;
    } 


    else if (storyRate < rangeP4) {
         //苦难事件
         const index=getRandomTroubleIndex();
         theBall.content = getRandomTroubleNames(index);
         theBall.nameList= getRandomTroubleNameList(index);
         theBall.storyContent =Math.round(age) + getRandomTrouble(theBall.content,index);
         //特性设置
          theBall.aliveSize=AS;
          theBall.type =4;

    } 
    
    else if(storyRate < rangeP5){
         //奇遇事件
         const index=getRandomWonderIndex();
         theBall.content = getRandomWonderNames(index);
         theBall.nameList= getRandomWonderNameList(index);
         theBall.storyContent =Math.round(age) + getRandomWonder(theBall.content,index);
         //特性设置
          theBall.aliveSize=AS;
          theBall.type =5;
 
    }
}


//关系（普通）————————————————————————————————————————————————————————————————————————————————————————————
const normalNames = [
    "Nikos", 
    "Jie", 
    "Musician", 
    "Ana", 
    "Priest", 
    "Flamingos",
    "Stranger",
    "kids",
    "Larry",
    "Caravan",
];
const normalNameList = [
    "smoker", 
    "men who eat on his own", 
    "cheery soul", 
    "dancer", 
    "chanter", 
    "brilliant life",
    "friend for five minute",
    "playing children",
    "savior",
    "oasis of journey",
];

const normalRelations = [
    "", 
    "distressed", 
    "a street", 
    "", 
    "a", 
    "a flock of",
    "a",
    "cheerful",
    "the pigeon",
    "a",

];
const normalStories = [
    "sitting on the steps, he asks where you've come and where you're going. You lit a cigarette for him.", 
    "said he had a quarrel with his wife today, that led he's having noodles for dinner tonight.", 
    "playing the accordion, the music dances joyfully, she's lost in it, the world, including you, becomes her backdrop.", 
    "in the spotlight, her performance was genuine and touching, you celebrate for such vibrant life.", 
    "in the church, reciting with his eyes closed. The congregation bows in devotion below. You see  him, but he cannot see you.", 
    ", sweeping over the lake in groups, resembling flames rolling by, their beauty surpassing the afterglow.",
    "running in the rain, you don't know his destination, but you decided to share your umbrella with him.",
    "playing after school. They chase each other around, like a flock of adorable sparrows.",
    "who feeds pigeons in this square every day and cuts off hair that's wrapped around their legs. But he used to be a murderer.",
    "they helped you fix your stalled car and pointed you to the nearest gas station.",
];
function getRandomNormalIndex() {
    const index = Math.floor(Math.random() * normalNames.length);
    return index;
}

function getRandomNormalNames(index) {
    if (normalNames.length === 0) {
        return { name : null };
    }
    const name = normalNames.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return name;
}

function getRandomNormalNameList(index) {
    if (normalNameList.length === 0) {
        return { name : null };
    }
    const nameList = normalNameList.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return nameList;
}


function getRandomNormal(content,index) {
    if (normalRelations.length === 0) {
        return { relation: null, story: null };
    }
    const relation = normalRelations.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    const story = normalStories.splice(index, 1)[0]; 

    return  " years old, you met "+relation+" "+content+" "+story;
  }
//关系（朋友）————————————————————————————————————————————————————————————————————————————————————————————
const friendNames = [
    "", 


];
const friendRelations = [
    "", 

];

const friendStories = [
    "", 

];
function getRandomFriendIndex() {
    const index = Math.floor(Math.random() * friendNames.length);
    return index;
}

function getRandomFriendNames(index) {
    if (friendNames.length === 0) {
        return { name : null };
    }
    const name = friendNames.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return name;
}

function getRandomFriend(content,index) {
    if (friendRelations.length === 0) {
        return { relation: null, story: null };
    }
    const relation = friendRelations.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    const story = friendStories.splice(index, 1)[0]; 

    return  " years old, you met "+relation+" "+content+" "+story;
}
//关系（爱人）————————————————————————————————————————————————————————————————————————————————————————————
const loveNames = [


];
const loverRelations = [

];
const loverStories = [

];
function getRandomLoveIndex() {
    const index = Math.floor(Math.random() * loveNames.length);
    return index;
}

function getRandomLoveNames(index) {
    if (loveNames.length === 0) {
        return { name : null };
    }
    const name = loveNames.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return name;
}

function getRandomLove(content,index) {
    if (loverRelations.length === 0) {
        return { relation: null, story: null };
    }
    const relation = loverRelations.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    const story = loverStories.splice(index, 1)[0]; 

    return  " years old, you met "+relation+" "+content+" "+story;
  }
//关系（苦难）————————————————————————————————————————————————————————————————————————————————————————————
const troubleNames = [
    "Sami", 
    "Firas", 
    "Doctor", 
    "Adil",
    "Woman", 
    "Takeuchi", 
    "Hands",
    "Man",
    "Mid-age",

];
const troubleNameList = [
    "tree hugger", 
    "ruin-keeper", 
    "MSF", 
    "plain watcher", 
    "wall fighter", 
    "fisherman",
    "bread beggar",
    "alcoholic",
    "office worker",
];
const troubleRelations = [ 
    "a boy", 
    "a teen", 
    "a crying",
    "an angry",
    "",
    "a fisherman",
    "a pair of frail",
    "a sad",
    "a drinking",
];

const troubleStories = [
    "hugging a tree, his family has just disappeared, he wishes the tree could protect him.", 
    "by the ruins, he hides under a makeshift shed built from broken tiles, where his toys and friends are.", 
    "kneels before trucks because they carries the hope for his patients.", 
    "under the eaves,she sits here every day, gazing at the plateau and barren fields, just as they gaze back at her.",
    "throws whatever she can find at a thick wall - stones, clumps , bucket...", 
    ", he said the ocean nurtured him, and it will also rest him.", 
    ", begging for a piece of bread for his starving younger sister.",
    "with disabled legs, sits on the ground, despondently drinking alcohol, with an empty container in front.",
    ", said his entire life will be trapped in this urban jungle, wasting away.",
];
function getRandomTroubleIndex() {
    const index = Math.floor(Math.random() * troubleNames.length);
    return index;
}

function getRandomTroubleNames(index) {
    if (troubleNames.length === 0) {
        return { name : null };
    }
    const name = troubleNames.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return name;
}

function getRandomTroubleNameList(index) {
    if (troubleNameList.length === 0) {
        return { name : null };
    }
    const nameList = troubleNameList.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return nameList;
}

function getRandomTrouble(content,index) {
    if (troubleRelations.length === 0) {
        return { relation: null, story: null };
    }
    const relation = troubleRelations.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    const story = troubleStories.splice(index, 1)[0]; 

    return  " years old, you met "+relation+" "+content+" "+story;
  }
//关系（奇遇）————————————————————————————————————————————————————————————————————————————————————————————
const wonderNames = [
    "Explorer", 
    "Rabbit", 
    "Wizard", 
    "Batman", 


];
const wonderNameList = [
    "he's on adventures!", 
    "poor little thing", 
    "gandalf the goat", 
    "drained knight", 
];
const wonderRelations = [
    "a passionate", 
    "a", 
    "a", 
    "",

];
const wonderStories = [
    "said he'll always be on the road until he finds the mystical grassland inhabited by elves.", 
    "in a cage. It looks at you, and you feel as though it's pleading: \"Please rescue me.\"", 
    "riding a goat. He invites you to start an unexpected adventure for 500 bucks.", 
    ". He lowered his voice to tell you that he is batman, drunkenly complaining about the immense job stress and wanting to retire.", 

];
function getRandomWonderIndex() {
    const index = Math.floor(Math.random() * wonderNames.length);
    return index;
}

function getRandomWonderNames(index) {
    if (wonderNames.length === 0) {
        return { name : null };
    }
    const name = wonderNames.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return name;
}
function getRandomWonderNameList(index) {
    if (wonderNameList.length === 0) {
        return { name : null };
    }
    const nameList = wonderNameList.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    return nameList;
}
function getRandomWonder(content,index) {
    if (wonderRelations.length === 0) {
        return { relation: null, story: null };
    }
    const relation = wonderRelations.splice(index, 1)[0]; // 使用splice方法删除，并返回被删除的名字
    const story = wonderStories .splice(index, 1)[0]; 

    return  " years old, you met "+relation+" "+content+" "+story;
  }
