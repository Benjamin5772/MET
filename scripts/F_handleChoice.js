function handleChoice(eventDiv, choice) {
  
  // 显示选择文本并应用淡入动画
  const choiceText = document.createElement("p");
  choiceText.textContent = "You said " + choice +"." ;
  choiceText.classList.add("choice-text","fade-in"); // 添加淡入动画
  eventDiv.appendChild(choiceText);

  // 选择后移除按钮
  const buttons = eventDiv.querySelectorAll("button");
  buttons.forEach(button => button.remove());

  // 选择后移除gif
  const gif = eventDiv.querySelector('img');
  gif.remove();


}