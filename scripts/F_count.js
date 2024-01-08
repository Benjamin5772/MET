 //计算存活的球数
 function updateAliveCount() {
    const aliveCount = balls.size; // 使用Map的size属性
    aliveCountElement.textContent = `Alive Count: ${aliveCount}`;
  }
 //计算点击的次数
  function updateClickCount() {
    clickCountElement.textContent = clickCount;
  }
