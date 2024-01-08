const eraserContainer = document.getElementById("eraser-image");
const eraserImage = document.getElementById("eraser-image");
let currentState = 0;

eraserContainer.addEventListener("mouseenter", () => {
  if (currentState === 0) {
    eraserImage.src = "images/eraser2.png";
  }
});

eraserContainer.addEventListener("mouseleave", () => {
  if (currentState === 0) {
    eraserImage.src = "images/eraser1.png";
  }
});
  //点击变化鼠标
eraserContainer.addEventListener("click", () => {
    toggleState();
  });
  //空格变化鼠标
  document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      if (document.activeElement !== eraserContainer) {
        toggleState();
      }
    }
  });
  //鼠标变橡皮
  function toggleState() {
    if (currentState === 0) {
      eraserImage.src = "images/eraser3.png";
      document.body.style.cursor = "url('eraser.ico'), auto";
      eraserActive = true; // 改变橡皮擦状态
      currentState = 1;
    } else {
      eraserImage.src = "images/eraser1.png";
      document.body.style.cursor = "default";
      eraserActive = false;
      currentState = 0;
    }
  }