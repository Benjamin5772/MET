function checkFinalMeet() {
  if (finalMeet && !previousFinalMeet) {
    // 显示GIF
    playGifsInSequence();
    // 播放音乐
    if(playMusic){
        music.pause();
    }
    previousFinalMeet = true;
  }
}


function playGifsInSequence() {
  const endPop = document.querySelector(".end-pop");  // 获取容器以便后续添加GIF

  const gif1 = document.getElementById("gif1");
  const gif2 = document.getElementById("gif2");
  const gif3 = document.getElementById("gif3");
  const gif4 = document.getElementById("gif4");
  const gif5 = document.getElementById("gif5");
  
  // 显示第一个GIF
  gif1.style.display = "block";
  
  setTimeout(() => {
    // 删除第一个GIF并显示第二个GIF
    gif1.src="gifs/touming.png";
    gif2.style.display = "block";
  }, 20000); // 20s后

  setTimeout(() => {
    // 删除第二个GIF并显示第三个GIF
    gif2.remove();
    gif3.style.display = "block";
  }, 40000); // 40s后

  setTimeout(() => {
    // 删除第三个GIF并显示第四个GIF
    gif3.remove();
    gif4.style.display = "block";
  }, 60000); // 60s后

  setTimeout(() => {
    // 删除第四个GIF并显示第五个GIF
    gif4.remove();
    gif5.style.display = "block";
  }, 70000); // 70s后

  // 注意：gif5不被删除，因为您希望其持续显示
}





//更新后年龄自动增加（在3分30s内结束游戏）
function afterFinalMeet(){
if(finalMeet){
const increaseAmount =0.0007;
//const increaseAmount =1;
age += increaseAmount;
age = Math.min(age, maxAge); 
ageContainer.textContent = age.toString();
updateLifeProgress();  // 更新生命进度
// 将所有球缩小腾出空间
setTimeout(() => {resizeAllBall();}, 3000); 

}
}


function resizeAllBall() {
    // 遍历balls Map对象
    balls.forEach((ballData) => {
        // 判断ball是否alive
        if(ballData.alive) {
            ballData.size = ballData.aliveSize;
            ballData.fontSize = ballData.aliveSize / 5; // 如果fontSize是size的五分之一
            ballData.lineHeight = ballData.aliveSize; // 基于您之前的代码逻辑
        }
    });
}
