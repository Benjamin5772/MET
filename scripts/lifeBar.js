
// 在文档加载完毕后运行
document.addEventListener("DOMContentLoaded", function() {
  
    setTimeout(() => {
    document.getElementById('border-path').style.visibility = 'visible';
  }, 510);
});
 
//初始化年龄
let intervalId;//初始化计时器序号
const gameContainerRect = gameContainer.getBoundingClientRect();
const borderPath = document.getElementById('border-path');
  
const containerWidth = 600; // border-path-container的宽度
const containerHeight = 600; // border-path-container的高度
  
const centerX = containerWidth / 2;
const centerY = containerHeight / 2;
//const radius = Math.min(containerWidth, containerHeight) / 2; 
const radius = gameContainerRect.width / 2 +2;
  
// 设置为圆形路径
const pathData = `M ${centerX + radius} ${centerY} A ${radius} ${radius} 0 1 0 ${centerX - radius} ${centerY} A ${radius} ${radius} 0 1 0 ${centerX + radius} ${centerY}`;
borderPath.setAttribute('d', pathData);
// 获取路径的总长度
const pathLength = borderPath.getTotalLength();
// 设置描边的初始属性
borderPath.style.strokeDasharray = pathLength;
borderPath.style.strokeDashoffset = pathLength;
  
// 当age值变化时，更新strokeDashoffset
function updateLifeProgress() {
const progressRatio = (age-ageFix)/ (maxAge-ageFix);
const offset = pathLength * (1 - progressRatio);
borderPath.style.strokeDashoffset = offset;
}




  // 当按下鼠标按钮时开始递增年龄
 gameContainer.addEventListener("mousedown", () => {
  //条件：不再选择未做或者满员的时候
  if(canCreateNewBall()&&choiceMadeForCreate){
  if (!eraserActive&&ageAbaleGrow&&!finalMeet) {
    intervalId = setInterval(() => {
      const increaseAmount =Math.random()*0.1+0.5;//年龄随机增加
      //const increaseAmount =2;//测试用
      age += increaseAmount;
      age = Math.min(age, maxAge);  // 确保age值不超过maxAge
      ageContainer.textContent = age.toString();
      updateLifeProgress();  // 更新生命进度
    }, 200);  // 每200毫秒增加一次
  }
}
});



// 当释放鼠标按钮时停止递增年龄
gameContainer.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

// 当鼠标离开元素时也停止递增年龄
gameContainer.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});

