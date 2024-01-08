function canCreateNewBall() {
    let totalArea = 0;
    balls.forEach(ball => {
      totalArea += Math.PI * Math.pow(ball.size / 2, 2); // 面积 = πr^2
    });
    const gameContainerArea = Math.PI * Math.pow(260, 2); // 游戏容器的面积 = πr^2 (r=260)
    return totalArea <= 0.5* gameContainerArea; // 如果总面积不超过容器面积的80%，返回 true
  }
  
  function showAlertText(textContent) {
    const alertTextDiv = document.getElementById('alert-text');
    alertTextDiv.innerText = textContent;
    alertTextDiv.style.display = 'block';
    // 添加淡入效果
    setTimeout(() => {
        alertTextDiv.style.opacity = '0.7';
    }, 50); 
    // 3秒后开始淡出
    setTimeout(() => {
        alertTextDiv.style.opacity = '0';
        // 淡出完成后隐藏元素
        setTimeout(() => {
            alertTextDiv.style.display = 'none';
        }, 1000); // 和 transition 的时间一致
    }, 4000);
}

